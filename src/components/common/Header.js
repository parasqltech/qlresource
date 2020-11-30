import React, { Component,useState } from 'react';
import { ListGroup,Navbar,Nav,Form,FormControl,Button, Container,Image,NavDropdown } from 'react-bootstrap'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube,FaPhoneAlt,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo.png'
class Header extends Component {
state = {
isTop: true,
};

componentDidMount() {
document.addEventListener('scroll', () => {
const isTop = window.scrollY < 100;
if (isTop !== this.state.isTop) {
this.setState({ isTop })
}
});
}

render() {

return (
<>
<header className={this.state.isTop ? '' : 'sticky'} >
<div className="social-header">
<Container>
<div className="d-md-block d-none">
<div className="d-flex justify-content-between ">
<div className="first-li">
<ListGroup as="ul" horizontal>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-facebook"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-twitter"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-instagram"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-linkedin"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-youtube"></i></Link></ListGroup.Item>
</ListGroup>
</div>
<div className="second-li">
<ListGroup as="ul" horizontal>
<ListGroup.Item as="li">
<a href="tel:+61862623559" className="nav-link font-16 font-regular"><FaPhoneAlt className="font-16 font-regular"/>+61 8 6262 3559</a>
</ListGroup.Item>
<ListGroup.Item as="li">|</ListGroup.Item>
<ListGroup.Item as="li">
<a href="mailto:support@qltech.com.au" className="nav-link font-16 font-regular"><FaEnvelope className="font-16 font-regular"/>support@qltech.com.au</a>
</ListGroup.Item>
</ListGroup>
</div>
</div>
</div>

<div className="d-md-none d-block">
<div className="d-flex justify-content-end medium-justify-center">
<div className="first-li">
<ListGroup as="ul" horizontal>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-phone"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-envelope"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-facebook"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-twitter"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-instagram"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-linkedin"></i></Link></ListGroup.Item>
<ListGroup.Item as="li" className=""><Link className="nav-link p-0" to="/" target="_blank"><i className="fa fa-youtube"></i></Link></ListGroup.Item>
</ListGroup>
</div>
</div>
</div>
</Container>
</div>
<div className="sub-header">
<Container>
<Navbar collapseOnSelect expand="lg" className="p-0">
    <Navbar.Brand>
        <Link className="nav-link p-0" to="/">
        <   Image src={logo} className="img-fluid header-logo" />
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <ListGroup as="ul" horizontal>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/">Home</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                    <   Link className="nav-link" to="/about">About</Link>
                    </ListGroup.Item>
                    {/* <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/team">Team</Link>
                    </ListGroup.Item> */}
                    {/* <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </ListGroup.Item> */}
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/servicemain">Service</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/servicemain">Service</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/servicemain">Service</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/servicemain">Service</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/contact">Contact us</Link>
                    </ListGroup.Item>
                    {/* <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                        <Link className="nav-link" to="/client">Client</Link>
                    </ListGroup.Item> */}
                </ListGroup>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</Container>
</div>
</header>
</>
);
}
}

export default Header;