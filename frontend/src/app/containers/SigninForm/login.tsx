import React from 'react';
import {Row, Col, Container, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components/macro';

export class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => {
            return ({
                isToggleOn: true});
        });
    }
    render () {
        return (
            <form>
                <label htmlFor= "username">Username</label>
                <input type="text" name = "username" placeholder= "Username"/>
                <br/>
                <label htmlFor= "password">Password</label>
                <input type="password" name = "password" placeholder= "Password"/>
                <br/>
                <footer> 
                    <button onClick={this.handleClick}> Login</button>
                    <br/>
                    <button onClick={this.handleClick}> Register </button>
                    <br/>
                </footer>
            </form>
        )
    }
}
