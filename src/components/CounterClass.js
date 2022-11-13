import React, { Component } from "react";
import { increment, decrement } from "../actions/counter";
import { connect } from "react-redux";

class CounterClass extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <hr />
        <h3>Class component</h3>
        <button onClick={() => this.props.decrement(1)}>-</button>
        &nbsp; &nbsp; {this.props.count} &nbsp; &nbsp;
        <button onClick={() => this.props.increment(2)}>+</button>
        <hr />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (num) => dispatch(increment(num)),
    decrement: (num) => dispatch(decrement(num)),
  }
};

const mapStateToProps = (state) => {
  return { count: state.counter };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
