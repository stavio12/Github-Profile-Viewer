import React, {Component} from 'react';
import '../App.css';

export default class Search extends Component{
onSubmit(e){
    e.preventDefault();
let username = this.refs.username.value.trim();
if(!username){
    alert("Please type in a username")
    return;
}
this.props.onFormSubmit(username);

this.refs.username.value =' ';
}

    render = () => 
    <div>
<form onSubmit={this.onSubmit.bind(this)}>
    <label>Search Github Users</label>
    <input type="text" ref="username" className="form-control" />
</form>
  
  </div>
  
  
  
  
  }
  