import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      fullename:'',
      mobile:'',
      password:'',
      confirmpassword:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Full Name"
             onChange = {(event,newValue) => this.setState({fullname:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Mobile"
             floatingLabelText="Mobile"
             onChange = {(event,newValue) => this.setState({mobile:newValue})}
             />
           <br/>
          
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
<br/>
            <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Confirm Password"
             onChange = {(event,newValue) => this.setState({confirmpassword:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           <br />
          <br />
           <a
            href="/user"
            class="btn btn-success pull-right"
          >All User
          </a>
         

          </div>
         </MuiThemeProvider>
      </div>
    );
  }

  resetInput = () => {
    this.setState({ fullname: ''});
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:4000";
    //To be done:check for empty values before hitting submit
    console.log(this.state.fullname, this.state.mobile, this.state.password);
    if(this.state.password.length < 5){
        alert('please enter 5 digit password!')
        return;

    }
    if(this.state.password !== this.state.confirmpassword)
    {
        alert('password and confirm password are not same!')
        return;
    }
    var self = this;
    var payload={
    "fullname": this.state.fullname,
    "mobile":this.state.mobile,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/user', payload,{
        "headers": {
          'Content-Type': 'application/json',
        }})
   .then(function (response) {
     console.log(response);
     if(response.status === 200){
      
         alert('User register successfully!');
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
}
const style = {
  margin: 15,
};
export default Register;