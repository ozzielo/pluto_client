import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './main-view.scss';
import './pluto-logo.png'

import { SongCard } from "../song-card/song-card";
import { SongCardMobile } from "../song-card-mobile/song-card-mobile";
import { PlayView } from "../play-view/play-view";
import { NavBarView } from "../navbar-view/navbar-view";

export class MainView extends React.Component {



    constructor() {
        super();
        this.state = {
            songs: [],
            selectedsong: null,
            play: false,
            shuffledSongs: [],
            windowWidth: null

        };

        // const [modileViewOpen, setMobieViewOpen] = useState(false);
        // const [showModileView, setShowModileView] = useState(false);

        // useEffect(()=>{
        //     if (window.innerWidth > 767) {
        //         setShowModileView(false);
        //     } else if (window.innerWidth < 767) {
        //         setShowModileView(true)
        //     }
        // }, []);

        // useEffect(()=> {
        //     const  handleResize = () => {
        //         if (window.innerWidth > 767) {
        //             setShowModileView(false);
        //             setMobieViewOpen(false);
        //         } else if (window.innerWidth < 767) {
        //             setShowModileView(true);
        //         }
        //     };

        //     window.addEventListener('resize', handleResize);

        //     return () => {
        //         window.removeEventListener('resize', handleResize);
        //     };
        // }, []);

    }

    useWindowSize() {
        const width = window.innerWidth;

        this.setState({
            windowWidth: width
        })
    }

    // viewWidth() {
    //     const [modileViewOpen, setMobieViewOpen] = useState(false);
    //     const [showModileView, setShowModileView] = useState(false)

    // }

    // viewShow(){
    //     useEffect(()=>{
    //         if (window.innerWidth > 767) {
    //             setShowModileView(false);
    //         } else if (window.innerWidth < 767) {
    //             setShowModileView(true)
    //         }
    //     }, [])
    // }

    // viewListener(){
    //     useEffect(()=> {
    //         const  handleResize = () => {
    //             if (window.innerWidth > 767) {
    //                 setShowModileView(false);
    //                 setMobieViewOpen(false);
    //             } else if (window.innerWidth < 767) {
    //                 setShowModileView(true);
    //             }
    //         };

    //         window.addEventListener('resize', handleResize);

    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }, []);
    // }

    componentDidMount() {

        axios.get('https://boiling-basin-26077.herokuapp.com/songs')
            .then(response => {
                this.setState({
                    songs: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            // this.shuffleArray();

            // console.log(s128, 'dwdwwd', this.state
            // , "++++++++++++++++++++++++++++", s128
            // )
        }, 100);

        this.useWindowSize();

        const handleResize = () => {
            this.setState({
                windowWidth: window.innerWidth
            })
        }

        window.addEventListener("resize", handleResize);

        // this.shuffleArray();


    }


    startGame() {
        this.setState({
            play: true
        })

        this.shuffleArray();
    }

    stopGame() {
        this.setState({
            play: false
        })
    }



    shuffleArray() {
        const s128 = [...this.state.songs];
        for (let i = s128.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = s128[i];
            s128[i] = s128[j];
            s128[j] = temp;
        }
        this.setState({
            shuffledSongs: s128
        });

        setTimeout(() => {

            console.log(s128, 'dwdwwd', this.state
                // , "++++++++++++++++++++++++++++", s128
            )
        }, 100);

        // console.log('-=-=-=-=-=-', s128, this.state.shuffledSongs)
    }


    render() {
        const { songs, shuffledSongs, play, windowWidth } = this.state;



        if (songs.length === 0) {
            return <div>The list is empty!</div>;
        }

        if (windowWidth < 1020) {
            return (
                <div className="ult-back">
                    {play
                        ? (
                            <div className="justify-content-lg-center">
                                {/* <NavbarView /> */}
                                <PlayView songsData={shuffledSongs}
                                    onBackClick={() => { this.stopGame(); }}
                                />

                            </div>
                        )
                        : (
                            <div className="ult-back" >
                                <div >

                                    <Navbar className="navbar-div2" expand="lg" fixed="top">
                                        <Container className="justify-content-center" fluid>
                                            <Navbar.Brand href="/">
                                                <img
                                                    src="./pluto-logo.ba9a0213.png"
                                                    // src="./pluto-logo.png"
                                                    height="100"
                                                    className="justify-content-center"
                                                //   alt="React Bootstrap logo"
                                                />
                                            </Navbar.Brand>
                                            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="me-auto">
    
                                                </Nav>
                                            </Navbar.Collapse> */}
                                        </Container>
                                    </Navbar>




                                </div >
                                {/* <NavBarView /> */}
                                {/* <div className="ult-back"> */}
                                <div className="main-body">


                                    <div className="left2">
                                        <h1 className="title-text2">Best Future Song Tournament</h1>
                                        <div >
                                            <div className="d-grid gap-2">
                                                <Button className="play-btn" size="lg" onClick={() => this.startGame()}>PLAY</Button>

                                            </div>
                                            <div className="d-grid gap-2">
                                                <Button className="share-btn" size="lg" onClick={() => this.startGame()}>SHARE</Button>

                                            </div>
                                        </div>
                                        <h5 className="title-text">Ranking</h5>
                                        <div>width: {windowWidth}</div>


                                        <div className="songs-div">
                                            {songs.map((song, index) => (

                                                <Row className="bot-bor">
                                                    <Col >
                                                        <SongCardMobile index={index + 1} key={song.id} songData={song} />
                                                    </Col>
                                                    {/* <hr className="solid"></hr> */}
                                                </Row>

                                            ))}
                                        </div>
                                    </div>
                                    {/* <div className="right">
                                        <div className="d-grid gap-2">
                                            <Button className="play-btn" size="lg" onClick={() => this.startGame()}>PLAY</Button>
    
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button className="share-btn" size="lg" onClick={() => this.startGame()}>SHARE</Button>
    
                                        </div>
                                    </div> */}
                                </div>
                                {/* </div> */}
                            </div>
                        )
                    }







                </div>
            );
        }




        return (
            <div>
                {play
                    ? (
                        <div className="justify-content-lg-center">
                            {/* <NavbarView /> */}
                            <PlayView songsData={shuffledSongs}
                                onBackClick={() => { this.stopGame(); }}
                            />

                        </div>
                    )
                    : (
                        <div >
                            <div >

                                <Navbar className="navbar-div2" expand="lg" fixed="top">
                                    <Container className="justify-content-center" fluid>
                                        <Navbar.Brand href="/">
                                            <img
                                                src="./pluto-logo.ba9a0213.png"
                                                // src="./pluto-logo.png"
                                                height="100"
                                                className="justify-content-center"
                                            //   alt="React Bootstrap logo"
                                            />
                                        </Navbar.Brand>
                                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="me-auto">

                                            </Nav>
                                        </Navbar.Collapse> */}
                                    </Container>
                                </Navbar>




                            </div >
                            {/* <NavBarView /> */}
                            <div className="ult-back">
                                <div className="main-body">


                                    <div className="left">
                                        <h1 className="title-text">Best Future Song Tournament</h1>
                                        <h5 className="title-text">Ranking</h5>
                                        <div>width: {windowWidth}</div>

                                        {/* <div className="right">
                                        <div className="d-grid gap-2">
                                            <Button className="play-btn" size="lg" onClick={() => this.startGame()}>PLAY</Button>

                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button className="share-btn" size="lg" onClick={() => this.startGame()}>SHARE</Button>

                                        </div>
                                    </div> */}
                                        <div className="songs-div">
                                            {songs.map((song, index) => (

                                                <Row className="bot-bor">
                                                    <Col >
                                                        <SongCard index={index + 1} key={song.id} songData={song} />
                                                    </Col>
                                                    {/* <hr className="solid"></hr> */}
                                                </Row>

                                            ))}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="d-grid gap-2">
                                            <Button className="play-btn" size="lg" onClick={() => this.startGame()}>PLAY</Button>

                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button className="share-btn" size="lg" onClick={() => this.startGame()}>SHARE</Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }







            </div>
        );


    }





    // const [songs, setSongs] = useState([]);



    // if (songs.length === 0) {
    //     return <div>The list is empty!</div>;
    // }

    // return (
    //     <div>
    //         {songs.map((song) => (
    //             <SongCard key={song.id} songData={song} />
    //         ))}
    //     </div>
    // );
};
