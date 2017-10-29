import React, { Component } from 'react';
import './App.css';
import img_elTasksCopy from './images/TaskOverviewScreen_elTasksCopy.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class TaskOverviewScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button2 = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  onClick_button3 = (ev) => {
    // Go to screen 'Send Money'
    this.props.appActions.goToScreen('sendmoney', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_tasksCopy = {
        backgroundImage: 'url('+img_elTasksCopy+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_button2 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    const style_button3 = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen TaskOverviewScreen" style={baseStyle}>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elTasksCopy' style={style_tasksCopy} />
            <Button className='actionFont elButton2' style={style_button2}  onClick={this.onClick_button2} >
              &#xA;
            </Button>
            <Button className='actionFont elButton3' style={style_button3}  onClick={this.onClick_button3} >
              &#xA;
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
