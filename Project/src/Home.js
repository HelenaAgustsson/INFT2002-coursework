import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import studentService from './services/studentservice';
import { Card, Row, Column, Container, Heading, Hero } from './widgets';


export class Home extends Component {
    render() {
        return (
            <Container>
              
            </Container>
        )
    }
}

export class Header extends Component {
    render() {
        return (
            <div className="hero-container">
               <div
                className='hero-image'
               ></div>
               
                <div className='hero-text'>
                <div className="jumbotron">
                 <h1 className="display-1 text-underline">UniOnline</h1>
                    <h2 className="display-5">The portal for online study</h2>
                </div>
                </div>
            </div>
        )
    }
}

