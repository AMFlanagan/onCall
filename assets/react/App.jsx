import React from 'react';
import ToolBar from './components/ToolBar.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Main App</h1>
        <ToolBar />
      </div>);
  }
}
