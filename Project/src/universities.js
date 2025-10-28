import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uniservice';
import studentService from './services/studentservice';
import programService from './services/programservice';
import { Card, Row, Column, Container, Divider } from './widgets';
import { NavLink} from 'react-router-dom';

export class UniList extends Component {
    universities = [];
  render() {
    return (
      <Container>
            <Card title="University List">
                <Row>
                   
                    <Column>Name</Column>
                </Row>
            {this.universities.map((university) => (
                <Row key={university.id}>
                    
                    <Column> <NavLink to={'/universities/'+university.id}>{university.name}</NavLink></Column>
                </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    uniService.getAll().then((universities)=>{this.universities=universities})
  }
}

export class Uni extends Component {
  universities=[];
  students=[];
  program={};
  uni={};
  render() {
    return (
      <Container>
        <Card>
        <Row>
        <Column width="3" smwidth="1" >
          <img src={this.uni.logo} className='img-fluid' />
        </Column>
        <Column  width="9" smwidth="11">
          <Row><h3 className='align-text-bottom'>{this.uni.name}</h3>
            <Column>Campus: {this.uni.campus}</Column>
          </Row> 
        </Column>
        </Row>
        <br></br>
        <Row><Column>
        Programs offered at this university:
        </Column></Row>
        
            <Row>
            <Column> <NavLink to={'/programs/'+this.program.id}>{this.program.name}</NavLink></Column>
            </Row>
          
        <Divider />
        <Row><Column>
        Students at this university:
        </Column></Row>
        {this.students.map((student) => (
            <Row key={student.id}>
            <Column> <NavLink to={'/students/'+student.id}>{student.name}</NavLink></Column>
            </Row>
          ))}
       
        </Card>
      </Container>
      
    )
  }
  mounted() {
      uniService.getAll().then((universities)=>{
        this.universities = universities;
        let w = window.location.hash;
        let id = w.match(/\d+/)[0] 
        this.uni = this.universities.find(uni=>uni.id==id)
        programService.getAll().then((programs)=>{
          this.program = programs.find((program)=>program.uni_id===this.uni.id); 
        })
        studentService.getAll().then((students)=>{
          this.students=students.filter((student)=>student.program_id===this.program.id)
          console.log(this.students)
        }) 
      })
       
  }
}