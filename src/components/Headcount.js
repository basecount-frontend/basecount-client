import React, { Component } from "react";
// import { orange } from "../utilities/colors";
import { Section, ButtonPrimary, ButtonSecondary } from "../utilities";
import { background, blue, blueDark, orange, silver, white } from "../utilities/colors";


export default class Headcount extends Component {
  render() {
    const sites = Object.values(this.props.sites);
    return <HeadcountSection>
        <div className="section__wrapper">
          <select className="headcount__options">
            {sites.map(site => (
              <option value={site.programName} key={site.fid}>
                {" "}
                {site.programName}
              </option>
            ))}
          </select>
          <div className="headcount__current">
            <h3 className="headcount__current__heading headcount__heading">
              Current Headcount
            </h3>
            <div className="headcount__meter">[headcount meter]</div>
            <p className="headcount__count">
              <span className="headcount__count--current">75</span>/<span className="headcount__count--total">
                100
              </span> spaces
            </p>
            <p className="headcount__date">July 30, 2018 3:30PM</p>
            <p className="headcount__update__details">
              Updated by: <span>[avatar icon]</span>
              <span>John D.</span>
            </p>
          </div>
          <fieldset className="headcount__general">
            <legend className="headcount__general__legend">
              General headcount
            </legend>
            <div className="headcount__general__controls">
              <div className="headcount__general__control headcount__change">
                <button className="headcount__change__button headcount__increment">
                  +
                </button>
                <button className="headcount__change__button headcount__decrement">
                  -
                </button>
                <label className="visually-hidden">Current Headcount</label>
                <input type="text" id="headcount__change--current" className="headcount__change__input" />
              </div>
              <div class="headcount__general__control headcount__divider">
                /
              </div>
              <div className="headcount__general__control">
                <label className="visually-hidden">Total Headcount</label>
                <input type="text" className="headcount__change__input" id="headcount__change--total" value="100" />
              </div>
            </div>
            <ButtonPrimary disabled className="headcount__change__submit">
              Update headcount
            </ButtonPrimary>
          </fieldset>
          <div className="headcount__history">
            <h3 className="headcount__history__heading">Recent History</h3>
            <div className="headcount__history__record">
              <div className="headcount__history__meter">
                [headcount meter]
              </div>
              <p className="headcount__history__record__date">
                <span className="record__date">July 30, 2018</span>
                <span className="record__time">10:00AM</span>
              </p>
            </div>
            <div className="headcount__history__record">
              <div className="headcount__history__meter">
                [headcount meter]
              </div>
              <p className="headcount__history__record__date">
                <span className="record__date">July 30, 2018</span>
                <span className="record__time">10:00AM</span>
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
    text-transform: uppercase;
  }
  .headcount__change {
    position: relative;
  }
  .headcount__change__button {
    background-color: transparent;
    border: none;
    color: ${blue};
    display: block;
    font-size: 2.4rem;
    left: calc(50% - 1em);
    position: absolute;
    text-align: center;
    width: 2em;
  }
  .headcount__change__input {
    border: none;
    border-radius: 5px;
    margin: 0 0.5em;
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
  .headcount__decrement {
    bottom: -35px;
  }
  .headcount__general {
    border: none;
  }
  .headcount__general__controls {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 40px 0;
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
    padding: .5em 0;
  }
  .headcount__history__record {
    align-items: center;
    background: ${white};
    border-bottom: 1px solid ${silver};
    color: ${background};
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
    padding: 1em;
    text-transform: uppercase;
  }
  .headcount__history__record:last-of-type {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
  .headcount__history__record__date {
    display: contents;
    justify-content: space-between;
  }
  .headcount__history__view-more {
    background: transparent;
    border: none;
    color: ${blue};
    text-transform: lowercase;
  }
  .headcount__increment {
    top: -35px;
  }
  .headcount__update__details {
    font-size: 1.4rem;
  }
`;
