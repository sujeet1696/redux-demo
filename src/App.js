import React from 'react';
import { connect } from 'react-redux';
import Home from '/home/ksolves/Documents/sujeet/training/ReactJs/redux-app/src/component/home.js';
import { Update_name, Update_add } from '/home/ksolves/Documents/sujeet/training/ReactJs/redux-app/src/action.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John Done',
      add: 'Delhi',
      showData: false
    };
  };

  setData = () => {
    this.props.Update_name(this.state.name);
    this.props.Update_add(this.state.add);
    this.setState( { showData: !this.state.showData });
  };

  render() {
    return(
      <div className="App">
        { !this.state.showData &&
          <div>
            <h1>Before applying action </h1>
            Name:{this.props.name}<br/>
            Add: {this.props.add}
          </div>
        }
        <button type="button" onClick={this.setData}>Click me...</button>
        { this.state.showData &&
          <div>
            <h1>After applying action </h1>
            Name:{this.props.name}<br/>
            Add: {this.props.add}
            <Home/>
          </div>
        }
      </div>
    );
  }
}


const MapActionToProps = {Update_name, Update_add};

const MapToProps = (state) => ({
  name: state.name,
  add:state.add
});

export default connect(MapToProps, MapActionToProps)(App);
