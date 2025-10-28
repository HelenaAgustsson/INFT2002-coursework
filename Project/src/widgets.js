import * as React from 'react';
import { ReactNode, ChangeEvent } from 'react';
import { Component } from 'react-simplified';

/**
 * boostrap header
 * 
                  
 */
 export class Heading extends Component {
  render() {
    return (
      <div
        className="container text-center jumbotron my-3"
        style={
          this.props.header
            ? {
                color: '#24272bff',
                fontFamily: 'Road Rage, cursive',
                fontSize: '',
               
              }
            : {}
        }
      >
        {this.props.children}
        <div className="jumbotron">
          <h1 className="display-1 text-underline">UniOnline</h1>
          <h2 className="display-5">The portal for online study</h2>
        </div>
      </div>
    );
  }
}




export class Container extends Component {
  render() {
    return <div className="container my-2">{this.props.children}</div>;
  }
}
/**
 * Renders an information card using Bootstrap classes.
 *
 * Properties: title
 */
export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <div className="card-text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

/**
 * Renders a row using Bootstrap classes.
 */
 export class Row extends Component {
    render() {
      return <div className="row">{this.props.children}</div>;
    }
  }
  
  /**
   * Renders a column with specified width using Bootstrap classes.
   *
   * Properties: width, right
   */
  export class Column extends Component {
    render() {
      return (
        <div className={
          'col' +
          (this.props.width ? '-' + this.props.width : '') +
          (this.props.smwidth ? ' col-sm-' + this.props.smwidth : '') +
          (this.props.mdwidth ? ' col-md-' + this.props.mdwidth : '') +
          (this.props.offset ? ' offset-' + this.props.offset : '')
        }
>
          {this.props.children}
        </div>
      );
    }
  }

  export class Divider extends Component {
    render() {
      return (
        <div className="">
          <hr></hr>
        </div>
      );
    }
  }

  class ButtonSuccess extends Component {
    render() {
      return (
        <button
          type="button"
          className="btn btn-success"
          style={
            this.props.small
              ? {
                  padding: '5px 5px',
                  fontSize: '16px',
                  lineHeight: '0.7',
                  display: 'inline',
                }
              : {}
          }
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      );
    }
  }
  
  /**
   * Renders a danger button using Bootstrap styles.
   *
   * Properties: small, onClick
   */
  class ButtonDanger extends Component {
    render() {
      return (
        <button
          type="button"
          className="btn btn-danger"
          style={
            this.props.small
              ? {
                  padding: '5px 5px',
                  fontSize: '16px',
                  lineHeight: '0.7',
                }
              : {}
          }
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      );
    }
  }
  
  /**
   * Renders a light button using Bootstrap styles.
   *
   * Properties: small, onClick
   *
   */
  
  class ButtonLight extends Component {
    render() {
      return (
        <button
          type="button"
          className="btn btn-light"
          style={
            this.props.small
              ? {
                  padding: '5px 5px',
                  fontSize: '16px',
                  lineHeight: '0.7',
                }
              : {}
          }
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      );
    }
  }
  /**
   * Renders a button using Bootstrap styles.
   *
   * Properties: onClick
   *
   */
  export class Button {
    static Success = ButtonSuccess;
    static Danger = ButtonDanger;
    static Light = ButtonLight;
  }
  
  