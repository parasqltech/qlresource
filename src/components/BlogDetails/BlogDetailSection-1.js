import React, { Component } from 'react';
import { Container,Row,Col,Card,ListGroup,Form,InputGroup,FormControl,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaPinterestP, FaUserAlt, FaCommentAlt,FaFacebookF,FaTwitter,FaSearch } from 'react-icons/fa'
import card1 from '../../images/blog-section-2-card-1.png'
import imgbox from '../../images/sidebar-media.png'
import BlogDetailScreen1 from '../BlogDetailScreen/BlogDetailScreen1'
import BlogDetailScreenListing from '../BlogDetailScreen/BlogDetailScreenListing'
import BlogDetailScreenImageList from '../BlogDetailScreen/BlogDetailScreenImageList'

class BlogDetailSection1 extends Component {

    render() {
        
        return (
            <>
            <section className="blog-details-section-1 blog-section-2">
                <Container>
                    <Row>
                        <Col xl={8} lg={7}>
                            <div className="blog-details-data">
                               <BlogDetailScreen1/> 
                            </div>
                        </Col>
                        <Col xl={4}  lg={5}>
                            <div className="side-sticky bg-gray p-4">
                                <Form>
                                    <div className="inner-sidebar mb-4">
                                        <Form.Group controlId="" className="mb-0">
                                            <Form.Label className="font-18 mb-3 font-bold">Search</Form.Label>
                                            <InputGroup className="mb-3">
                                                <FormControl className="main border-right-0"
                                                placeholder="Search..."
                                                aria-label=""
                                                aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append className="border-left-0">
                                                <InputGroup.Text id="basic-addon2"><Link to="/" className="title-color"><FaSearch/></Link></InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form.Group>
                                    </div>
                                    <div className="inner-sidebar mb-4">
                                            <BlogDetailScreenListing/>
                                    </div>
                                    <div className="inner-media-sidebar mb-4">
                                        <h3 className="font-18 mb-3 font-bold">Lorem ipsum</h3>
                                        <BlogDetailScreenImageList/>
                                    </div>
                                    
                                    <div className="inner-sidebar mb-0">
                                        <h3 className="font-18 mb-3 font-bold">Lorem ipsum</h3>
                                        <Form.Group className="mb-0 font-16 font-regular tagsList">
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags1"
                                                    label="Business"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags2"
                                                    label="Consult"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags3"
                                                    label="Cyber"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags4"
                                                    label="Data"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags5"
                                                    label="Design"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags6"
                                                    label="IT-Service"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags7"
                                                    label="Marketing"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags8"
                                                    label="Object"
                                                />
                                                <Form.Check
                                                    inline
                                                    type="checkbox"
                                                    id="tags9"
                                                    label="Solution"
                                                />
                                            </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default BlogDetailSection1;
