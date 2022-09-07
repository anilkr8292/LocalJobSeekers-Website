import React,{Component} from 'react';
import JobproviderRegstr from './JobproviderRegstr';
import JobseekersRegstr from './JobseekersRegstr';
export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state ={
      page:1,
    };
  }
  pageSwitchHandler=(e)=>{
    this.setState({
      page: !this.state.page
    });
    e.preventDefault();
  };
  render()
  {
  return (
    <> 
    {
      this.state.page ?( <JobproviderRegstr switch={this.pageSwitchHandler} />) :( <JobseekersRegstr switch={this.pageSwitchHandler} /> )   
    }
    </>
  );
  }
}
