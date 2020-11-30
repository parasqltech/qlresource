import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
          
export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt350 {
        edges {
          node {
            acf {
              cardtext
              cardtitle
              cardimage {
                source_url
              }
            }
          }
        }
      }
    }
    `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt350 &&
        data.allWordpressWpCpt350.edges.map(
        prop => {
          return (
                    <Col xl={6} lg={6} md={12}>
                      <Card className="p-0 border-0 md-mb-4">
                        <Card.Img variant="top" src={prop.node.acf.cardimage.source_url} fluid />
                        <Card.Body className="">
                          <Card.Title className="font-22 font-bold">{prop.node.acf.cardtext}</Card.Title>
                          <Card.Text className="line-break-2 font-14 font-regular">{prop.node.acf.cardtitle}</Card.Text>
                          <Link to="" className="nav-link p-0 font-18 font-regular">Learn more<FaAngleRight className="pl-2" /> </Link>
                        </Card.Body>
                      </Card>
                      </Col>
            
                        )
          }
        )}
    </>                     
    )}
  />
)