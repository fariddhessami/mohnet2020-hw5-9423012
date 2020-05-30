import React, { Component } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import DatePickerFaridy from './DatePickerFaridy';
import LocationPickerFaridy from './LocationPickerFaridy';
import LocationPickerFaridy2 from './LocationPickerFaridy2';

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
  }

  componentDidMount() {
    Axios.get('api/forms-test').then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
          forms: result.data,
        });
        console.log('formsP : result : ');
        console.log(result);
        console.log(result.data);
        console.log('this.state.items', this.state.items);
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
    this.setState();
    var state2 = this.state;
    state2.forms.map((form) => (form.isVisiable = false));
    state2.forms.map((form) => {
      console.log('form.id', form.id);
      if (form.id === selectedID) form.isVisiable = true;
    });
    console.log('state2', state2);
    this.setState(state2);
    console.log('this.state.forms', this.state.forms);
  }

  toggleFormVis(selectedID) {
    console.log('click occured!!!!');
    console.log('this.state.forms', this.state.forms);
    console.log(selectedID);
    // this.setState(prevState =>(return {}));
  }

  fieldTypeSwitch(field) {
    var renderOutPut = <div>alohoiii1</div>;

    switch (field.type) {
      case 'Text':
        renderOutPut = (
          <div>
            {' '}
            <input
              type="text"
              className="form-control"
              id={field.name}
              placeholder="Example input"
            />
          </div>
        );
        break;
      case 'Date':
        renderOutPut = (
          <div>
            <DatePickerFaridy id={field.name} />
          </div>
        );
        break;
      default:
        break;
    }

    return renderOutPut;
  }

  drawFormBody(form) {
    console.log('form to draw : ', form);

    if (form.isVisiable) {
      return <div>alou11111</div>;
    } else {
      return <div>alou77777</div>;
    }
  }

  render() {
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

            <ThisInReact1 />

            {items.map((item) => (
              <div className="form-group">
                <form id={item.id}>
                  <h3 onClick={() => this.handleClick(item.id)}>
                    {item.title}
                  </h3>
                  {/* <h3 onClick={() => this.handleClick(id)}>{item.title}</h3> */}
                  {/* </form> */}
                  {/* 
                  {if(form.isVisiable){
                   return <div></div> 
                  }} */}

                  {drawFormBody(item)}

                  {item.fields.map((field) => (
                    <div className="form-group">
                      <label htmlFor={field.name}>{field.title}</label>
                      {fieldTypeSwitch(field)}
                      {/* {switch(field.type) {
                        case "Text":
                            
                            break;
                    
                        default:
                            break;
                    }} */}
                    </div>
                  ))}
                </form>
                <input type="submit" value="Submit" />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
