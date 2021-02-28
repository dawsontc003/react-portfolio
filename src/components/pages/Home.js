import React from "react";
import "../../styles/home.css";

function Home() {
  return (
    <div
      className="article body"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80")`,
        backgroundRepeat: "repeat",
        width: "100%",
        height: "100%",
        color: "black",
      }}
    >
      <h1>About Thomas Dawson</h1>
      <img
        src="https://bootcampspot.com/broker/studentAvatar?accountId=61205"
        alt="Profile picture of Thomas Dawson"
      />
      <br></br>
      <br></br>
      <br></br>
      <p>
        Throughout my 36 years I have wore many hats in different industries.
        During this time I have grew a passion for programming technology. My
        introduction into manipulating HTML came from the first faces of social
        media. For those of us who remember "Myspace", you may recall putting a
        personal touch visually on your page required a more personal
        interaction with HTML coding. Although it was a copy and paste job for
        the most part there was the ability for you to understand how the code
        was styling certain elements such as a background or font. I spent
        countless hours destroying the look and feel of my page before getting
        it to an acceptable state for the world to see. My first interaction
        with coding that included a paycheck was doing sales for a company that
        had it's own DIY web builder. In addition they also offered professional
        design services. Often with these packages customers would settle on a
        lower design package to perserve cost. It was my ability to add on
        finishing touches to enhance the end product which helped me be
        successful in that company. This experience helped lead me to my current
        position. Although I am still in transition to becoming a developer my
        self, I currently work directly with developers of all languages as a
        Business Analyst and Product Owner. I help drive the business and
        process requirements while getting first hand details of the technical
        implementation of these features. Through this the DU Coding Boot Camp I
        inspire to be having my hands involed with software implementation
        sooner than later!
      </p>
    </div>
  );
}

export default Home;
