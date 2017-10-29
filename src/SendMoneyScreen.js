import React, { Component } from 'react';
import './App.css';
import img_elSendMoney from './images/SendMoneyScreen_elSendMoney.jpg';
import btn_icon_back_sendmoney from './images/btn_icon_back_sendmoney.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class SendMoneyScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Render function for component state 1 of 1 --- 
  onClick_button = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: '_default' });
  
  }
  
  
  render() {
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
  
    const style_sendMoney = {
        backgroundImage: 'url('+img_elSendMoney+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        backgroundColor: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen SendMoneyScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Send Money</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_sendmoney} alt="" style={{width: '50%'}} /></div></Appbar>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elSendMoney' style={style_sendMoney} />
            <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_button} >
              &#xA;
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
