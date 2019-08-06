import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
  return(
    <div>
      <h1> In home Page </h1>
      <h3>Name : {props.name}</h3>
      <h3>Add : {props.add}</h3>
    </div>
  );
}

const MapToProps = (state) => ({
  name: state.name,
  add: state.add
});

export default connect(MapToProps, {})(Home);
