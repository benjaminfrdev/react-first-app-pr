/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";

const courses = [
  {
    name: "Javascript",
  },
  {
    name: "Reactjs",
  },
  {
    name: "Angular",
  },
];
class Content extends Component {
  render() {
    const listCourses = [];
    for (let i = 0; i < courses.length; i++) {
      listCourses.push(<li key={i}>{courses[i].name}</li>);
    }
    return <ul>{listCourses}</ul>;
  }
}

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Header name="Anna" color="purple" />;
      <Content />;
    </div>
  );
}

export default App;
