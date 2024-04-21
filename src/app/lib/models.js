// Laget av Markus Moen Magnussen

import mongoose from 'mongoose';


const orderHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    
})

const menuSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        priceLarge: {
            type: Number,
            required: true
        },
        priceSmall: {
            type: Number,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        }
    },
    {timestamps: true}
);
export const Menu = mongoose.models.Menu || mongoose.model('Menu', menuSchema);