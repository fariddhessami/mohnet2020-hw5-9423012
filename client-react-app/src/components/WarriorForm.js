import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export class WarriorForm extends Component {
  render() {
    console.log(this.props.warriosArray);
    return (
      <div className="WarriorFormDiv">
        <h3>form of warriors</h3>

        <div className="container">
          <form>
            <div className="form-gruop">
              <label htmlFor="faridy-form-1">first name</label>
              <input
                type="text"
                className="form-control"
                id="formInput1"
                placeholder="Example input"
              />
            </div>
            <div className="form-gruop">
              <label htmlFor="faridy-form-2">last name</label>
              <input
                type="text"
                className="form-control"
                id="formInput2"
                placeholder="Example input"
              />
            </div>
            <div className="form-gruop">
              <label htmlFor="faridy-form-3">serverice id</label>
              <input
                type="text"
                className="form-control"
                id="formInput3"
                placeholder="Example input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="faridy-form-3">branch of service</label>
              <select name="" id="" className="form-control"></select>
            </div>
            {/* {this.props.map} */}

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Fname</th>
                  <th>Lname</th>
                  <th>serviceId</th>
                  <th>branch</th>
                </tr>
              </thead>
              <tbody>
                {this.props.warriosArray.map((aWarrior, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{aWarrior.f_name}</td>
                    <td>{aWarrior.l_name}</td>
                    <td>{aWarrior.dodId}</td>
                    <td>{aWarrior.branch}</td>
                  </tr>

                  // <td>Mark</td>
                  // <tr></tr>

                  // <tr>{aWarrior.Fname}</tr>
                  // <tr>{aWarrior.Lname}</tr>
                  // <tr>{aWarrior.serviceId}</tr>
                  // <tr>{aWarrior.branch}</tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default WarriorForm;
