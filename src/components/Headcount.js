import React, { Component } from "react";
import Moment from "react-moment";
// import { orange } from "../utilities/colors";
import { Section, ButtonPrimary, ButtonSecondary } from "../utilities";

import {
  background,
  blue,
  blueDark,
  red,
  blueLight,
  orange,
  silver,
  white
} from "../utilities/colors";
import HeadcountContainer from "./headcount/HeadcountContainer";
import SitesSelector from "./headcount/SitesSelector";

export default class Headcount extends Component {
  // state values hardcoded temporarily while working on structure
  state = {
    currentHeadcount: 75,
    totalHeadcount: 100
  };

  render() {
    const sites = Object.values(this.props.sites);
    const percentOccupied =
      (this.state.currentHeadcount / this.state.totalHeadcount) * 100;

    const updatedAt = new Date();
    return (
      <HeadcountSection>
        <div className="section__wrapper">
          <SitesSelector sites={sites} />
          <div className="headcount__current">
            <h3 className="headcount__current__heading headcount__heading">
              Current Headcount
            </h3>
            <div className="headcount__meter">
              <div
                className="headcount__meter__bar"
                style={{ width: `${percentOccupied}%` }}
              >
                <span className="headcount__meter__bar__status">
                  {this.state.currentHeadcount}/{this.state.totalHeadcount}
                </span>
              </div>
            </div>
            <p className="headcount__count">
              <span className="headcount__count--current">
                {this.state.totalHeadcount - this.state.currentHeadcount} beds
                left
              </span>
            </p>
            <p className="headcount__date">
              {/* TODO: Currently shows local time */}
              <Moment format="LLL">{updatedAt}</Moment>{" "}
            </p>
            <p className="headcount__update__details">
              Updated by: <span>[avatar icon]</span>
              <span>John D.</span>
            </p>
          </div>
          <fieldset className="headcount__general">
            <div className="headcount__general__controls">
              <label className="visually-hidden">Current Headcount</label>
              <div className="headcount__general__control headcount__change">
                <button
                  className="headcount__change__button headcount__increment"
                  onClick={() => {
                    this.setState({
                      currentHeadcount: this.state.currentHeadcount - 1
                    });
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  id="headcount__change--current"
                  className="headcount__change__input"
                  readOnly
                  value={this.state.currentHeadcount}
                />
                <button
                  className="headcount__change__button headcount__decrement"
                  onClick={() => {
                    this.setState({
                      currentHeadcount: this.state.currentHeadcount + 1
                    });
                  }}
                >
                  +
                </button>
                <label className="visually-hidden">Current Headcount</label>
              </div>
              <div className="headcount__general__control headcount__divider">
                /
              </div>
              <div className="headcount__general__control">
                <label className="visually-hidden">Total Headcount</label>

                <input
                  type="text"
                  className="headcount__change__input"
                  id="headcount__change--total"
                  defaultValue={this.state.totalHeadcount}
                />
              </div>
            </div>
            <ButtonPrimary
              disabled={this.state.submitIsDisabled ? true : false}
              className="headcount__change__submit"
            >
              Add new headcount
            </ButtonPrimary>
          </fieldset>
          <HeadcountContainer totalHeadcount={this.state.totalHeadcount} />
          <button className="headcount__history__view-more">View more</button>
        </div>
      </HeadcountSection>
    );
  }
}

const HeadcountSection = Section.extend`
  .headcount__date {
    color: ${orange};
    font-size: 1.6rem;
  }
  .headcount__change {
    display: flex;

    &__button {
      background-color: transparent;
      border: 2px solid white;
      color: ${white};
      display: block;
      font-size: 2.4rem;
      text-align: center;
      width: 2em;

      &.headcount__decrement {
        border-radius: 0 5px 5px 0;
      }
      &.headcount__increment {
        border-radius: 5px 0 0 5px;
      }
    }

    &__input {
      border: none;
      margin: 0 3px;
      padding: 1em 0.5em;
      text-align: center;
      width: 5em;
    }
    &__submit {
      margin: 0 auto;
    }
  }

  .headcount__current__heading {
    font-size: 2.4rem;
  }
  .headcount__divider {
    margin: 0 1rem;
  }
  .headcount__general {
    border: none;

    &__controls {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0 0 2rem;
    }
  }

  .headcount__general__legend {
    font-size: 1.8rem;
    text-transform: lowercase;
  }
  .headcount__history {
    background: ${blue};
    border-radius: 8px;
    margin-bottom: 1em;

    &y__heading {
      font-size: 2.4rem;
      margin-bottom: 0;
      padding: 0.5em 0;
    }
    &__record {
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

      &:last-of-type {
        border-bottom: none;
        border-radius: 0 0 8px 8px;
      }
    }

    &__view-more {
      background: transparent;
      border: none;
      color: ${blue};
      text-transform: lowercase;
    }
  }

  .headcount__meter {
    align-items: center;
    border: 2em solid white;
    border-radius: 50%;
    display: flex;
    height: 250px;
    justify-content: center;
    margin: 0 auto;
    width: 250px;

    &__occupancy__current {
      font-size: 2.8rem;
      font-weight: bold;
      padding-bottom: 0.8rem;
    }
    &__occupancy__percent-of-total {
      color: ${silver};
      font-size: 1.8rem;
      line-height: 2.3rem;
      padding: 0 1rem;
      text-transform: uppercase;
    }
  }

  .headcount__history__meter {
    background-color: white;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    display: flex;
    position: relative;
    border-color: ${blueLight};

    &.full,
    .headcount__meter.full {
      border-color: ${red};
    }
    &.full .headcount__history__meter__bar {
      background-color: ${red};
    }

    &__bar {
      align-items: center;
      color: ${background};
      display: flex;
      height: 100%;
      justify-content: center;
      overflow: hidden;
      background-color: ${blueLight};
      font-size: 1.6rem;
      padding: 1em;
      &.full {
        background-color: ${orange};
      }
      &__status {
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
    }
  }

  .headcount__history__record__time {
    justify-self: end;
  }
`;
