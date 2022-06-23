import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link, NavLink} from 'react-router-dom'
import './navBar.css'
import logo from '../../../assets/img/vinilo_store_logo.svg'


const NavBar = () => {



    return (
     <>
        <Navbar  className='navContainer' sticky="top" bg="" expand="lg">

            <Container className='navContainer1'>

                <Link to={'/'}>
                    <Navbar.Brand >
                        <div className='logoStyle'>
                            <img className='imgLogo' src={logo} />
                        
                        </div>
                    </Navbar.Brand>
                </Link>

                 <div className='emptyPlace'></div>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        
                        <Nav.Link>
                            <NavLink className='navStyle decoNone' to={'/products'}>
                                DEALS 
                            </NavLink>
                        </Nav.Link>
                        
                        <Nav.Link >
                            <NavLink className='navStyle' to={'/products'}>
                                PRODUCTS
                            </NavLink>
                        </Nav.Link>
                        
                        <NavDropdown className='navStyle dropdownStyle' title="CATEGORIES" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/Vinyl edition'}>
                                  
                                        Vinyls
                                 
                                </NavLink>

                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/Single edition'}>
                                    Singles
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/LP edition'}>
                                    LP´s
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/CD edition'}>
                                    CDs
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/Books'}>
                                    Books
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/Players'}>
                                    Players
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className='navStyle' to={'/category/Others'}>
                                    Others
                                </NavLink>
                            </NavDropdown.Item>
                        

                        </NavDropdown>
                        
                        <Nav.Link >
                            <NavLink className='navStyle' to={'/'}>
                                CONTACT                            
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                    

                    
                </Navbar.Collapse>
                    <div className='iconsContainer'>
                        <div>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5_19)">
                                <path d="M20.9998 19.5238C20.9054 19.8299 20.784 20.117 20.5629 20.3611C20.2758 20.6779 19.9347 20.8923 19.5234 21.0001C19.332 21.0001 19.1405 21.0001 18.9491 21.0001C18.8089 20.9556 18.6673 20.9152 18.5284 20.8639C18.0822 20.6995 17.7263 20.4069 17.3959 20.0766C16.0248 18.7041 14.6523 17.3316 13.2798 15.9604C13.0681 15.7501 12.9616 15.7353 12.6987 15.8742C12.638 15.9065 12.5787 15.9389 12.5194 15.9712C10.8624 16.8826 9.09894 17.2076 7.22625 16.9419C5.88342 16.7519 4.66058 16.2544 3.56986 15.4562C1.66481 14.0648 0.497248 12.2056 0.117048 9.8651C-0.147205 8.23914 0.0294128 6.65767 0.699482 5.16113C1.95738 2.35412 4.11724 0.664793 7.1548 0.12685C8.76997 -0.158975 10.3407 0.0446079 11.8439 0.679623C13.8097 1.51013 15.255 2.91229 16.2001 4.81868C16.9362 6.30173 17.1694 7.87916 16.9672 9.51456C16.8297 10.6349 16.4589 11.6852 15.8927 12.6667C15.7147 12.9755 15.7336 13.0577 15.9857 13.3112C17.3622 14.6877 18.7428 16.0616 20.114 17.4435C20.3189 17.6498 20.5117 17.8803 20.6586 18.1297C20.8056 18.3832 20.8878 18.6744 20.9984 18.9495C20.9998 19.1409 20.9998 19.3324 20.9998 19.5238ZM2.23916 8.51283C2.23242 11.9953 4.99494 14.7888 8.5219 14.805C11.9882 14.8212 14.8316 11.9697 14.806 8.50878C14.779 5.00609 12.0125 2.26514 8.5192 2.23413C5.03538 2.26784 2.2459 5.00069 2.23916 8.51283Z" fill="#01154B"/>
                                <path d="M6.34341 5.56683C6.49172 5.52234 6.64272 5.48459 6.78833 5.43201C8.69203 4.74172 10.6726 5.54257 11.557 7.36537C11.7201 7.70243 11.9305 7.96803 12.3349 8.00308C13.0225 8.06241 13.5173 7.40986 13.2302 6.78024C12.3983 4.948 10.9881 3.8411 8.99538 3.49056C7.98016 3.31125 7 3.45281 6.0468 3.82492C5.60458 3.9975 5.37673 4.39792 5.46302 4.85093C5.53852 5.24596 5.91602 5.54526 6.34341 5.56683Z" fill="#01154B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5_19">
                                <rect width="21" height="21" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="inline-block no-underline hover:text-black" >
                           <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10_30)">
                            <path d="M18.8735 19.2243C18.4611 17.0543 17.3226 15.3012 15.4897 14.0134C12.3323 11.7975 8.92697 11.4418 5.36605 12.959C2.38196 14.2302 0.602138 16.4385 0.0784361 19.5227C0.0164521 19.8861 -0.00758256 20.2902 0.00380226 20.7607C0.021512 21.4887 0.628702 21.9987 1.47877 21.9987C2.69188 21.9987 3.905 22 5.11812 22C5.84801 22 6.57917 22 7.30906 22H9.49495H10.6625C12.9205 22 15.1798 22 17.4378 21.9987C17.5883 21.9987 17.7489 21.9949 17.9147 21.9694C18.5282 21.8751 19.0152 21.3115 19.0013 20.7123C18.9886 20.2596 18.9696 19.7331 18.8735 19.2243ZM16.1323 19.2715H2.86898C3.15234 18.2706 3.68616 17.419 4.49195 16.6782C5.58363 15.676 6.91439 15.0679 8.44628 14.8702C10.5006 14.605 12.3513 15.0577 13.9464 16.2166C15.0469 17.0135 15.7806 18.0411 16.1323 19.2715Z" fill="#01154B"/>
                            <path d="M9.24574 10.9305C9.33049 10.9343 9.41525 10.9356 9.5 10.9356C10.894 10.9356 12.2083 10.4154 13.2228 9.45662C14.2917 8.44683 14.8964 7.06856 14.9242 5.57682C14.9533 4.08635 14.4069 2.68896 13.3873 1.63964C12.3614 0.585222 10.9876 0.00255051 9.51897 0.00127552C6.61332 -0.0509992 4.12384 2.38679 4.07071 5.32055C4.01758 8.33208 6.29075 10.7966 9.24574 10.9305ZM9.47344 2.70681C9.48356 2.70681 9.49368 2.70681 9.50379 2.70681C10.2476 2.71573 10.9421 3.01026 11.4595 3.53683C11.9756 4.06213 12.2551 4.757 12.2463 5.49394C12.2374 6.24364 11.9414 6.93724 11.4114 7.44596C10.8801 7.95723 10.1616 8.23518 9.4026 8.2237C7.95546 8.20585 6.74234 6.93086 6.75373 5.43912C6.75879 4.7111 7.05353 4.02133 7.58229 3.49858C8.10093 2.98731 8.77137 2.70681 9.47344 2.70681Z" fill="#01154B"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_10_30">
                            <rect width="19" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>

                        <div>
                            <NavLink className='decoNone' to='/cart' >
                                <CartWidget/>    
                            </NavLink>            
                        </div>
                    </div>    
               

                <Navbar.Toggle className='toggleStyle' aria-controls="basic-navbar-nav" />
               
                    

            </Container>
                  
        </Navbar>

    </>
    )
}

export default NavBar