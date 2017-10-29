import React, { Component } from 'react';
import './App.css';
import img_elAlert from './images/AlertsScreen_elAlert.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class AlertsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'restrictions'
    this.props.appActions.goToScreen('restrictions', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy3 = (ev) => {
    // Go to screen 'Goals Overview'
    this.props.appActions.goToScreen('goalsoverview', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy4 = (ev) => {
    // Go to screen 'Task Overview'
    this.props.appActions.goToScreen('taskoverview', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy5 = (ev) => {
    // Go to screen 'Allowance'
    this.props.appActions.goToScreen('allowance', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_alert = {
        backgroundImage: 'url('+img_elAlert+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy3 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy4 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy5 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen AlertsScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elAlert' style={style_alert} />
            <Button className='actionFont elButton' style={style_button}  onClick={this.onClick_button}  />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  onClick={this.onClick_buttonCopy} >
              &#xA;
            </Button>
            <Button className='actionFont elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_buttonCopy3} >
              &#xA;
            </Button>
            <Button className='actionFont elButtonCopy4' style={style_buttonCopy4}  onClick={this.onClick_buttonCopy4}  />
            <Button className='actionFont elButtonCopy5' style={style_buttonCopy5}  onClick={this.onClick_buttonCopy5}  />
          </div>
        </div>
      </div>
    )
  }
  

}
