import ReactDOM from 'react-dom';
import * as React from 'react';
import { NavLink} from 'react-router-dom';
import { Component } from 'react-simplified';

import { Card, Row, Column, Container } from './widgets';
import uniService from './services/uniservice';
import studentService from './services/studentservice';
import programService from './services/programservice';
 




export class StudentList extends Component {
  students = [];
  universities=[];
  render() {
    return (
      <Container>
        <Card title="Student List">
            <Row>
              <Column>Name</Column>
            </Row>
            {this.students.map((student) => (
            <Row key={student.id}>
            <Column> <NavLink to={'/students/'+student.id}>{student.name}</NavLink></Column>
            </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    studentService.getAll().then((students) => (this.students = students));
  }
}

export class Student extends Component {
  student = {};
  uni={};
  program={};
  
  render() {
    return (
      <Container>
        <Card>
        <Row>
          <Column width="4" smwidth="2">
          <img src={this.student.img} className='img-fluid rounded-circle' alt="student profile" />
          </Column>
          <Column width="8" smwidth="10">
            <h3>{this.student.name}</h3> 
            <div>Studying {this.program.name} at {this.uni.name} </div> 
        </Column>
        </Row>
      </Card></Container>
      
    )
  }
  mounted() {
    studentService.getAll().then((students) => {
      let w = window.location.hash;
      let id = w.match(/\d+/)[0] 
      this.student = students.find(student=>student.id==id);
    })
    
    programService.getAll().then((programs)=>{
      this.program = programs.find(program=>program.id==this.student.program_id)
    })
    uniService.getAll().then((universities)=>{
      this.uni = universities.find(uni=>uni.id==this.program.uni_id)
    })
    
  }
}