import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logoURL from '../shared/birdLogo.png'

const Header = () => {

    const [navOpen, setNavOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    function toggleNav() {
        setNavOpen(!navOpen)
    }

    function toggleModal() {
        setModalOpen(!modalOpen)
    }

    function handleLogin(event) {
        event.preventDefault();
        alert('User will be Login with the Credentials:\n Username: ' + username + ' & Password: ' + password)
        toggleModal()
    }

    function handleLogout() {
       alert('User will be logged out')
    }

    return (
        <>
            <Navbar light expand='md'>
                <div className="container-fluid">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className='mr-auto'>
                            <img src={ logoURL } alt='BirdWatcher' height='50' width='70' />
                    </NavbarBrand>
                    <Collapse isOpen={navOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <span className='fa fa-info fa-lg'></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/birds'>
                                    <span className='fa fa-list fa-lg'></span> Bird Species
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto'>
                            <NavItem>
                                <Button color='primary' onClick={toggleModal}>
                                    <span className='fa fa-sign-in fa-lg'></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>  
            
            <Modal isOpen={modalOpen} toggle={toggleModal} >
                <ModalHeader toggle={toggleModal} >Login</ModalHeader>
                <ModalBody>
                    <p>hello</p>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>Username:</Label>
                            <Input type='text' id='username' name='username' 
                                    onChange={ (event) => setUsername(event.target.value) } />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password:</Label>
                            <Input type='password' id='password' name='password' 
                                    onChange={ (event) => setPassword(event.target.value) } />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember'  
                                    onChange={ (event) => setRemember(!remember) }  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <hr />

                        <Button type='submit' value='submit' color='primary'> Login </Button>{' '}
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Header
