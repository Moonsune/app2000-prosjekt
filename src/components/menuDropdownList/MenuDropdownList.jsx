"use client"

import React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import fetchMenuItems from "@/components/menuDropdownList/fetchMenuItems/fetchMenuItems";
import {deletePost} from "@/app/lib/actions";

const MenuDropdownList = () => {
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

    const handleButtonClick = () => {
        deletePost(selectedItem)
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <FormControl fullWidth>
            <InputLabel id="menu-dropdown-label">Select Item</InputLabel>
            <Select
                labelId="menu-dropdown-label"
                id="menu-dropdown-select"
                value={selectedItem}
                label="Select Item"
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
                    backgroundColor: '#ff5722', // Custom orange background color
                    color: 'white',             // White text color
                    '&:hover': {
                        backgroundColor: '#e64a19' // Darker orange on hover
                    }
                }}
            onClick={handleButtonClick}>
                Slett matrett
            </Button>

        </FormControl>
    );
};

export default MenuDropdownList;
