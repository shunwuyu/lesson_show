import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      job: ''
    };
    this.state = this.initialState;
  }
  render () {
    const { name, job } = this.state;
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="form-control"
            />
        </div>
        <div className="form-group">
          <label>Job</label>
          <input
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange}
            className="form-control"
            />
            
        </div>
        <input 
              className="btn btn-primary"
              type="button" 
              value="Submit" 
              onClick={this.submitForm} />
      </form>
    )
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  submitForm = () => {
    if (this.state.name) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  }
}

export default Form;