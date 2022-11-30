import React, { Component } from "react";
import Item from "./Item";

export default class ItemContainer extends Component {
  render() {
    return (
      <div class="container px-lg-5">
        {/* <!-- Page Features--> */}
        <div className="row gx-lg-5">
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <Item></Item>
          </div>
        </div>
      </div>
    );
  }
}
