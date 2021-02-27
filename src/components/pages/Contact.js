import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
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
    </div>
  );
}

export default Contact;
