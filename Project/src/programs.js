import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uniservice';
import studentService from './services/studentservice';
import programService from './services/programservice'
import { Card, Row, Column, Container, Divider } from './widgets';
import { NavLink} from 'react-router-dom';

export class ProgramList extends Component {
    programs = [];
   
  render() {
    return (
      <Container>
            <Card title="Program List">
                <Row>
                   
                    <Column>Name</Column>
                </Row>
            {this.programs.map((program) => (
                <Row key={program.id}>
                    
                    <Column> <NavLink to={'/programs/'+program.id}>{program.name}</NavLink></Column>
                </Row>
          ))}
          
          </Card>
          </Container>
      
    );
  }
  mounted() {
    programService.getAll().then((programs)=>{this.programs=programs})
    
  }
  
}

export class Program extends Component {
    programs=[];
    program={};
    uni={};
    students=[];
    render() {
      return (
        <Container>
          <Card>
          <Row>
          <Column width="3" smwidth="2" >
          <img src={this.program.img} className='img-fluid' />
          </Column>
          <Column width="9" smwidth="10">
            <Row><h3 className='align-text-bottom'>{this.program.name}</h3>
            </Row> 
            <Row>
            <Column>
            Offered by {this.uni.name}
            </Column>
          </Row>
          </Column>
          </Row>
          <br></br>
          
          <Divider />
          <Row><Column>
          Students on this program:
          </Column></Row>
          {this.students.map((student) => (
            <Row key={student.id}>
            <Column> <NavLink to={'/students/'+student.id}>{student.name}</NavLink></Column>
            </Row>
            ))}
          
        </Card></Container>
        
      )
    }
    mounted() {
        programService.getAll().then((programs)=>{
          this.programs = programs;
          let w = window.location.hash;
          let id = w.match(/\d+/)[0] 
          this.program = this.programs.find(program=>program.id==id)
        })
        studentService.getAll().then((students)=>{
          this.students=students.filter((student)=>student.program_id==this.program.id)
          console.log(this.students)
        })
        uniService.getAll().then((universities)=>{
          this.uni = universities.find(uni=>uni.id==this.program.uni_id)
        })
    }
  }