import React, { Component } from 'react';
import './App.css';
import SendMoneyScreen from './SendMoneyScreen.js';
import GoalsMoreDetailedScreen from './GoalsMoreDetailedScreen.js';
import GoalsOverviewScreen from './GoalsOverviewScreen.js';
import TaskOverviewScreen from './TaskOverviewScreen.js';
import AllowanceScreen from './AllowanceScreen.js';
import RestrictionsScreen from './RestrictionsScreen.js';
import AlertsScreen from './AlertsScreen.js';
import StartScreen from './StartScreen.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};

    this.dataSlots = {};

    this.state = {
      currentScreen: 'start',
      currentScreenProps: {},
      screenFormatId: '',
    }
    this.screenHistory = [ {...this.state} ];
  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  goToScreen = (screenId, props) => {
    // This is the default implementation and could be customized by a navigation plugin.
    if ( !props)
      props = {};
    let screenState = {currentScreen: screenId, currentScreenProps: props};
    this.setState(screenState);
    this.screenHistory.push(screenState);
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState(prevScreenState);
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, row, actionId) => {
    // This is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.addItem(row);
    }
    this.setState(this.state);
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    this.setState(this.state);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps) => {
      let screenProps = {
        ...baseProps,
        appActions: this,
        dataSheets: this.dataSheets,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
      };
      switch (screenId) {
      default:
        return null;
      case 'sendmoney':
        return (<SendMoneyScreen {...screenProps} />)
      case 'goalsmoredetailed':
        return (<GoalsMoreDetailedScreen {...screenProps} />)
      case 'goalsoverview':
        return (<GoalsOverviewScreen {...screenProps} />)
      case 'taskoverview':
        return (<TaskOverviewScreen {...screenProps} />)
      case 'allowance':
        return (<AllowanceScreen {...screenProps} />)
      case 'restrictions':
        return (<RestrictionsScreen {...screenProps} />)
      case 'alerts':
        return (<AlertsScreen {...screenProps} />)
      case 'start':
        return (<StartScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
