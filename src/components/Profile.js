import React, {Component} from 'react';
import '../App.css';
import Repolist from './Repolist';

export default class Profile extends Component{


  render = () => 
  <div className="panel panel-default home">
  <div className="panel-heading">
<h3 className="panel-title">{this.props.userData.name}</h3>
  </div>
<div className="panel-body">
    <div className="row">
        <div className="col-md-4">
      <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
        </div>

        <div className="col-md-8">
        <div className="row">
        <div className="col-md-12 profile">
<span className="badge p-2 badge-primary">{this.props.userData.public_repos} Repos</span>
<span className="badge p-2 badge-success">{this.props.userData.public_gists} Public Gists</span>
<span className="badge p-2 badge-info">{this.props.userData.followers} Followers</span>
<span className="badge p-2 badge-danger">{this.props.userData.following} Following</span>
            </div>
            </div>
<hr/>
   <div className="row">
        <div className="col-md-12">
<ul className="list-group ">
          <li className="list-group-item"><strong>Username: {this.props.userData.login} </strong> </li>
          <li className="list-group-item"><strong>Location: {this.props.userData.location} </strong> </li>
          <li className="list-group-item"><strong>Email Address : {this.props.userData.email} </strong> </li>
</ul>
 </div>
 </div>
<br/>
<a className="btn btn-primary" target= "_blank" href={this.props.userData.html_url}> Visit Profile </a>
</div>


</div>
<hr/>
<h3>User Repositories</h3>
    <Repolist userRepos ={this.props.userRepos} />
    </div>
</div>






}
