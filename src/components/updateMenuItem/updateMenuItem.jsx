// Laget av Markus Moen Magnussen

"use client";

import React, { useState } from 'react';
import { updatePost } from '@/app/lib/actions';
import { TextField, Button, Box } from '@mui/material';

const UpdatePostComponent = ({ id }) => {
    const [currentId, setId] = useState('');
    const [currentTitle, setTitle] = useState('');
    const [currentDesc, setDesc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(currentId, { title: currentTitle, desc: currentDesc });
            console.log('Post updated')
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ padding: 3 }}>
            {/* Input for ID */}
            <TextField
                fullWidth
                margin="normal"
                type="text"
                label="ID"
                placeholder="id"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            {/* Input for Title */}
            <TextField
                fullWidth
                margin="normal"
                type="text"
                label="Title"
                placeholder="Title"
                name="title"
                value={currentTitle}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Input for Description */}
            <TextField
                fullWidth
                margin="normal"
                type="text"
                label="Description"
                placeholder="Description"
                name="desc"
                value={currentDesc}
                onChange={(e) => setDesc(e.target.value)}
            />

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Update
            </Button>
        </Box>
    );
};

export default UpdatePostComponent;
