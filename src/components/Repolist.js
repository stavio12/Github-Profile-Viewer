import React, {Component} from 'react';
import '../App.css';
import Repo from './Repo'

export default class Repolist extends Component{


  render = () => 
  <div>
<ul className="list-group">
       {
           this.props.userRepos.map(repo =>{
               return <Repo
                         repo = {repo}
                         key = {repo.id}
                         {...this.props} />
           })
       }
</ul>

</div>




}
