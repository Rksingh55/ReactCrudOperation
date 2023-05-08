import React, { Component } from "react";
import { Form,  } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      city: null,
      age: null,
      email: null,
    };
  }

  submit = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((data) => {
        // console.log(data);
        window.location.href = "/";
      });
    });
  };
  render() {
    return (
      <>
        <div className="container  ">
          <div className="create">
            <Form>
              <form name="frm">
                <Form.Group className="mb-3  ">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter Your city"
                    onChange={(e) => {
                      this.setState({ city: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="Enter Your age"
                    onChange={(e) => {
                      this.setState({ age: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </Form.Group>

                {/* <Button
                  variant="primary"
                  type="submit"
                  className="btn"
                  onClick={this.submit}
                >
                  Submit
                </Button> */}

                <div className="d-grid gap-2 ">
                  <button
                    class="btn btn-primary bg-black " 
                    type="button"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </div>
{/* 
                <span> </span>
                <Link to="/">
                  <Button variant="primary" className="btn1" type="submit">
                    Back
                  </Button>
                </Link> */}
              </form>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
