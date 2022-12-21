import React from 'react';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './song-card.scss';

export const SongCard = ({ songData, index }) => {
    return (

        <div className="movieContainer">
            {/* <Container >
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className="cardImage1">
                                <iframe src={"https://www.youtube.com/embed/IErvIekMD3U"} title="YouTube video" ></iframe>
                                <Card.Img className="cardImage" variant="top" src={songData.ImageURL} />
                                <Card.Video className="cardImage" variant="top" src={songData.VideoURL} />
                                <Card.Body>
                                    <Card.Title>{songData.Title}</Card.Title>

                                    <Button variant="secondary" variant="link">
                                        More
                            </Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container> */}
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
                                <div className="stats">
                                    <div>Championship Rate</div>
                                    <div className="rectangle">
                                        <div className="rectangle3"></div>
                                    </div>
                                    <div>Win Rate</div>
                                    <div className="rectangle"></div>
                                </div>


                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>



        </div>
    )
    // <div>{songData.Title}</div>;
};