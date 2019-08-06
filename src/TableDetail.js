import React, { Component } from "react";

import "./App.css";

class TableDetail extends Component {
  render() {
    var { fullname, mobile, password } = this.props;
  
    return (
      <tbody>
        <tr>
          <td> {fullname} </td>
          <td>
            {mobile}
          </td>
          <td>
            {password}
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableDetail;