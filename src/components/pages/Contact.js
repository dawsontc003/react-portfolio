import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import "../../styles/contact.css";

function Contact(props) {
  return (
    <div
      class="body"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80")`,
        backgroundRepeat: "repeat",
        width: "100%",
        height: "100%",
        color: "black",
      }}
    >
      <h1>Contact Page</h1>
      <form class="section">
        <label for="exampleFormControlInput1">Name</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
        />

        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />

        <label for="exampleFormControlTextarea1">How can I help you?</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>

        <button type="button" class="btn btn-light">
          Submit
        </button>
      </form>
      <br></br>
      <Link
        to={`${props.match.url}/learn`}
        role="button"
        className="btn btn-link"
      >
        Show Projects
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Hide Projects
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      <br></br>
      <br></br>
      <br></br>
      <a href="https://github.com/dawsontc003" target="_blank">
        <img
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/github-icon.gif"
          class="card-img-to"
          alt="..."
          width="100"
          height="100"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/dawsontc/" target="_blank">
        <img
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/linkedin%20icon.jpg"
          class="card-img-to"
          alt="..."
          width="100"
          height="100"
        ></img>
      </a>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contact;
