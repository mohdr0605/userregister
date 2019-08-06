import React, { Component } from "react";
import "./App.css";
import TableDetail from './TableDetail';

import axios from "axios";
const HOST = "http://localhost:4000";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentWillMount() {
    var url = HOST + '/user';
    axios.get(url,{
        "headers": {
          'Content-Type': 'application/json',
        }}).then(response => {
        console.log('hit here')
      this.setState({ users: response.data });
      console.log(response.data);
    });
  }
  render() {
    var { users } = this.state;
    var renderUsers = () => {
      if (users.length === 0) {
        return <p>{users}</p>;
      }
      return users.map(user=> <TableDetail {...user}/>);
    };
    return (
      <div>
       
        <div class="container">
          <a
            href="/register"
            class="btn btn-success pull-right"
          >
            <i class="glyphicon glyphicon-plus" /> Register
          </a>
          <br />
          <br />
            <table class="" id='users'>
            <thead>
              <tr>
              
                <th scope="col">Full Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            {renderUsers()}
          </table>
        </div>
      </div>
    );
  }
}
const style = {
    margin: 15,
  };
export default User;