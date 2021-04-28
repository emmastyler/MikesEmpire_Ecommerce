import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Actions/userActions'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const redirect = location.search ? location.searc.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, adminInfo } = userLogin

    useEffect(() => {
        if (adminInfo) {
            history.push('/admin')
        }
    }, [history, adminInfo])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, name, password))
    }

    return (
        <>
            <Row className='justify-content-md-center pt-3'>
                <Container>
                    <Col lg={3} sm={3}>
                        {error && <h6>{error}</h6>}
                    </Col>
                    <Col lg={6} sm={6}>

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>
                                    Name
                    </Form.Label>
                                <Form.Control type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>
                                    Email
                    </Form.Label>
                                <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>
                                    Password
                    </Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}>

                                </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Sign In
                </Button>
                        </Form>
                    </Col>
                    <Col lg={3} sm={3}>
                    </Col>
                </Container>
            </Row>

        </>
    )
}

export default LoginScreen
