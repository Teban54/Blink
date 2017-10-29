import React, { Component } from 'react';
import './App.css';
import img_elGoalsOverviewCopy from './images/GoalsOverviewScreen_elGoalsOverviewCopy.jpg';
import btn_icon_back_goalsoverview from './images/btn_icon_back_goalsoverview.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class GoalsOverviewScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Goals More Detailed'
    this.props.appActions.goToScreen('goalsmoredetailed', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_goalsOverviewCopy = {
        backgroundImage: 'url('+img_elGoalsOverviewCopy+')',
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
      <div className="AppScreen GoalsOverviewScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Goals Overview</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_goalsoverview} alt="" style={{width: '50%'}} /></div></Appbar>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elGoalsOverviewCopy' style={style_goalsOverviewCopy} />
            <Button className='actionFont elButton' style={style_button}  onClick={this.onClick_button} >
              &#xA;
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
