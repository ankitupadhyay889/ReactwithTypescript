// ! Class component with state and props

import {Component} from 'react';

type CountProp = {
    message: string,
}

type CounterState = {
  count: number,
}

class Day1 extends Component <CountProp,CounterState> {
  state: CounterState = {
    count: 0,
  }

  hClick = () => {
    this.setState((preSa) => ({count: preSa.count + 1}))
  }
  oClick = () => {
    this.setState((pSa) => ({count : pSa.count - 1}))
  }
  render() {
    return (
      <div>
        {this.props.message}
        <button onClick={this.hClick} > + </button>
        <button onClick={this.oClick}> - </button>
        {this.state.count}
      </div>
    );
  }
}

export default Day1;