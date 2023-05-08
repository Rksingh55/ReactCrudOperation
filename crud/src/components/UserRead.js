import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
// import UserSearch from './UserSearch'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import UserCreate from "./UserCreate";
export default class UserRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((data) => {
        // console.log(data);
        this.setState({ list: data });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((data) => {
        this.getData();
      });
    });
  }
  render() {
    return (
      <>
        {/* <UserSearch/> */}
        {/* <br /> */}
        <div className="main">

       
          <div className="container read ">
            <div class="container">
              <div class="row">

                <div class="col">
               
                  <br />
                  <Table striped bordered hover className="td">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>City</th>
                        {/* <th>Age</th> */}
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {this.state.list ? (
                      <tbody>
                        {this.state.list.map((pro) => {
                          return (
                            <tr>
                              <td>{pro.id}</td>
                              <td>{pro.name}</td>
                              <td>{pro.city}</td>
                              {/* <td>{pro.age}</td> */}
                              <td>{pro.email}</td>
                              <td>
                                <Link to={"update/" + pro.id}>
                                  <AiFillEdit className="gap text-black"></AiFillEdit>
                                </Link>
                                <Link onClick={() => this.delete(pro.id)}>
                                  <AiFillDelete className="gap text-black"></AiFillDelete>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    ) : (
                      <p>No data</p>
                    )}
                  </Table>

                  <Link to="/create">
              
                    <Button variant="primary" className="btn3 bg-black" type="submit">
                    <i class="bi bi-plus-circle-fill"></i>  Add
        
                    </Button>
                  </Link>
               
                </div>
                <div class="col">
                  <UserCreate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
