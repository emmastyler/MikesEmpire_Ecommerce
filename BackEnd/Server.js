import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './Config/Database.js'
import asyncHandler from 'express-async-handler'
import User from './Models/UserModel.js'
import Product from './Models/ProductModel.js'
import uploadRoutes from './Routes/uploadRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('connected')
})

//@desc   Auth user: Admin
//@route  POST /api/users/login
//@access Private


app.post('/api/users/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or name or Password')
    }
}))

//@desc   Admin Create Product
//@route  POST /api/product
//@access Public

app.post('/api/product', asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 100,
        oldPrice: 150,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        description: 'Sample description',
        new: 'New',
        sale: 'Sale',
        women: 'Women',
        men: 'Men',
        kids: 'Kids'
    })

    const createProduct = await product.save()
    res.status(201).json(createProduct)
}))


//@desc   Admin Update Product
//@route  PUT /api/updateproduct/:id
//@access Public

app.put('/api/updateproduct/:id', asyncHandler(async (req, res) => {

    const { name, price, description, image, brand, category, countInStock, news, sale, oldPrice, men, women, kids } = req.body
    const product = await Product.findById(req.params.id)
    if (product) {

        product.name = name
        product.price = price
        product.oldPrice = oldPrice
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        product.new = news
        product.sale = sale
        product.women = women
        product.men = men
        product.kids = kids


        const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)

    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

//@desc   Admin Get Product
//@route  GET /api/productstore
//@access Public

app.get('/api/productstore', asyncHandler(async (req, res) => {
    const product = await Product.find({})

    if (product) {
        res.status(201).json(product)
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

//@desc   Admin Get Product by id
//@route  GET /api/products/:id
//@access Public

app.get('/api/products/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.status(201).json(product)
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

//@desc   Admin Delete Product by id
//@route  GET /api/deleteproducts/:id
//@access Public

app.delete('/api/deleteproducts/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product Removed Successfully' })
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
}))


//@desc   Admin upload image
//@route  GET /api/upload
//@access Public

app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))



//@desc for detecting unassigned pages
app.use((req, res, next) => {
    const error = new Error(`Not Found -${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err, req, res, next) => {
    const error = res.statusCode === 200 ? 500 : res.statusCode
    res.status(error)
    res.json({
        message: err.message
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))