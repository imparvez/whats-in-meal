import React, { Component } from 'react';
import styled from 'styled-components';

export default class Title extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
          <Header>{this.props.title}</Header>
		)
	}
}

const Header = styled.h2`
    text-align: center;
    color: #000;
    margin: 0;
    font-family: monospace;
    font-size: 24px;
    line-height: 32px;
`;