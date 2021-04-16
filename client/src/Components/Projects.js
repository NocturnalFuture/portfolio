import React from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';


class Projects extends React.Component {

  state = {
    projects: []
  }

  componentDidMount() {
    this.getData();
  }


  getData(){
      axios.get('/api/projects').then(response => {
   // console.log(response)
   this.setState({
     projects:response.data,
   })
      }).catch(error => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
      <ProjectList projects={this.state.projects}/>
      </div>
    )
  }
}

export default Projects