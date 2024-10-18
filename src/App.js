import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/htmls/Header";
import Footer from "./components/htmls/Footer";
import Abount from "./components/contents/Abount";
import Home from "./components/contents/Home";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abount" element={<Abount />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
