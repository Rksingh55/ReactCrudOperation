
import React, { Component } from 'react'
import {Form,Button} from "react-bootstrap"
import middleware from './middleware'
import {Link } from 'react-router-dom'
 class UserUpdate extends Component {
constructor(props){
  super(props)
  this.state={
    name:null,
    city:null,
    age:null,
    email:null
  }
}
componentDidMount(){
  fetch("http://localhost:3000/users/"+this.props.param.id).then((result)=>{
result.json().then((res)=>{
this.setState({name:res.name,city:res.city,age:res.age,email:res.email});
})
  })
}
update(){
  fetch("http://localhost:3000/users/"+this.props.param.id,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((result)=>{
result.json().then((res)=>{
window.location.href="/"
})
  })
}

  render() {
    // console.log(this.props.param.id);
    return (
      <>
       <div className='container'>
       <div className="create">
       <Form>
      <form name='frm'>
      <Form.Group className="mb-3" >
        
        <Form.Label>Name-:</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" 
        value={this.state.name} 
        onChange={(e)=>{this.setState({name:e.target.value})}}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>City-:</Form.Label>
        <Form.Control type="text" name="city" placeholder="Enter city"   
        value={this.state.city} 
        onChange={(e)=>{this.setState({city:e.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age-:</Form.Label>
        <Form.Control type="number" name="age" placeholder="Enter age"
         value={this.state.age}
          onChange={(e)=>{this.setState({age:e.target.value})}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email-:</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email"
         value={this.state.email} 
        onChange={(e)=>{this.setState({email:e.target.value})}}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>this.update()}  className='bg-black'>
        Update
      </Button>
      <span>  </span>
              <Link to="/"><Button variant="primary" className='btn1 bg-black' type="submit"  >
        Back
      </Button></Link> 
      </form>
    </Form>
     </div>
    </div>
      </>
    )
  }
}
export default middleware(UserUpdate);
