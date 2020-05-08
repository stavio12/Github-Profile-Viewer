import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import $ from "jquery";
import './App.css';
import Profile from './components/Profile'
import Search from './components/Search'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: `stavio12`,
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }


//Get user data
getUserData(){
  $.ajax({
    url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({userData:data})
      console.log(data);
    }.bind(this),
    error: function(xhr, status, err){
      this.setState({username:null});
      // alert(err);
    }.bind(this)
  })
}


//Get user repo
getUserRepos(){
  $.ajax({
    url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret + '&sprt=created',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({userRepos:data})
      console.log(data);
    }.bind(this),
    error: function(xhr, status, err){
      this.setState({username:null});
      // alert(err);
    }.bind(this)
  })
}

handleFormSubmit(username){
this.setState({username: username}, function(){
  this.getUserData()
  this.getUserRepos()
})}


componentDidMount(){
  this.getUserData()
  this.getUserRepos()

}


  render = () => 
      <div>
        <Search onFormSubmit ={this.handleFormSubmit.bind(this)}/>
    < Profile {...this.state} />
      </div>
}




App.propTypes ={
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps ={
  clientId: 'be0d2752ae8c6d86f1c8',
  clientSecret:'7404aa5474a35d1de9999d06cb72bfcaa958d9b4'
}
