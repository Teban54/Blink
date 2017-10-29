import React, { Component } from 'react';
import './App.css';
import img_elScreenShot20171028At60007PM from './images/RestrictionsScreen_elScreenShot20171028At60007PM.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class RestrictionsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_buttonCopy = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy2 = (ev) => {
    // Go to screen 'alerts'
    this.props.appActions.goToScreen('alerts', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy3 = (ev) => {
    // Go to screen 'Task Overview'
    this.props.appActions.goToScreen('taskoverview', { transitionId: '_default' });
  
  }
  
  
  onClick_buttonCopy4 = (ev) => {
    // Go to screen 'Goals Overview'
    this.props.appActions.goToScreen('goalsoverview', { transitionId: '_default' });
  
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
  
    const style_screenShot20171028At60007PM = {
        backgroundImage: 'url('+img_elScreenShot20171028At60007PM+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_buttonCopy2 = {
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
      <div className="AppScreen RestrictionsScreen" style={baseStyle}>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elScreenShot20171028At60007PM' style={style_screenShot20171028At60007PM} />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  onClick={this.onClick_buttonCopy} >
              &#xA;
            </Button>
            <Button className='actionFont elButtonCopy2' style={style_buttonCopy2}  onClick={this.onClick_buttonCopy2}  />
            <Button className='actionFont elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_buttonCopy3}  />
            <Button className='actionFont elButtonCopy4' style={style_buttonCopy4}  onClick={this.onClick_buttonCopy4}  />
            <Button className='actionFont elButtonCopy5' style={style_buttonCopy5}  onClick={this.onClick_buttonCopy5}  />
          </div>
        </div>
      </div>
    )
  }
  

}
