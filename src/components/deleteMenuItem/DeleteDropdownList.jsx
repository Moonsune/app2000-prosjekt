// laget av Markus Moen Magnussen

"use client"

import React, { useState, useEffect } from 'react';
import styles from './DeleteDropdownList.module.css';
import {Button, FormControl, InputLabel, MenuItem, Select, Box} from '@mui/material';
import {sizing} from '@mui/system';
import fetchMenuItems from "@/components/deleteMenuItem/fetchMenuItems/fetchMenuItems";
import {deletePost} from "@/app/lib/actions";

const DeleteDropdownList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const fetchedItems = await fetchMenuItems();
                setItems(fetchedItems);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadItems();
    }, []);

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (selectedItem) {
            deletePost(selectedItem)
        } else {
            console.log("har ikke valgt rett: ", selectedItem)
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Box
        >
            <FormControl fullWidth
            margin="dense">
                <InputLabel id="menu-dropdown-label">Velg Matrett</InputLabel>
                <Select
                    margin="dense"
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
                <Button
                    sx={{
                        backgroundColor: '#A11010',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#880808'
                        }
                    }}
                onClick={handleButtonClick}>
                    Slett matrett
                </Button>

            </FormControl>
        </Box>
    );
};

export default DeleteDropdownList;
