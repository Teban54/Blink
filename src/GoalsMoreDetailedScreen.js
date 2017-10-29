import React, { Component } from 'react';
import './App.css';
import img_elGoalsDetailCopy from './images/GoalsMoreDetailedScreen_elGoalsDetailCopy.jpg';
import btn_icon_back_goalsmoredetailed from './images/btn_icon_back_goalsmoredetailed.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class GoalsMoreDetailedScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Send Money'
    this.props.appActions.goToScreen('sendmoney', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_goalsDetailCopy = {
        backgroundImage: 'url('+img_elGoalsDetailCopy+')',
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
    
    return (
      <div className="AppScreen GoalsMoreDetailedScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_goalsmoredetailed} alt="" style={{width: '50%'}} /></div></Appbar>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elGoalsDetailCopy' style={style_goalsDetailCopy} />
            <Button className='actionFont elButton' style={style_button}  onClick={this.onClick_button}  />
          </div>
        </div>
      </div>
    )
  }
  

}
