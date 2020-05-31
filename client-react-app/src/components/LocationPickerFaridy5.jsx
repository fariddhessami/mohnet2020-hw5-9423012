import React, { Component } from 'react';

import { GoogleApiWrapper } from 'google-maps-react';

var secretKeyFile = require('../keys/SecretKey.json');
const KEY = secretKeyFile.key;

export class LocationPickerFaridy5 extends React.Component {}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: KEY,
  // this is a configuration object
})(LocationPickerFaridy5);
