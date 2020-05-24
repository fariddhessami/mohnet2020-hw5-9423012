import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function WarriorFormPanel() {
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
          {/*<div class="form-group">
                <label for="faridy-form-4">branch of service</label>
                <select class="custom-select" id="formGroupExampleInput4">
                    <option selected>select branch of service</option>
                    <option value="Army">United States Army</option>
                    <option value="Navy">United States Navy</option>
                    <option value="Marines">United States Marine Corps.</option>
                    <option value="AirForce">United States Air Force</option>
                </select>
            </div> */}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Fname</th>
                <th>Lname</th>
                <th>serviceId</th>
                <th>branch</th>
              </tr>
            </thead>
          </table>
        </form>
      </div>
    </div> //it seems only one div should be wrapping whole, here
  );
}

export default WarriorFormPanel;
