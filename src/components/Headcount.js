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
          <ButtonPrimary>Primary</ButtonPrimary>
          <ButtonPrimary disabled>Disabled</ButtonPrimary>
          <ButtonSecondary>Secondary</ButtonSecondary>
        </div>
      </HeadcountSection>
    );
  }
}

const HeadcountSection = Section.extend``;
