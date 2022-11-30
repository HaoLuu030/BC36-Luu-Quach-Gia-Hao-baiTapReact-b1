import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import ItemContainer from "./ItemContainer";

export default class extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Banner></Banner>
        <ItemContainer></ItemContainer>
        <Footer></Footer>
      </>
    );
  }
}
