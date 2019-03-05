import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe#gmail.com"
            phone="222-222-2222"
          />
        </div>
      </div>
    );
  }
}

export default App;
