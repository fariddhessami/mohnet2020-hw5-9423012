import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

var secretKeyFile = require('../keys/SecretKey.json');
const KEY = secretKeyFile.key;

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '90%',
};

const divStyle = {
  // position: 'relative',
  width: '100%',
  height: '400px',
};

export class LocationPickerFaridy5 extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        alo this is map alo alo
        <Map
          className="form-group"
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
          {/*  */}
        </Map>
      </div>
    );
  }
}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: KEY,
  // this is a configuration object
})(LocationPickerFaridy5);
