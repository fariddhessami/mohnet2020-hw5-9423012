import React, { Component } from 'react';
import FormDiscPanel from './FormDiscriptorsPanel';
import WarriorFormPanel from './WarriorForm';
import Todos from './Todos';

class ServiceMan {
  constructor(f_name, l_name, dodId, branch) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.dodId = dodId;
    this.branch = branch;
  }
}

class todoThing {
  constructor(id, title, isCompleted) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
  }
}

export class FaridyFakeDB extends Component {
  state = {
    warriors: [
      new ServiceMan('Joe', 'Gage', 1212, 'Army'),
      new ServiceMan('Jack', 'NewMan', 1213, 'Marines'),
      new ServiceMan('John', 'Adams', 12, 'Marines'),
    ],
    todos: [
      new todoThing(1, 'fix mac', false),
      new todoThing(2, 'post art in art station', false),
    ],
  };
  getData() {
    return this.state.warriors;
  }
  render() {
    return (
      <div>
        {' '}
        FaridyFakeDB here!
        <FormDiscPanel />
        <WarriorFormPanel warriosArray={this.state.warriors} />
        <Todos todosArray={this.state.todos} />
      </div>
    );
  }
}

export default FaridyFakeDB;
