import React, { Component } from "react"
import "./App.css"
import audioImg1 from './images/COSM376.PNG'
import audioImg2 from './images/Kosmos1266.PNG'
import audioImg3 from './images/COSM492.PNG'
import audioImg4 from './images/COSM110.PNG'
import audio1 from './audio/COSM376.mp3'
import audio2 from './audio/Kosmos1266.mp3'
import audio3 from './audio/COSM492.mp3'
import audio4 from './audio/COSM110.mp3'

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputAnswer: null,
            correctAnswer: 'flag{send bitcoin to 38iw1b8gcihwe}',
        }

        this.checkAnswer = this.checkAnswer.bind(this);
    }

    inputAnswer = event => {
        this.setState({ inputAnswer: event.target.value });
    };

    correctAnswer = event => {
        this.setState({ correctAnswer: event.target.value });
    };

    checkAnswer(event) {
        event.preventDefault();
        const { inputAnswer, correctAnswer } = this.state;
        const matches = inputAnswer.toLocaleLowerCase() == correctAnswer;
        matches ? alert("Message is CORRECT! Congratulations! FLAG{252:cheers}") : alert("Message is INCORRECT!");
    }   

    render() {
        return (
            <section className="index">
                <div className="title">
                    <h1>Blockchain Challenge</h1>
                </div>
                <div className="background">
                    <h2>Your name is Elizabeth Smith, a Cryptography Analyst who works on Block Chain Operations
                        at Moonshot. On the day when Moonshot is hacked, you received 4 .mp3 format audios from 
                        company Email sent by the hacking group, Unwanted Guess. With your experiences on 
                        cryptography analysis, you immediately understood these 4 audios are not just ordiary 
                        audios, there could be some message, or even secret hidden behind these .mp3 files</h2>
                </div>
                <div className="instruction">
                    <h3>The message is hidden in one of the four audios, your challenge is to discover what method
                        it used to hide the message, and use any type of audio visualizer 
                        (E.g.: Sonic visualizer, link: https://www.sonicvisualiser.org/) to uncover the message behind
                        the audio. Good Luck!
                    </h3>
                </div>
                <form onSubmit={this.checkAnswer}>
                    <p>Enter the hidden message:</p>
                    <p>please use this form when entering the message: FLAG&#10100;the correct answer&#10101;</p>
                    <input type="text" name="inputAnswer" onChange={this.inputAnswer} />
                    <button type="submit">Check Message</button>
                </form>
                <div className="audio">
                    <div className="audio-div-1" id="a">
                        <img src={audioImg1} alt="Kosmos 376"></img>
                        <p>Audio 1</p>
                        <audio controls>
                            <source src={audio1} type="audio/mp3"></source>
                            Your browser does not support the audio element.
                        </audio>
                        <a href={audio1} download>Download Audio</a>
                    </div>
                    <div className="audio-div-2" id="a">
                    <img src={audioImg2} alt="Kosmos 1266"></img>
                        <p>Audio 2</p>
                        <audio controls>
                            <source src={audio2} type="audio/mp3"></source>
                            Your browser does not support the audio element.
                        </audio>
                        <a href={audio2} download>Download Audio</a>     
                    </div> 
                    <div className="audio-div-3" id="a">
                        <img src={audioImg3} alt="Kosmos 2751"></img>
                        <p>Audio 3</p>
                        <audio controls>
                            <source src={audio3} type="audio/mp3"></source>
                            Your browser does not support the audio element.
                        </audio>
                        <a href={audio3} download>Download Audio</a>
                    </div>
                    <div className="audio-div-4" id="a">
                    <img src={audioImg4} alt="Kosmos 110"></img>
                        <p>Audio 4</p>
                        <audio controls>
                            <source src={audio4} type="audio/mp3"></source>
                            Your browser does not support the audio element.
                        </audio>
                        <a href={audio4} download>Download Audio</a>
                    </div>
                </div>
            </section>
        )
    }
}