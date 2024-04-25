// Laget av Markus Moen Magnussen

"use client";

import React, {useEffect, useState} from 'react';
import {updatePost} from '@/app/lib/actions';
import {TextField, Button, InputLabel, Select, MenuItem, FormControl, Box} from '@mui/material';
import fetchMenuItems from "@/components/deleteMenuItem/fetchMenuItems/fetchMenuItems";
import CreateMenuItemPreview from "@/components/createMenuItem/createMenuItemPreview/CreateMenuItemPreview";

const UpdatePostComponent = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [currentTitle, setTitle] = useState('');
    const [currentDesc, setDesc] = useState('');
    const [currentImage, setImage] = useState('');
    const [currentPriceSmall, setCurrentPriceSmall] = useState('');
    const [currentPriceLarge, setCurrentPriceLarge] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleButtonClick = async (e) => {
        e.preventDefault();
        if (selectedItem) {
            try {
                if (!currentTitle)
                        setTitle(selectedItem.title);
                if (!currentDesc)
                        setDesc(selectedItem.desc)
                await updatePost(selectedItem, { title: currentTitle, desc: currentDesc, img: currentImage, priceSmall: currentPriceSmall, priceLarge: currentPriceLarge });

                console.log('Post updated')
            } catch (error) {
                console.error('Error updating post:', error);
            }
        } else {
            console.log('Matrett ikke valgt: ', selectedItem);
        }
    };


    useEffect(() => {
        const loadItems = async () => {
            try {
                const fetchedItems = await fetchMenuItems();
                setItems(fetchedItems);
                console.log(currentDesc)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadItems();
    }, [currentDesc]);

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <FormControl fullWidth
        margin="dense">
            {/* Input for ID */}
            <InputLabel id="menu-dropdown-label">Velg Matrett</InputLabel>
            <Select
                labelId="menu-dropdown-label"
                id="menu-dropdown-select"
                value={selectedItem}
                label="Velg matrett som skal slettes"
                onChange={handleChange}
            >
                {items.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                        {item.title}
                    </MenuItem>
                ))}
            </Select>

            {/* Input for Title */}
            <TextField
                fullWidth
                type="email"
                label="Tittel"
                placeholder="Tittel"
                name="title"
                value={currentTitle}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Input for Description */}
            <TextField
                fullWidth
                type="text"
                label="Beskrivelse"
                placeholder="Beskrivelse"
                name="desc"
                value={currentDesc}
                inputProps = {{
                    autoComplete: "off"
                }}
                onChange={(e) => setDesc(e.target.value)}
            />
            {/*bilde*/}
            <TextField
                fullWidth
                type="text"
                label="URL"
                placeholder="URL"
                name="img"
                value={currentImage}
                onChange={(e) => setImage(e.target.value)}
            />

            {/* Submit Button */}
            <Button
                sx={{

                    backgroundColor: '#ff5722', // Custom orange background color
                    color: 'white',             // White text color
                    '&:hover': {
                        backgroundColor: '#e64a19' // Darker orange on hover
                    }
                }}
                onClick={handleButtonClick}>
                Oppdater matrett
            </Button>
            <Box>
                <CreateMenuItemPreview post={{title: currentTitle, desc: currentDesc, img: currentImage}} />
            </Box>
        </FormControl>
    );
};

export default UpdatePostComponent;
