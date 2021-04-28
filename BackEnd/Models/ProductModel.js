import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    oldPrice: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    countInStock: {
        type: Number,
        required: true
    },

    new: {
        type: String,

    },

    sale: {
        type: String,

    },

    women: {
        type: String,

    },

    men: {
        type: String,

    },
    kids: {
        type: String,

    },
    image: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product

