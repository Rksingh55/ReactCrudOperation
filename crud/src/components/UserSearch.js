
import React, { Component } from 'react'
import {Table,Button} from "react-bootstrap"
import {FcSearch} from "react-icons/fc"
import "./style.css"
import {Link } from 'react-router-dom'
export default class UserSearch extends Component {
  constructor(){
    super()
    this.state={
      searchdata:null,
      searchkey:null
    }
  }
  search=(key)=>{
fetch("http://localhost:3000/users?q="+key).then((result)=>{
result.json().then((res)=>{
// console.log(res);
this.setState({searchdata:res})
})
})
  }
  render() {
    return (
     <>
     <div className='container'>
     <br/>
     <center>
     
      <div className='div'>

      <input type="text" className='input' name='search' onChange={(e)=>{this.setState({searchkey:e.target.value})}}/>
      <FcSearch className='icon' onClick={()=>this.search(this.state.searchkey)}/>
      </div>
      {/* <input type="text" name='search' onChange={(e)=>{this.setState({searchkey:e.target.value})}}/>
     <button onClick={()=>this.search(this.state.searchkey)}>Search Data</button> */}
     </center>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th> Name</th>
          <th>City</th>
          <th>Age</th>
          <th>Email</th>
         
        </tr>
      </thead>
 {this.state.searchdata?<tbody>
  {this.state.searchdata.map((pro)=>{
    return(
      <tr>
        <td>{pro.id}</td>
        <td>{pro.name}</td>
        <td>{pro.city}</td>
        <td>{pro.age}</td>
        <td>{pro.email}</td>
        
      </tr>
    )
  })}
 </tbody>:<p>No data</p>}
    </Table>
    
    <span>  </span>
              <Link to="/"><Button variant="primary"  className='btn3 bg-black'  type="submit"  >
        Back
      </Button></Link> 
    </div>
     </>
    )
  }
}
