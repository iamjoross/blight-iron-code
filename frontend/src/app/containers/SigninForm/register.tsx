import React from 'react';
import {Row, Col, Container, Tabs, Tab} from 'react-bootstrap';
import { TouchZoomRotateHandler } from 'mapbox-gl';

export class register extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState(state => {
            return ({ isToggleOn: true});
        });
    }
    render () {
        return (
            <form>
                <label htmlFor= "username">Username</label>
                <input type="text" name = "username" placeholder= "Username"/>
                <br/>
                <label htmlFor= "password">Phone No.</label>
                <input type="numeric" name = "phone no." placeholder= "Phone No."/>
                <br/>
                <label htmlFor= "password">Password</label>
                <input type="password" name = "password" placeholder= "Password"/>
                <br/>
                <label htmlFor= "password">Confirm Password</label>
                <input type="password" name = "password" placeholder= "Confirm Password"/>
                <footer> 
                    <button onClick={this.handleClick}> Register </button>
                </footer>
            </form>
        )
    }
}
