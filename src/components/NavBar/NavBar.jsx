// import '../styles/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link, NavLink} from 'react-router-dom'



const NavBar = () => {



    return (
     <>
        <Navbar bg="light" expand="lg">

            <Container>

                <Link to={'/'}>
                    <Navbar.Brand >Tienda Remi</Navbar.Brand>
                </Link>

                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        
                        <Nav.Link>
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link >
                            <NavLink to={'/'}>
                                Productos
                            </NavLink>
                        </Nav.Link>

                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        
                            <NavDropdown.Item >
                                <NavLink to={'/categoria/remeras'}>
                                    Remeras
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <NavLink to={'/categoria/gorras'}>
                                    Gorras
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <NavLink to={'/categoria/pantalones'}>
                                    Pantalones
                                </NavLink>
                            </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item >Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <div className="inline-block no-underline hover:text-black" >
                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                    </div>
                    

                </Navbar.Collapse>

                <div>
                    <NavLink to='/cart' >
                        <CartWidget/>    
                    </NavLink>            
                </div>
                    

            </Container>
        </Navbar>

    </>
    )
}

export default NavBar