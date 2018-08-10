import React, { Component } from "react";
// import { orange } from "../utilities/colors";
import { Section, ButtonPrimary, ButtonSecondary } from "../utilities";
import { background, blue, blueDark, orange, silver, white } from "../utilities/colors";


export default class Headcount extends Component {
  constructor() {
    super();
    // state values hardcoded temporarily while working on structure
    this.state = {
      currentHeadcount: 75,
      submitIsDisabled: true,
      totalHeadcount: 100,
      updateDate: 'August 6, 2018',
      updateTime: '3:30PM'
    }
    this.headcountIncrement = this.headcountIncrement.bind(this);
    this.headcountDecrement = this.headcountDecrement.bind(this);
  }

  headcountDecrement(e) {
    e.preventDefault();
    let currentHeadcount = this.state.currentHeadcount;
    currentHeadcount--;
    this.setState({
      currentHeadcount,
      submitIsDisabled: false
    })
  }


  headcountIncrement(e) {
    e.preventDefault();
    let currentHeadcount = this.state.currentHeadcount;
    currentHeadcount++;
    this.setState({
      currentHeadcount,
      submitIsDisabled: false
    })
  }
  
  render() {
    const sites = Object.values(this.props.sites);
    const percentOccupied = (this.state.currentHeadcount / this.state.totalHeadcount) * 100;

    return <HeadcountSection>
        <div className="section__wrapper">
          {/* <select className="headcount__options">
            {sites.map(site => (
              <option value={site.programName} key={site.fid}>
                {" "}
                {site.programName}
              </option>
            ))}
          </select> */}
          <div className="headcount__current">
            <h3 className="headcount__current__heading headcount__heading">
              Current Headcount
            </h3>
            <div className="headcount__meter">
            <div className="headcount__meter__bar" style={{ width: `${percentOccupied}%` }}>
              <span className="headcount__meter__bar__status">{this.state.currentHeadcount}/{this.state.totalHeadcount}</span>
              </div>
            </div>
            <p className="headcount__count">
              <span className="headcount__count--current">{this.state.currentHeadcount}</span>/<span className="headcount__count--total">
                {this.state.totalHeadcount}
              </span> spaces
            </p>
            <p className="headcount__date">Last updated: {this.state.updateDate} {this.state.updateTime}</p>
          </div>
          <fieldset className="headcount__general">
            <div className="headcount__general__controls">
                <label className="visually-hidden">Current Headcount</label>
              <div className="headcount__general__control headcount__change">
                <button className="headcount__change__button headcount__increment" onClick={this.headcountIncrement}>
                +
                </button>
                <input type="text" id="headcount__change--current" className="headcount__change__input" value={this.state.currentHeadcount} />
                <button className="headcount__change__button headcount__decrement" onClick={this.headcountDecrement}>
                -
                </button>
              </div>
              <div className="headcount__general__control headcount__divider">
                /
              </div>
              <div className="headcount__general__control">
                <label className="visually-hidden">Total Headcount</label>
                <input type="text" className="headcount__change__input" id="headcount__change--total" defaultValue={this.state.totalHeadcount} />
              </div>
            </div>
            <ButtonPrimary disabled={this.state.submitIsDisabled ? true : false} className="headcount__change__submit">
              Add new headcount
            </ButtonPrimary>
          </fieldset>
          <div className="headcount__history">
            <h3 className="headcount__history__heading">Recent History</h3>
          <div className="headcount__history__record">
            <div className="headcount__history__meter">
              <div className="headcount__history__meter__bar" style={{ width: `${percentOccupied}%` }}>
                <span className="headcount__history__meter__bar__status">{this.state.currentHeadcount}/{this.state.totalHeadcount}</span>
              </div>
              </div>
            <p className="headcount__history__record__date">
              July 30, 2018
              </p>
            <p className="headcount__history__record__time">
              10:00AM
              </p>
          </div>
          <div className="headcount__history__record">
            <div className="headcount__history__meter">
              <div className="headcount__history__meter__bar" style={{ width: `${percentOccupied}%` }}>
                <span className="headcount__history__meter__bar__status">{this.state.currentHeadcount}/{this.state.totalHeadcount}</span>
              </div>
            </div>
            <p className="headcount__history__record__date">
              July 30, 2018
              </p>
            <p className="headcount__history__record__time">
              10:00AM
              </p>
          </div>
          <div className="headcount__history__record">
            <div className="headcount__history__meter full">
              <div className="headcount__history__meter__bar" style={{ width: `${percentOccupied}%` }}>
                <span className="headcount__history__meter__bar__status">{this.state.currentHeadcount}/{this.state.totalHeadcount}</span>
              </div>
            </div>
            <p className="headcount__history__record__date">
              July 30, 2018
              </p>
            <p className="headcount__history__record__time">
              10:00AM
              </p>
          </div>
          </div>
          <button className="headcount__history__view-more">View more</button>
        </div>
      </HeadcountSection>;
  }
}

const HeadcountSection = Section.extend`
  .headcount__date {
    color: ${orange};
    font-size: 1.6rem;
  }
  .headcount__change {
    display: flex;
  }
  .headcount__change__button {
    background-color: transparent;
    border: 2px solid white;
    color: ${white};
    display: block;
    font-size: 2.4rem;
    text-align: center;
    width: 2em;
  }
  .headcount__change__button.headcount__decrement {
    border-radius: 0 5px 5px 0;
  }
  .headcount__change__button.headcount__increment {
    border-radius: 5px 0 0 5px;
  }
  .headcount__change__input {
    border: none;
    margin: 0 3px;
    padding: 1em 0.5em;
    text-align: center;
    width: 5em;
  }
  .headcount__change__submit {
    margin: 0 auto;
  }
  .headcount__current__heading {
    font-size: 2.4rem;
  }
  .headcount__divider {
    margin: 0 1rem;
  }
  .headcount__general {
    border: none;
  }
  .headcount__general__controls {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 0 2rem;
  }
  .headcount__general__legend {
    font-size: 1.8rem;
    text-transform: lowercase;
  }
  .headcount__history {
    background: ${blue};
    border-radius: 8px;
    margin-bottom: 1em;
  }
  .headcount__history__heading {
    font-size: 2.4rem;
    margin-bottom: 0;
    padding: 0.5em 0;
  }
  .headcount__history__record {
    align-items: center;
    background: ${white};
    border-bottom: 1px solid ${silver};
    color: ${background};
    display: grid;
    font-size: 1.4rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    padding: 0.4em 1em;
    text-transform: uppercase;
  }
  .headcount__history__record:last-of-type {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
  .headcount__history__view-more {
    background: transparent;
    border: none;
    color: ${blue};
    text-transform: lowercase;
  }
  .headcount__history__meter,
  .headcount__meter {
    background-color: white;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    display: flex;
    position: relative;
  }
  .headcount__history__meter.full,
  .headcount__meter.full {
    border-color: red;
  }
  .headcount__history__meter.full .headcount__history__meter__bar,
  .headcount__meter.full .headcount__meter__bar {
    background-color: red;
  }
  .headcount__history__meter,
  .headcount__meter {
    border-color: ${blue};
  }
  .headcount__history__record__time {
    justify-self: end;
  }
  .headcount__history__meter__bar,
  .headcount__meter__bar {
    align-items: center;
    color: ${background};
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
  }
  .headcount__history__meter__bar {
    background-color: ${blue};
    font-size: 1.6rem;
    padding: 1em;
  }
  .headcount__meter__bar {
    background: ${blue};
    padding: 1.5em;
  }
  .headcount__history__meter__bar.full,
  .headcount__meter__bar.full {
    background-color: red;
  }
  .headcount__history__meter__bar__status,
  .headcount__meter__bar__status {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;
