import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
import Axios from 'axios';

var secretKeyFile = require('../keys/SecretKey.json');
const KEY = secretKeyFile.key;

/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.925,
};

export default class LocationPickerFaridy4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: 'Kala Pattar Ascent Trail, Khumjung 56000, Nepal',
      position: {
        lat: 0,
        lng: 0,
      },
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    var URL2 =
      'https://maps.googleapis.com/maps/api/js?key=' +
      KEY +
      '&v=3.exp&libraries=geometry,drawing,places';

    console.log('hear hear : ' + URL2);
    Axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'origin-list';
    var getReqConf = [];
    // Axios.get(URL2, { headers: 12 })
    fetch(URL2).then(
      (result) => {
        this.setState({
          isLoaded: true,
        });
        console.log('what we got from google: ');
        console.log(result);
      },
      // axios.post(url, {
      //     headers: {
      //       'Authorization': `Basic ${token}`
      //     }
      //   })

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

  handleLocationChange({ position, address, places }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
      <div>
        location picker faridy 3 here!
        {KEY}
        {/* <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '400px' }} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div> */}
      </div>
    );
  }
}
