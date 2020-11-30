import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
import team1 from '../../images/team-1.png'
import team2 from '../../images/team-2.png'
import team3 from '../../images/team-3.png'
import team4 from '../../images/team-4.png'
import TeamScreen2 from '../TeamScreen/TeamScreen2'
class Teamsection2 extends Component {

     
    render() {
        
        return (
            <>
                <section className="team-section-2">
                    <Container>
                        <Row>
                            <TeamScreen2/>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Teamsection2;
