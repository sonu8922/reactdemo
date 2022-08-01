import React, { Component } from 'react'

export default class UserLastName extends Component {
  constructor(props) {
    super(props);
    this.baseURL = "http://127.0.0.1:5001/api/getusersurname"
    this.state = {
      username: '',
      responseResult:{},
      showHide:false
    };
    this.updateState = this.updateState.bind(this)
  }

  updateState(event) {
    this.setState({username :event.target.value}) 
  }
  getUserLastName=(e)=>{
    e.preventDefault();
    let fetchRes = fetch(this.baseURL+"/"+this.state.username);
              fetchRes.then(res =>
                  res.json()).then(d => {
                      console.log(d)
                      this.setState({responseResult:d})
                      this.setState({showHide:true})
                  })
  }
 
  render() {
    return (
      <form onSubmit={this.getUserLastName}>
        <h3>Get User Last Name</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter firstName"
            onChange={this.updateState}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div style={{height:45 ,marginTop:10}}>
        {
          this.state.showHide?        
        this.state.responseResult.status===0?<div className='text-success font-weight-bold py-2 text-center'><span className='text-dark'>Your last name is </span>{this.state.responseResult.lastname}</div>:
        <div className='text-danger font-weight-bold py-2 text-center'>User not found</div>:''
      }
      </div>
      </form>
    )
  }
}
