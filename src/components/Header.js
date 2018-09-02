import React, {Component, Fragment} from "react";
import {blue, blueDark, orange, silver} from "../utilities/colors";
import {Toggle, Modal, Icon, Button} from "../utilities";
import styled from "styled-components";
import Menu from "./Menu";

export default class Header extends Component {
    state = {
        dropDownOpen: false,
    }
    //on click change dropDownOpen? true : false
    renderDropdown = () => {
        this.setState({dropDownOpen: !this.state.dropDownOpen}); //
        console.log(this.state.dropDownOpen);
    }

    render() {
        return (
            <MainHeader>
                <Icon name="logo" style={{height: "50px", width: "50px"}}/>
                <DropButton onClick={this.renderDropdown}>DROP</DropButton>
                <DropDown open={this.state.dropDownOpen}>
                <Menu close={this.renderDropdown}/>
                </DropDown>
            </MainHeader>
        );
    }
}

const DropButton = styled.button`
  z-index: 1;
  border-radius: 2px;
  transition: background 0.25s;
  :hover{
    background: ${silver};
    color: ${blueDark};
  }
`
const DropDown = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${blue};
  padding: 0;
  margin: 0;
  left: ${props => props.open ? '0vw' : '100vw'};
  transition: left 0.5s ease;
`

const MainHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  justify-content: space-between;
  padding: 20px;
  .header__logo {
    color: ${blue};
  }
  .header__nav {
    color: ${blueDark};
  }
  & > svg {
    width: 50px;
    height: 50px;
  }
`;
