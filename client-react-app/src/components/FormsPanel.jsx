import React, { Component } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import DatePickerFaridy from './DatePickerFaridy';
import LocationPickerFaridy from './LocationPickerFaridy';
import LocationPickerFaridy2 from './LocationPickerFaridy2';
import LocationPickerFaridy3 from './LocationPickerFaridy3';
import LocationPickerFaridy5 from './LocationPickerFaridy5';

import ThisInReact1 from './training-components/ThisInReact1';

export default class FormsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleFormVis = this.toggleFormVis.bind(this);
    // this.drawFormBody = this.drawFormBody(this);
    this.handleChange = this.handleChange.bind(this);
    this.fieldTypeSwitch = this.fieldTypeSwitch.bind(this);
    this.optionSwitch = this.optionSwitch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get('api/forms').then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
          forms: result.data,
        });
        this.state.forms.forEach((form) => {
          form.isVisiable = false;
        });
        this.setState();
        console.log('this.state.forms', this.state.forms);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  handleClick(selectedID) {
    console.log('click occured!!!!');
    console.log('this.state.forms', this.state.forms);
    console.log(selectedID);
    // this.setState();
    var state2 = this.state;
    state2.forms.map((form) => (form.isVisiable = false));
    state2.forms.map((form) => {
      // console.log('form.id', form.id);
      if (form.id === selectedID) form.isVisiable = true;
    });
    console.log('state after click', state2);
    this.setState(state2);
  }

  handleSubmit(e, formID) {
    e.preventDefault();
    alert(`salam Haji! ${formID}`, formID);

    // axios.post('/login', {
    //   firstName: 'Finn',
    //   lastName: 'Williams',
    // });

    console.log('on submit this', this);
    console.log('on submit this', this.state.forms);

    // Axios.put('/api/submitform', JSON.stringify(this.state.forms));
    // // .then({})
    // Axios.put('/api/submitform', { alo: 'salam' });
    // Axios.post('/api/submitform', { alo: 'salam' });
    // Axios.put('/api/submitform', JSON.stringify(this.state.forms));

    var desiredForm;

    this.state.forms.map((form) => {
      if (form.id === formID) desiredForm = form;
    });

    Axios.put('/api/submitform', desiredForm);
  }

  toggleFormVis(selectedID) {
    console.log('click occured!!!!');
    console.log('this.state.forms', this.state.forms);
    console.log(selectedID);
    // this.setState(prevState =>(return {}));
  }

  handleChange(formId, fieldName, value) {
    console.log(
      'this is handle change',
      'handleChange',
      'formId, fieldName, value',
      '',
      formId,
      fieldName,
      value,
      typeof value
    );
    var state3 = this.state;
    console.log(state3);
    var ourForm;
    state3.forms.map((form) => {
      console.log('form.id', form.id);
      if (form.id === formId) {
        ourForm = form;
        form.fields.map((field) => {
          if (field.name === fieldName) {
            if (field.type === 'Location') {
              // var coords = {};
              // coords.lat = value.lat;
              // coords.long = value.long;
              // // coords = value.long;

              console.log('location value field', 'value', value);

              // if (typeof field.value == 'object') {
              //   console.log(
              //     'this is new state : (json gonna parse :) value',
              //     value
              //   );
              //   field.value = JSON.parse(value);
              // } else {

              if (typeof value == 'string') {
                value = JSON.parse(value);
              }

              console.log(
                'this is new state : (json not! gonna parse :) value',
                value
              );

              field.value = value;
              // }

              console.log('location value field.value', field.value);
            } else {
              field.value = value;
            }
          }
        });
      }
    });
    console.log(ourForm);
    this.setState(state3);
    console.log('this is new state :', state3);
  }

  handleSelect(e) {
    console.log('on select called!!!!');
  }

  fieldTypeSwitch(formId, field) {
    var renderOutPut = <div>unProgrammed field type</div>;

    console.log(
      'field to check :',
      'field',
      'field.options',
      field,
      field.options
    );

    if (typeof field.options != 'undefined') {
      if (field.type == 'Location') {
        console.log('this is fieldTypeSwitch : ', 'field.type', field.type);
      }

      renderOutPut = (
        <div>
          <select
            className="custom-select"
            onChange={(e) =>
              this.handleChange(formId, field.name, e.target.value)
            }
            onSelect={(e) => this.handleSelect(e)}
          >
            <option value="">select an option</option>
            {field.options.map((option) =>
              // <option value={option.value}>{option.label}</option>
              this.optionSwitch(field, option)
            )}
          </select>
        </div>
      );
    } else {
      switch (field.type) {
        case 'Text':
          {
            renderOutPut = (
              <div>
                {' '}
                <input
                  type="text"
                  className="form-control"
                  id={field.name}
                  placeholder="Example input"
                  onChange={(e) =>
                    this.handleChange(formId, field.name, e.target.value)
                  }
                />
              </div>
            );
          }
          // renderOutPut = (
          //   <div>
          //     {' '}
          //     <input
          //       type="text"
          //       className="form-control"
          //       id={field.name}
          //       placeholder="Example input"
          //       onChange={(e) =>
          //         this.handleChange(formId, field.name, e.target.value)
          //       }
          //     />
          //   </div>
          // );
          break;
        case 'Date':
          renderOutPut = (
            <div>
              <DatePickerFaridy
                id={field.name}
                handeChFunc={this.handleChange}
                formId={formId}
              />
            </div>
          );
          break;

        case 'Location':
          renderOutPut = (
            <LocationPickerFaridy5
              className="form-group"
              myfunc={this.handleChange}
              myformId={formId}
              myfield={field}
            />
          );
          break;
        default:
          break;
      }
    }

    return renderOutPut;
  }

  optionSwitch(field, option) {
    console.log('that loc opt type : ', field.type, option, selectedLoc);
    if (field.type != 'Location') {
      return <option value={option.value}>{option.label}</option>;
    } else {
      var selectedLoc = option.value;
      console.log('that loc opt : ', 'selectedLoc', selectedLoc);
      console.log('that loc opt : ', 'typeof(selectedLoc)', typeof selectedLoc);
      // return <option value={option.value}>{option.label}</option>;
      return (
        <option value={JSON.stringify(option.value)}>{option.label}</option>
      );
    }
  }

  drawFormBody(form, fieldTySwitch) {
    console.log('this is this.drawFormBody');
    console.log('form to draw : ', form);
    console.log('and this : ', this);

    if (!form.isVisiable) {
      return <div>click on form title to open it</div>;
    } else {
      return (
        <div>
          {form.fields.map((field) => (
            <div className="form-group">
              <label htmlFor={field.name}>{field.title}</label>
              {fieldTySwitch(form.id, field)}
              {/* {fieldTypeSwitch(field)} */}
            </div>
          ))}
          <input type="submit" value="Submit" />
        </div>
      );
    }
  }

  render() {
    console.log('this is render() : ', this);
    const drawFormBody = this.drawFormBody;
    const fieldTypeSwitch = this.fieldTypeSwitch;
    const { error, isLoaded, items } = this.state;
    console.log('formsP in render : items : ');
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="container">
            <p>hello this is forms BTW</p>

            {/* <LocationPickerFaridy2 /> */}
            {/* <LocationPickerFaridy3 /> */}

            <ThisInReact1 />

            {items.map((form, indexAsKey) => (
              <div className="form-group" key={indexAsKey}>
                <form
                  id={form.id}
                  key={indexAsKey}
                  onSubmit={(e) => this.handleSubmit(e, form.id)}
                >
                  <h3
                    onClick={() => this.handleClick(form.id)}
                    key={indexAsKey}
                  >
                    {form.title}
                  </h3>
                  {/* <h3 onClick={() => this.handleClick(id)}>{item.title}</h3> */}
                  {/* </form> */}
                  {/* 
                  {if(form.isVisiable){
                   return <div></div> 
                  }} */}
                  {/* {() => console.log('hello there!')}
                  {() => this.drawFormBody(item)} */}
                  {/* {drawFormBody(item)} */}
                  {this.drawFormBody(form, fieldTypeSwitch)}
                  {/* {this.drawFormBody(item)} */}
                  {/* {drawFormBody(item)} */}
                </form>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
