// Laget av Markus Moen Magnussen

"use client";

import React, {useState} from 'react';
import {addPost} from '@/app/lib/actions';
import {TextField, Button, FormControl} from '@mui/material';

const CreateMenuItem = () => {
    const [currentTitle, setTitle] = useState('');
    const [currentDesc, setDesc] = useState('');
    const [currentImage, setImage] = useState('');
    const [currentPriceLarge, setPriceLarge] = useState('');
    const [currentPriceSmall, setPriceSmall] = useState('');

    const handleButtonClick = async (e) => {
        e.preventDefault();
        try {
            // sjekker om alle felter er fylt ut, hvis ikke får de en popup
            if (!currentTitle || !currentDesc || !currentImage || !currentPriceSmall || !currentPriceLarge) {
                alert("Alle felt må fylles ut");

            } else {
                await addPost({
                    title: currentTitle,
                    desc: currentDesc,
                    img: currentImage,
                    priceLarge: currentPriceLarge,
                    priceSmall: currentPriceSmall
                });

                console.log('Rett laget');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }

    }
        return (
            <FormControl fullWidth
            margin="dense">
                {/* Input for Title */}
                <TextField
                    fullWidth
                    type="text"
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
                    onChange={(e) => setDesc(e.target.value)}
                />

                {/* Input for image */}
                <TextField
                    fullWidth
                    type="text"
                    label="URL"
                    placeholder="URL"
                    name="img"
                    value={currentImage}
                    onChange={(e) => setImage(e.target.value)}
                />

                {/* Input for price large */}
                <TextField
                    fullWidth
                    type="text"
                    label="Pris Stor"
                    placeholder=""
                    name="priceLarge"
                    value={currentPriceLarge}
                    onChange={(e) => setPriceLarge(e.target.value)}
                />

                {/* Input for price small */}
                <TextField
                    fullWidth
                    type="number"
                    label="Pris Liten"
                    placeholder=""
                    name="priceSmall"
                    value={currentPriceSmall}
                    onChange={(e) => setPriceSmall(e.target.value)}
                />

                {/* Submit Button */}
                <Button
                    sx={{

                        backgroundColor: '#378025', // Custom orange background color
                        color: 'white',             // White text color
                        '&:hover': {
                            backgroundColor: '#2a6f21' // Darker orange on hover
                        }
                    }}
                    onClick={handleButtonClick}>
                    Lag matrett
                </Button>
            </FormControl>
        )
    };


export default CreateMenuItem;
