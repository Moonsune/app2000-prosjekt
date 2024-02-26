"use client";

import React, { useState } from 'react';
import { updatePost } from '@/app/lib/actions';

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
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            {
            // postID
            // 65c7d68885bd9bb0a41c3d69
            // 65d3846c4bd5e55821c47fa9

            // userID
            // 65c7d64985bd9bb0a41c3d67
            }
            <input 
                type='text'
                placeholder='id' 
                name='id' 
                value={id} 
                onChange={(e) => setId(e.target.value)}/>
            <input
                type='text'
                placeholder='Title'
                name='title'
                value={currentTitle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='Description'
                name='desc'
                value={currentDesc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button type='submit'>Update</button>
        </form>
    );
};

export default UpdatePostComponent;
