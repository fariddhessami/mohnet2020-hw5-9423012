import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DatePickerFaridy extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    console.log('hello there!');
    this.props.handeChFunc(
      this.props.formId,
      this.props.id,
      date.toISOString().substring(0, 10)
    );
    console.log('heres date : ', date);
    console.log('heres date : ', date.toString());
    console.log('heres date : ', date.getDate());
    console.log('heres date : ', date.toISOString().substring(0, 10));

    // var resultDate = '';
    // resultDate = resultDate + date.get;
    // (formId, fieldName, value)
    // YYYY-MM-DD
  };

  render() {
    return (
      <DatePicker
        // style="display:block;" //thought it would make width ok but didn't
        className="form-control"
        id={this.props.id}
        selected={this.state.startDate}
        onChange={this.handleChange}
        // onChange={this.props.handeChFunc}
      />
    );
    // const [startDate, setStartDate] = useState(new Date());
    // return (
    //   <DatePicker
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //     peekNextMonth
    //     showMonthDropdown
    //     showYearDropdown
    //     dropdownMode="select"
    //   />
    // );
  }
}

// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       peekNextMonth
//       showMonthDropdown
//       showYearDropdown
//       dropdownMode="select"
//     />
//   );
// };
