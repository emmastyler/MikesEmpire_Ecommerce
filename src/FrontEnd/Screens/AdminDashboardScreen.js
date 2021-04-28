import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { productStore, createProduct, deleteProduct } from '../Actions/productActions'
import { PRODUCT_CREATE_RESET, PRODUCT_DETAIL_RESET } from '../Constants/productConstant'


const AdminDashboardScreen = ({ history }) => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, adminInfo } = userLogin

    const productStores = useSelector(state => state.productStores)
    const { loading: productLoading, error: producterror, product } = productStores

    const productCreate = useSelector(state => state.createProducts)
    const { product: createdProduct, success } = productCreate

    const productDelete = useSelector(state => state.productDelete)
    const { success: successDelete } = productDelete





    useEffect(() => {

        if (!adminInfo) {
            history.push('/')
        }
        dispatch(productStore())


        if (success) {
            history.push(`/admin`)
        }
    }, [history, adminInfo, dispatch, success, createdProduct, successDelete])

    const createProductHandler = () => {

        dispatch(createProduct())
    }

    const getProductInfo = () => {
        dispatch({
            type: PRODUCT_DETAIL_RESET
        })
    }

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    }
    return (
        <>
            <Row className='align-items-center' >
                <Col lg={3} sm={3}>
                </Col>
                <Col lg={4} sm={4}>
                    <h3><b>Products In Store</b></h3>
                </Col>
                <Col className='text-right' lg={3} sm={3}>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'></i><span> Create Product</span>
                    </Button>
                </Col>
                <Col lg={2} sm={2}>
                </Col>
            </Row>
            <>
                <Container>
                    <Row className="justify-content-md-center">
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>OLD PRICE</th>
                                    <th>COUNT IN STOCK</th>

                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((product) => (
                                    <tr Key={product._id}>

                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.oldPrice}</td>
                                        <td>{product.countInStock}</td>
                                        <td>
                                            <Link to={`/admin/product/${product._id}/edit`}>
                                                <Button variant='light' className='btn-sm'><i className='fas fa-edit' onClick={getProductInfo}></i><span> Edit</span></Button>
                                            </Link>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                                <i className='fas fa-trash'></i><span> Delete</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </>
        </>)
}

export default AdminDashboardScreen
