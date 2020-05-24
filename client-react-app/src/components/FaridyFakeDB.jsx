import React, { Component } from 'react';
import FormDiscPanel from './FormDiscriptorsPanel';
import WarriorFormPanel from './WarriorForm';

class ServiceMan {
  constructor(f_name, l_name, dodId, branch) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.dodId = dodId;
    this.branch = branch;
  }
}

export class FaridyFakeDB extends Component {
  state = {
    warriors: [
      new ServiceMan('Joe', 'Gage', 1212, 'Army'),
      new ServiceMan('Jack', 'NewMan', 1213, 'Marines'),
      new ServiceMan('John', 'Adams', 12, 'Marines'),
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
        <WarriorFormPanel />
      </div>
    );
  }
}

export default FaridyFakeDB;
