import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  

function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", borderRadius: "25px",border:"2px solid #23A5DD",width:"50px",height:"50px",lineHeight:"50px",textAlign:"center" }}
        onClick={onClick}
      >
        </div>
    );
  }
  
  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", borderRadius: "25px",border:"2px solid #23A5DD",width:"50px",height:"50px",lineHeight:"50px",textAlign:"center" }}
        onClick={onClick} >
      </div>
    );
  }

  const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        nextArrow: <SampleNextArrow1 />,
        prevArrow: <SamplePrevArrow1 />
      };        
export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt368 {
        edges {
          node {
            acf {
              userimage {
                source_url
              }
              testimage {
                source_url
              }
              span
              paragraph
              username
            }
          }
        }
      }
    }
    `}
    render={data => (
    <Slider {...settings3} className="testimonial-slider">
      {data &&
        data.allWordpressWpCpt368 &&
        data.allWordpressWpCpt368.edges.map(
        prop => {
          return (
                    
                      <div className="slider-data">
                        <Row className="justify-content-center">
                            <Col xl={8} lg={8} md={10} sm={12}>
                              <div className="position-relative test-img mb-4">
                                <Image src={prop.node.acf.userimage.source_url} className="img-fluid test-img"/>
                                <Image src={prop.node.acf.testimage.source_url} className="img-fluid test-button"/>
                              </div>
                              <p className="font-24 font-regular mb-0">{prop.node.acf.paragraph}</p>
                              <div className="justify-content-center d-flex">
                                <div className="line"></div>
                              </div>
                              <p className="font-bold font-22 font-uppercase mb-2">{prop.node.acf.username}</p>
                              <span className="font-16 font-semibold">{prop.node.acf.span}</span>
                            </Col>
                        </Row>
                      </div>
            
                        )
          }
        )}
    </Slider>                     
    )}
  />
)