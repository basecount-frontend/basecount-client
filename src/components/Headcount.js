import React, { Component, Fragment } from "react";
import { orange } from "../utilities/colors";
import { Section } from "../utilities";

export default class Headcount extends Component {
  render() {
    return (
      <HeadcountSection>
        <div className="section__wrapper">
          <select className="headcount__options">
            {this.props.org.sites.map(site => (
              <option value={site.programName} key={site.fid}>
                {" "}
                {site.programName}
              </option>
            ))}
          </select>
        </div>
      </HeadcountSection>
    );
  }
}

const HeadcountSection = Section.extend``;
