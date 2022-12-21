import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './play-view.scss';

import { PlayCard } from "../play-card/play-card";


export class PlayView extends React.Component {

    constructor() {
        super();
        this.state = {
            roundOf64: [],
            roundOf32: [],
            sweet16: [],
            elite8: [],
            final4: [],
            finals: [],
            champion: [],
            match: 1


        };
    }
    componentDidMount() {
        const { songsData, onBackClick } = this.props;
        const s128 = songsData;

        // this.setState({
        //     match: 1
        // });





    }

    winner(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.roundOf64.push(song);

        console.log(this.state.roundOf64)
    }

    winnerRound2(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.roundOf32.push(song);

        console.log(this.state.roundOf32)
    }

    winnerRound3(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.sweet16.push(song);

        console.log(this.state.sweet16)
    }

    winnerSweet16(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.elite8.push(song);

        console.log(this.state.elite8)
    }

    winnerElite8(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.final4.push(song);

        console.log(this.state.final4)
    }

    winnerFinal4(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.finals.push(song);

        console.log(this.state.finals)
    }

    winnerFinals(song) {

        this.setState({
            match: this.state.match + 1
        });

        this.state.champion.push(song);

        console.log(this.state.champion)
    }






    render() {
        const { songsData, onBackClick } = this.props;
        const { match, roundOf64, roundOf32, sweet16, elite8, final4, finals, champion } = this.state;

        if (match === 1) return (
            <div className="outer">
                <div className="try">
                    <button size="lg" aria-label="Close" className="test3" onClick={() => { onBackClick(); }}>
                        <span aria-hidden="true" className="x">&times;</span>
                    </button>
                </div>
                <div className="test4">Best Future Song Tournament</div>
                <div className="sub">
                    <div className="test5">Round of 128: <span className="match-color"> {match} </span> /64</div>

                </div>
                {/* <div className="test6">
                    <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                    <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />

                </div> */}
                <Row className="test" >

                    <Col classname="play-card" >
                        <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                    </Col>
                    <Col classname="play-card">
                        <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
                    </Col>

                </Row>
                {/* <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} /> */}
            </div>

        )

        if (match === 2) return (
            <div>
                <div className="try">
                    <button aria-label="Close" className="test" onClick={() => { onBackClick(); }}>
                        <span className="test">&times;</span>
                    </button>
                </div>
                <h1 className="test">Best Future Song Tournament</h1>
                <h2 className="test">Round of 128:  {match} /64</h2>
                <Row className="test" >

                    {/* <Col xs={3} sm={4} md={5} lg={6} > */}
                    <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                    {/* </Col> */}
                    {/* <Col xs={3} sm={4} md={5} lg={6}> */}
                    <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
                    {/* </Col> */}

                </Row>
            </div>

        )


        if (match === 3) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 4) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 5) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 6) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 7) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 8) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 9) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 10) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 11) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 12) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 13) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 14) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 15) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 16) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )


        if (match === 17) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 18) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 19) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 20) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 21) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 22) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 23) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 24) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 25) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 26) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 27) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 28) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )


        if (match === 29) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 30) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 31) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 32) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 33) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 34) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 35) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 36) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 37) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 38) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 39) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 40) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 41) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 42) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 43) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 44) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 45) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 46) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 47) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 48) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 49) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 50) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 51) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 52) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 53) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 54) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 55) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 56) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 57) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 58) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 59) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 60) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 61) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 62) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 63) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        if (match === 64) return (
            <div>
                <div>{match} /64</div>
                <PlayCard songData={songsData[match * 2 - 2]} winner={() => this.winner(songsData[match * 2 - 2])} />
                <PlayCard songData={songsData[match * 2 - 1]} winner={() => this.winner(songsData[match * 2 - 1])} />
            </div>

        )

        // ROUND 2 STARTS HERE

        if (match === 65) return (

            <div>
                <div>NEXT ROUND {match - 64} /32</div>

                <PlayCard songData={roundOf64[0]} winner={() => this.winnerRound2(roundOf64[0])} />
                <PlayCard songData={roundOf64[1]} winner={() => this.winnerRound2(roundOf64[1])} />
            </div>

        )

        if (match === 66) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[2]} winner={() => this.winnerRound2(roundOf64[2])} />
                <PlayCard songData={roundOf64[3]} winner={() => this.winnerRound2(roundOf64[3])} />
            </div>

        )

        if (match === 67) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[4]} winner={() => this.winnerRound2(roundOf64[4])} />
                <PlayCard songData={roundOf64[5]} winner={() => this.winnerRound2(roundOf64[5])} />
            </div>

        )

        if (match === 68) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[6]} winner={() => this.winnerRound2(roundOf64[6])} />
                <PlayCard songData={roundOf64[7]} winner={() => this.winnerRound2(roundOf64[7])} />
            </div>

        )

        if (match === 69) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[8]} winner={() => this.winnerRound2(roundOf64[8])} />
                <PlayCard songData={roundOf64[9]} winner={() => this.winnerRound2(roundOf64[9])} />
            </div>

        )

        if (match === 70) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[10]} winner={() => this.winnerRound2(roundOf64[10])} />
                <PlayCard songData={roundOf64[11]} winner={() => this.winnerRound2(roundOf64[11])} />
            </div>

        )

        if (match === 71) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[12]} winner={() => this.winnerRound2(roundOf64[12])} />
                <PlayCard songData={roundOf64[13]} winner={() => this.winnerRound2(roundOf64[13])} />
            </div>

        )

        if (match === 72) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[14]} winner={() => this.winnerRound2(roundOf64[14])} />
                <PlayCard songData={roundOf64[15]} winner={() => this.winnerRound2(roundOf64[15])} />
            </div>

        )

        if (match === 73) return (

            <div>
                <div className="try">
                    <button aria-label="Close" className="test" onClick={() => { onBackClick(); }}>
                        <span className="test">&times;</span>
                    </button>
                </div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[16]} winner={() => this.winnerRound2(roundOf64[16])} />
                <PlayCard songData={roundOf64[17]} winner={() => this.winnerRound2(roundOf64[17])} />
            </div>

        )

        if (match === 74) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[18]} winner={() => this.winnerRound2(roundOf64[18])} />
                <PlayCard songData={roundOf64[19]} winner={() => this.winnerRound2(roundOf64[19])} />
            </div>

        )

        if (match === 75) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[20]} winner={() => this.winnerRound2(roundOf64[20])} />
                <PlayCard songData={roundOf64[21]} winner={() => this.winnerRound2(roundOf64[21])} />
            </div>

        )

        if (match === 76) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[22]} winner={() => this.winnerRound2(roundOf64[22])} />
                <PlayCard songData={roundOf64[23]} winner={() => this.winnerRound2(roundOf64[23])} />
            </div>

        )

        if (match === 77) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[24]} winner={() => this.winnerRound2(roundOf64[24])} />
                <PlayCard songData={roundOf64[25]} winner={() => this.winnerRound2(roundOf64[25])} />
            </div>

        )

        if (match === 78) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[26]} winner={() => this.winnerRound2(roundOf64[26])} />
                <PlayCard songData={roundOf64[27]} winner={() => this.winnerRound2(roundOf64[27])} />
            </div>

        )

        if (match === 79) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[28]} winner={() => this.winnerRound2(roundOf64[28])} />
                <PlayCard songData={roundOf64[29]} winner={() => this.winnerRound2(roundOf64[29])} />
            </div>

        )



        if (match === 80) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[30]} winner={() => this.winnerRound2(roundOf64[30])} />
                <PlayCard songData={roundOf64[31]} winner={() => this.winnerRound2(roundOf64[31])} />
            </div>

        )

        if (match === 81) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[32]} winner={() => this.winnerRound2(roundOf64[32])} />
                <PlayCard songData={roundOf64[33]} winner={() => this.winnerRound2(roundOf64[33])} />
            </div>

        )

        if (match === 82) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[34]} winner={() => this.winnerRound2(roundOf64[34])} />
                <PlayCard songData={roundOf64[35]} winner={() => this.winnerRound2(roundOf64[35])} />
            </div>

        )

        if (match === 83) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[36]} winner={() => this.winnerRound2(roundOf64[36])} />
                <PlayCard songData={roundOf64[37]} winner={() => this.winnerRound2(roundOf64[37])} />
            </div>

        )

        if (match === 84) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[38]} winner={() => this.winnerRound2(roundOf64[38])} />
                <PlayCard songData={roundOf64[39]} winner={() => this.winnerRound2(roundOf64[39])} />
            </div>

        )

        if (match === 85) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[40]} winner={() => this.winnerRound2(roundOf64[40])} />
                <PlayCard songData={roundOf64[41]} winner={() => this.winnerRound2(roundOf64[41])} />
            </div>

        )

        if (match === 86) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[42]} winner={() => this.winnerRound2(roundOf64[42])} />
                <PlayCard songData={roundOf64[43]} winner={() => this.winnerRound2(roundOf64[43])} />
            </div>

        )

        if (match === 87) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[44]} winner={() => this.winnerRound2(roundOf64[44])} />
                <PlayCard songData={roundOf64[45]} winner={() => this.winnerRound2(roundOf64[45])} />
            </div>

        )

        if (match === 88) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[46]} winner={() => this.winnerRound2(roundOf64[46])} />
                <PlayCard songData={roundOf64[47]} winner={() => this.winnerRound2(roundOf64[47])} />
            </div>

        )

        if (match === 89) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[48]} winner={() => this.winnerRound2(roundOf64[48])} />
                <PlayCard songData={roundOf64[49]} winner={() => this.winnerRound2(roundOf64[49])} />
            </div>

        )

        if (match === 90) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[50]} winner={() => this.winnerRound2(roundOf64[50])} />
                <PlayCard songData={roundOf64[51]} winner={() => this.winnerRound2(roundOf64[51])} />
            </div>

        )

        if (match === 91) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[52]} winner={() => this.winnerRound2(roundOf64[52])} />
                <PlayCard songData={roundOf64[53]} winner={() => this.winnerRound2(roundOf64[53])} />
            </div>

        )

        if (match === 92) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[54]} winner={() => this.winnerRound2(roundOf64[54])} />
                <PlayCard songData={roundOf64[55]} winner={() => this.winnerRound2(roundOf64[55])} />
            </div>

        )

        if (match === 93) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[56]} winner={() => this.winnerRound2(roundOf64[56])} />
                <PlayCard songData={roundOf64[57]} winner={() => this.winnerRound2(roundOf64[57])} />
            </div>

        )

        if (match === 94) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[58]} winner={() => this.winnerRound2(roundOf64[58])} />
                <PlayCard songData={roundOf64[59]} winner={() => this.winnerRound2(roundOf64[59])} />
            </div>

        )

        if (match === 95) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[60]} winner={() => this.winnerRound2(roundOf64[60])} />
                <PlayCard songData={roundOf64[61]} winner={() => this.winnerRound2(roundOf64[61])} />
            </div>

        )

        if (match === 96) return (

            <div>
                <div>{match - 64} /32</div>

                <PlayCard songData={roundOf64[62]} winner={() => this.winnerRound2(roundOf64[62])} />
                <PlayCard songData={roundOf64[63]} winner={() => this.winnerRound2(roundOf64[63])} />
            </div>

        )


        // ROUND 3 STARTS HERE

        if (match === 97) return (

            <div>
                <div>ROUND 3 {match - 96} /16</div>

                <PlayCard songData={roundOf32[0]} winner={() => this.winnerRound3(roundOf32[0])} />
                <PlayCard songData={roundOf32[1]} winner={() => this.winnerRound3(roundOf32[1])} />
            </div>

        )

        if (match === 98) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[2]} winner={() => this.winnerRound3(roundOf32[2])} />
                <PlayCard songData={roundOf32[3]} winner={() => this.winnerRound3(roundOf32[3])} />
            </div>

        )

        if (match === 99) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[4]} winner={() => this.winnerRound3(roundOf32[4])} />
                <PlayCard songData={roundOf32[5]} winner={() => this.winnerRound3(roundOf32[5])} />
            </div>

        )

        if (match === 100) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[6]} winner={() => this.winnerRound3(roundOf32[6])} />
                <PlayCard songData={roundOf32[7]} winner={() => this.winnerRound3(roundOf32[7])} />
            </div>

        )

        if (match === 101) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[8]} winner={() => this.winnerRound3(roundOf32[8])} />
                <PlayCard songData={roundOf32[9]} winner={() => this.winnerRound3(roundOf32[9])} />
            </div>

        )

        if (match === 102) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[10]} winner={() => this.winnerRound3(roundOf32[10])} />
                <PlayCard songData={roundOf32[11]} winner={() => this.winnerRound3(roundOf32[11])} />
            </div>

        )

        if (match === 103) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[12]} winner={() => this.winnerRound3(roundOf32[12])} />
                <PlayCard songData={roundOf32[13]} winner={() => this.winnerRound3(roundOf32[13])} />
            </div>

        )

        if (match === 104) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[14]} winner={() => this.winnerRound3(roundOf32[14])} />
                <PlayCard songData={roundOf32[15]} winner={() => this.winnerRound3(roundOf32[15])} />
            </div>

        )

        if (match === 105) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[16]} winner={() => this.winnerRound3(roundOf32[16])} />
                <PlayCard songData={roundOf32[17]} winner={() => this.winnerRound3(roundOf32[17])} />
            </div>

        )

        if (match === 106) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[18]} winner={() => this.winnerRound3(roundOf32[18])} />
                <PlayCard songData={roundOf32[19]} winner={() => this.winnerRound3(roundOf32[19])} />
            </div>

        )

        if (match === 107) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[20]} winner={() => this.winnerRound3(roundOf32[20])} />
                <PlayCard songData={roundOf32[21]} winner={() => this.winnerRound3(roundOf32[21])} />
            </div>

        )

        if (match === 108) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[22]} winner={() => this.winnerRound3(roundOf32[22])} />
                <PlayCard songData={roundOf32[23]} winner={() => this.winnerRound3(roundOf32[23])} />
            </div>

        )

        if (match === 109) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[24]} winner={() => this.winnerRound3(roundOf32[24])} />
                <PlayCard songData={roundOf32[25]} winner={() => this.winnerRound3(roundOf32[25])} />
            </div>

        )

        if (match === 110) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[26]} winner={() => this.winnerRound3(roundOf32[26])} />
                <PlayCard songData={roundOf32[27]} winner={() => this.winnerRound3(roundOf32[27])} />
            </div>

        )

        if (match === 111) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[28]} winner={() => this.winnerRound3(roundOf32[28])} />
                <PlayCard songData={roundOf32[29]} winner={() => this.winnerRound3(roundOf32[29])} />
            </div>

        )

        if (match === 112) return (

            <div>
                <div>{match - 96} /16</div>

                <PlayCard songData={roundOf32[30]} winner={() => this.winnerRound3(roundOf32[30])} />
                <PlayCard songData={roundOf32[31]} winner={() => this.winnerRound3(roundOf32[31])} />
            </div>

        )

        // SWEET 16 STARTS HERE

        if (match === 113) return (

            <div>
                <div>SWEET 16:{match - 112} /8</div>

                <PlayCard songData={sweet16[0]} winner={() => this.winnerSweet16(sweet16[0])} />
                <PlayCard songData={sweet16[1]} winner={() => this.winnerSweet16(sweet16[1])} />
            </div>

        )

        if (match === 114) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[2]} winner={() => this.winnerSweet16(sweet16[2])} />
                <PlayCard songData={sweet16[3]} winner={() => this.winnerSweet16(sweet16[3])} />
            </div>

        )

        if (match === 115) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[4]} winner={() => this.winnerSweet16(sweet16[4])} />
                <PlayCard songData={sweet16[5]} winner={() => this.winnerSweet16(sweet16[5])} />
            </div>

        )

        if (match === 116) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[6]} winner={() => this.winnerSweet16(sweet16[6])} />
                <PlayCard songData={sweet16[7]} winner={() => this.winnerSweet16(sweet16[7])} />
            </div>

        )

        if (match === 117) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[8]} winner={() => this.winnerSweet16(sweet16[8])} />
                <PlayCard songData={sweet16[9]} winner={() => this.winnerSweet16(sweet16[9])} />
            </div>

        )

        if (match === 118) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[10]} winner={() => this.winnerSweet16(sweet16[10])} />
                <PlayCard songData={sweet16[11]} winner={() => this.winnerSweet16(sweet16[11])} />
            </div>

        )

        if (match === 119) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[12]} winner={() => this.winnerSweet16(sweet16[12])} />
                <PlayCard songData={sweet16[13]} winner={() => this.winnerSweet16(sweet16[13])} />
            </div>

        )

        if (match === 120) return (

            <div>
                <div>{match - 112} /8</div>

                <PlayCard songData={sweet16[14]} winner={() => this.winnerSweet16(sweet16[14])} />
                <PlayCard songData={sweet16[15]} winner={() => this.winnerSweet16(sweet16[15])} />
            </div>

        )

        // ELITE 8 STARTS HERE

        if (match === 121) return (

            <div>
                <div>ELITE 8:  {match - 120} /4</div>

                <PlayCard songData={elite8[0]} winner={() => this.winnerElite8(elite8[0])} />
                <PlayCard songData={elite8[1]} winner={() => this.winnerElite8(elite8[1])} />
            </div>

        )

        if (match === 122) return (

            <div>
                <div>{match - 120} /4</div>

                <PlayCard songData={elite8[2]} winner={() => this.winnerElite8(elite8[2])} />
                <PlayCard songData={elite8[3]} winner={() => this.winnerElite8(elite8[3])} />
            </div>

        )

        if (match === 123) return (

            <div>
                <div>{match - 120} /4</div>

                <PlayCard songData={elite8[4]} winner={() => this.winnerElite8(elite8[4])} />
                <PlayCard songData={elite8[5]} winner={() => this.winnerElite8(elite8[5])} />
            </div>

        )

        if (match === 124) return (

            <div>
                <div>{match - 120} /4</div>

                <PlayCard songData={elite8[6]} winner={() => this.winnerElite8(elite8[6])} />
                <PlayCard songData={elite8[7]} winner={() => this.winnerElite8(elite8[7])} />
            </div>

        )

        // FINAL 4 STARTS HERE

        if (match === 125) return (

            <div>
                <div>{match - 124} /2</div>

                <PlayCard songData={final4[0]} winner={() => this.winnerFinal4(final4[0])} />
                <PlayCard songData={final4[1]} winner={() => this.winnerFinal4(final4[1])} />
            </div>

        )

        if (match === 126) return (

            <div>
                <div>{match - 124} /2</div>

                <PlayCard songData={final4[2]} winner={() => this.winnerFinal4(final4[2])} />
                <PlayCard songData={final4[3]} winner={() => this.winnerFinal4(final4[3])} />
            </div>

        )


        // FINALS STARTS HERE

        if (match === 127) return (

            <div>
                <div>CHAMPIONSHIP:  {match - 126} /1</div>

                <PlayCard songData={finals[0]} winner={() => this.winnerFinals(finals[0])} />
                <PlayCard songData={finals[1]} winner={() => this.winnerFinals(finals[1])} />
            </div>

        )

        if (match === 128) return (

            <div>
                <div>CHAMPION:  {champion[0].Title}</div>

            </div>

        )












        return (
            <div>PLUTOOOOOOOOOO!!!!!!!!!!</div>

        );


    }










    // return <div>
    //     {songsData.map((song) => (
    //         <div>{song.Loses}</div>
    //     ))}




    // </div>
    // console.log('wdqwfw' + songdata);
}