import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FormControl, FormGroup, FormLabel, FormFile, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productDetail, updateProduct } from '../Actions/productActions'
import { PRODUCT_DETAIL_RESET, PRODUCT_UPDATE_RESET } from '../Constants/productConstant'


const AdminEditProduct = ({ match, history }) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [oldPrice, setOldPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInstock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)
    const [news, setNews] = useState('')
    const [sale, setSale] = useState('')
    const [men, setMen] = useState('')
    const [kids, setKids] = useState('')
    const [women, setWomen] = useState('')

    const dispatch = useDispatch()

    const productStores = useSelector(state => state.productStores)
    const { loading: productLoading, error: producterror, product } = productStores

    const productdetails = useSelector(state => state.productDetails)
    const { product: detailProduct } = productdetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { success: successUpdate } = productUpdate


    useEffect(() => {

        if (successUpdate) {

            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin')
        }

        if (!detailProduct) {

            dispatch(productDetail(productId))
        }
        else {
            setName(detailProduct.name)
            setPrice(detailProduct.price)
            setOldPrice(detailProduct.oldPrice)
            setImage(detailProduct.image)
            setBrand(detailProduct.brand)
            setCategory(detailProduct.category)
            setCountInstock(detailProduct.countInStock)
            setDescription(detailProduct.description)
            setNews(detailProduct.new)
            setSale(detailProduct.sale)
            setMen(detailProduct.men)
            setWomen(detailProduct.women)
            setKids(detailProduct.kids)

        }



    }, [history, detailProduct, dispatch, productId, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            const { data } = await axios.post('/api/upload', formData, config)
            setImage(data)
            setUploading(false)
        } catch (error) {
            console.log(error)
            setUploading(false)

        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            oldPrice,
            image,
            brand,
            category,
            countInStock,
            description,
            news,
            sale,
            men,
            women,
            kids
        }))
    }
    return (
        <>

            <Row className="justify-content-md-center my-3" >
                <Col lg={3} sm={3}>
                    <Link to='/admin' className='btn btn-light my-3'>
                        Go Back
        </Link>
                </Col>
                <Col lg={6} sm={6} className='pt-3'>
                    <h3><b>
                        Edit Product
                        </b>
                    </h3>
                    <Form onSubmit={submitHandler}>
                        <FormGroup controlId='name'>
                            <FormLabel>
                                Name
        </FormLabel>
                            <FormControl type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='price'>
                            <FormLabel>
                                Price
        </FormLabel>
                            <FormControl type='number' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='price'>
                            <FormLabel>
                                Old Price
        </FormLabel>
                            <FormControl type='number' placeholder='Enter old price' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='countInStock'>
                            <FormLabel>
                                Count In Stock
        </FormLabel>
                            <FormControl type='number' placeholder='Enter countInStock' value={countInStock} onChange={(e) => setCountInstock(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='brand'>
                            <FormLabel>
                                Brand
        </FormLabel>
                            <FormControl type='text' placeholder='Enter brand' value={brand} onChange={(e) => setBrand(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='image'>
                            <FormLabel>
                                Image
        </FormLabel>
                            <FormControl type='text' placeholder='Enter image url' value={image} onChange={(e) => setImage(e.target.value)}></FormControl>

                            <FormFile id='image-file' label='Choose File' custom onChange={uploadFileHandler}>
                            </FormFile>


                        </FormGroup>

                        <FormGroup controlId='description'>
                            <FormLabel>
                                Description
        </FormLabel>
                            <FormControl type='text' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='category'>
                            <FormLabel>
                                Category
        </FormLabel>
                            <FormControl type='text' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)}></FormControl>
                        </FormGroup>


                        <FormGroup controlId='category'>
                            <FormLabel>
                                women
        </FormLabel>
                            <FormControl type='text' placeholder='Enter sub-category/women' value={women} onChange={(e) => setWomen(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='category'>
                            <FormLabel>
                                Men
                        </FormLabel>
                            <FormControl type='text' placeholder='Enter sub-category/men' value={men} onChange={(e) => setMen(e.target.value)}></FormControl>
                        </FormGroup>
                        <FormGroup controlId='category'>
                            <FormLabel>
                                Kids
                        </FormLabel>
                            <FormControl type='text' placeholder='Enter sub-category/kids' value={kids} onChange={(e) => setKids(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='news'>
                            <FormLabel>
                                New
        </FormLabel>
                            <FormControl type='text' placeholder='Enter new' value={news} onChange={(e) => setNews(e.target.value)}></FormControl>
                        </FormGroup>

                        <FormGroup controlId='sale'>
                            <FormLabel>
                                Sale
        </FormLabel>
                            <FormControl type='text' placeholder='Enter sale' value={sale} onChange={(e) => setSale(e.target.value)}></FormControl>
                        </FormGroup>
                        <Button type='submit' variant='light'> Update</Button>

                    </Form>
                </Col>
                <Col lg={3} md={3}>
                </Col>
            </Row>







        </>

    )
}

export default AdminEditProduct