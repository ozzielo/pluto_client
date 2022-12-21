import React from 'react';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './song-card-mobile.scss';

export const SongCardMobile = ({ songData, index }) => {
    return (

        <div className="movieContainer">

            <Container className="card-container" >
                <Row>
                    <Col>

                        <div className="cardImage1">
                            <div className="index">{index}</div>
                            <div className="card-pic">
                                <img className="cardImage" variant="top" src={songData.ImageURL} />
                            </div>
                            <div className="card-info">

                                <div className="card-title">

                                    {songData.Title}

                                </div>
                                <div className="rectangle2"></div>
                                {/* <div className="stats">
                                    <div>Championship Rate</div>
                                    <div className="rectangle">
                                        <div className="rectangle3"></div>
                                    </div>
                                    <div>Win Rate</div>
                                    <div className="rectangle"></div>
                                </div> */}


                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>



        </div>
    )

};