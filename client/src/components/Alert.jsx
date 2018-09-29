import React, { Component } from 'react';
import { navigate } from '@reach/router';

class Alert extends React.Component {
  
  render () {
    const { latitude, longitude, category } = this.props;
    console.log(`category: ${category}\nlatitude: ${latitude}\nlongitude: ${longitude}`);
    return (
      <div>
        <h1>RED ALERT</h1>
      </div>
    )
  }
}
export default Alert;