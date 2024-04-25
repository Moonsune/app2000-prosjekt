// Laget av Markus Moen Magnussen

import mongoose from 'mongoose';

/**
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {price: {type: NumberConstructor, required: boolean}, title: {type: StringConstructor, required: boolean}, slug: {type: StringConstructor, required: boolean}, desc: {type: StringConstructor, required: boolean}}, HydratedDocument<FlatRecord<{price: {type: NumberConstructor, required: boolean}, title: {type: StringConstructor, required: boolean}, slug: {type: StringConstructor, required: boolean}, desc: {type: StringConstructor, required: boolean}}>, {}>>}
 */

const orderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    },
{timestamps: true}
);

const orderHistorySchema = new mongoose.Schema({
        items: {
            type: [orderSchema],
            required: true,
        }
}, { timestamps: true }
)

/**
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamp: boolean}, {antall: {type: NumberConstructor, required: boolean}, epost: {type: StringConstructor, required: boolean}, dato: {type: DateConstructor, required: boolean}, tid: {type: DateConstructor, required: boolean}, slug: {type: StringConstructor, required: boolean}}, HydratedDocument<FlatRecord<{antall: {type: NumberConstructor, required: boolean}, epost: {type: StringConstructor, required: boolean}, dato: {type: DateConstructor, required: boolean}, tid: {type: DateConstructor, required: boolean}, slug: {type: StringConstructor, required: boolean}}>, {}>>}
 */
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

/**
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {timestamps: boolean}, {img: {type: StringConstructor, required: boolean}, priceSmall: {type: NumberConstructor, required: boolean}, priceLarge: {type: NumberConstructor, required: boolean}, title: {type: StringConstructor, required: boolean}, slug: {unique: boolean, type: StringConstructor, required: boolean}, desc: {type: StringConstructor, required: boolean}}, HydratedDocument<FlatRecord<{img: {type: StringConstructor, required: boolean}, priceSmall: {type: NumberConstructor, required: boolean}, priceLarge: {type: NumberConstructor, required: boolean}, title: {type: StringConstructor, required: boolean}, slug: {unique: boolean, type: StringConstructor, required: boolean}, desc: {type: StringConstructor, required: boolean}}>, {}>>}
 */
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
export const Order = mongoose.models.Order  || mongoose.model('Order', orderSchema);
export const OrderHistory = mongoose.models.OrderHistory  || mongoose.model('OrderHistory', orderHistorySchema);