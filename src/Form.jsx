import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <div className="form-group row justify-content-center">
          <label htmlFor='name' className="col-sm-2 col-form-label text-right">Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className='form-control'
              name="name"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-group row justify-content-center'>
          <label htmlFor='job' className="col-sm-2 col-form-label text-right">Job</label>
          <div className="col-sm-4">
            <input
              type="text"
              className='form-control'
              name="job"
              id="job"
              value={job}
              placeholder="Enter Job"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm}
          />
        </div>
        </form>
    )
  }
}

export default Form;