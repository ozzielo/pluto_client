import React from 'react';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './play-card.scss';

export const PlayCard = ({ songData, winner }) => {
    return (

        <div className="playcd">
            <Container className="movieContainer">
                {/* <Row className="song-row">
                    <Col > */}
                <CardGroup className="card-group">
                    <Card className="movieCard">
                        <iframe src={"https://www.youtube.com/embed/IErvIekMD3U"} title="YouTube video" ></iframe>
                        {/* <Card.Img className="cardImage" variant="top" src={songData.VideoURL} /> */}
                        {/* <Card.Video className="cardImage" variant="top" src={songData.VideoURL} /> */}
                        <Card.Body>
                            <Card.Title>{songData.Title}</Card.Title>
                            <div className="d-grid gap-2">
                                <Button className="card-btn" size="lg" onClick={() => winner(songData)} >
                                    Choose
                            </Button>

                            </div>

                        </Card.Body>
                    </Card>
                </CardGroup>
                {/* </Col>
                </Row> */}
            </Container>

        </div>

        // <div>
        //     <div>{songData.Title}</div>
        //     <button onClick={() => winner(songData)}>Choose</button>
        // </div>

    )
};