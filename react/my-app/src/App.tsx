import * as React from 'react';
import './App.css';
import ProgressBar from './progress';


class App extends React.Component {

  public state = {
    color: "lightblue",
    showInfo: true,
    step: 5,
    total: 12,
  }

  constructor(props:any) {
    super(props);
  }

  public decline = () => {
    let step = this.state.step - 1;
    if (step < 0) {
      step = 0;
    }
    this.setState({ step });
  }

  public increase = () => {
    let step = this.state.step + 1;
    if (step > this.state.total) {
      step = this.state.total;
    }
    this.setState({ step });
  };

  public increaseTotal = () => {
    const total = this.state.total + 1;

    this.setState({ total });
  };

  public declineTotal = () => {
    let total = this.state.total - 1;
    if (total < this.state.step) {
      total = this.state.step;
    }
    if (total < 1) {
      alert("最少 total 为 1");
      total = 1;
    }
    this.setState({ total });
  };

  public changeShowType = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  public changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    this.setState({
      color: randomColor
    });
  };
  
  public render() {
    return (
      <div>
        <div>
          <p>
            <button onClick={this.decline} >-</button>
            <button onClick={this.increase}>+</button>
            <label>step:</label> {this.state.step}
          </p>
          <p>
            <button onClick={this.declineTotal}>-</button>
            <button onClick={this.increaseTotal}>+</button>
            <label>total:</label>
            {this.state.total}
          </p>
          <p>
            <button onClick={this.changeShowType}>change</button>
            <label>showInfo:</label>
            {this.state.showInfo ? "显示" : "不显示"}
          </p>
          <p>
            <button onClick={this.changeColor}>change</button>
            <label>color:</label>
            {this.state.color || "预设黄色"}
          </p>
        </div>
        <ProgressBar
          step={this.state.step}
          total={this.state.total}
          showInfo={this.state.showInfo}
          color={this.state.color}/>
      </div>
    );
  }
}

export default App;
