// Laget av Markus Moen Magnussen

import mongoose from 'mongoose';


const orderHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    
})

const bookingSchema = new mongoose.Schema({
    epost: {
        type: String,
        required: true,
    },
    dato: {
        type: Date,
        required: true,
    },
    tid: {
        type: Date,
        required: true,
    },
    antall: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
},
    {timestamp: true}
)

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
export const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);