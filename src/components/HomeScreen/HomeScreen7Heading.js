import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
          
export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt359 {
        edges {
          node {
            acf {
              heading
            }
          }
        }
      }
    }
    `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt359 &&
        data.allWordpressWpCpt359.edges.map(
        prop => {
          return (
                    <div className="title">
                        <h2 className="text-center font-bold">{prop.node.acf.heading}</h2>
                    </div>
            
                        )
          }
        )}
    </>                     
    )}
  />
)