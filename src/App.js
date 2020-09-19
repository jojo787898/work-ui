import React, { Component } from 'react';
import imageHero from './images/hero.png';
import { getWork } from "./api/report";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.loading = false;
    this.state.votes = 0;
    this.saveVote = this.saveVote.bind(this);
  }

  /**
   * Component Did Mount
   */

  componentDidMount(){
      this.getWork();
  }

  async getWork() {
      let schedule = await getWork();
      console.log(schedule)
  }

  /**
   * Save Vote
   */

  async saveVote() {
    this.setState({ votes: this.state.votes + 1 });
  }

  /**
   * Render
   */

  render() {
    return (
      <div className="container">
        <div className="hero">
          <img src={imageHero} />
        </div>

        <div className="tagline">
          a website built on serverless components via the serverless framework
        </div>

        <div className="buttonContainer">
          <div
            className={`button`}
            onClick={() => {
              this.saveVote();
            }}
          >
            <div className={`buttonInner`}>
              <div className={`buttonLeft`}>ß</div>
              <div className="buttonRight">{this.state.votes}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
