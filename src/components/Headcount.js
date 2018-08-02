import React, { Component } from "react";
// import { orange } from "../utilities/colors";
import { Section, ButtonPrimary, ButtonSecondary } from "../utilities";

export default class Headcount extends Component {
  render() {
    const sites = Object.values(this.props.sites);
    return (
      <HeadcountSection>
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
            <h2 className="headcount__current__heading">Current Headcount</h2>
            <div className="headcount__meter">[headcount meter]</div>
            <p className="headcount__count"><span className="headcount__count--current">75</span>/<span className="headcount__count--total">100</span> spaces</p>
            <p className="headcount__date">July 30, 2018 3:30PM</p>
            <p className="headcount__updater">Updated by: <span>John D.</span></p>
          </div>
          <div className="headcount__general">
            <h3 className="headcount__general__heading">General headcount</h3>
            <button className="headcount__increment">+</button>
            <button className="headcount__increment">-</button>
            <input type="text" id="headcount__general--current" />
            /
            <input type="text" id="headcount__general--total" />
          </div>
          <ButtonPrimary disabled>Update headcount</ButtonPrimary>
          <div className="headcount__history">
            <h2 className="headcount__history__heading">
              Recent History
            </h2>
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
          <button>View more</button>
        </div>
      </HeadcountSection>
    );
  }
}

const HeadcountSection = Section.extend``;
