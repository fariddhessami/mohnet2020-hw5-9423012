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
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
    this.mapMarkerRef = React.createRef();
  }

  handleDrag(e) {
    console.log('salam google');
    console.log(e);
    console.log(this.mapMarkerRef.current);
  }

  render() {
    return (
      <div style={divStyle}>
        <Map
          className="form-group"
          containerStyle={containerStyle}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          google={this.props.google}
          zoom={14}
        >
          <Marker
            draggable={true}
            onClick={this.onMarkerClick}
            name={'Current location'}
            onDragend={(e) => this.handleDrag(e)}
            ref={this.mapMarkerRef}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
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
