import React, { Component } from "react";
import "./OfferStyles.css";
class Offer extends Component {
  constructor() {
    super();
    this.state = {
      color: "green",
      prices: {
        offer1: 99,
        offer2: 179,
        offer3: 149,
        offer4: 99,
      },
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const selectedPrice = this.state.prices[this.state.color];
    const initialTotal = 18500;
    const discountedTotal = initialTotal - selectedPrice;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ul>
            <li className="offer-container-s">
              <label>
                <input
                  disabled
                  className="radio"
                  type="radio"
                  value="offer1"
                  checked={this.state.color === "offer1"}
                  onChange={this.onRadioChange}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="offer-head">12 Months Subscription</p>
                  <div className="offer-price">
                    <p>Total &#8377; 99</p>
                    <p>&#8377; 8 /mo</p>
                  </div>
                </div>
              </label>
            </li>
            <p className="tag">Offer Expired</p>
            <li
              className={`offer-container-s ${
                this.state.color === "offer2" ? "selected" : ""
              }`}
              style={
                this.state.color === "offer2"
                  ? { border: "2px solid #47ba68", backgroundColor: "#d7eddd" }
                  : {}
              }
            >
              <label>
                <input
                  className="radio"
                  type="radio"
                  value="offer2"
                  checked={this.state.color === "offer2"}
                  onChange={this.onRadioChange}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="offer-head">12 Months Subscription</p>
                  <div className="offer-price">
                    <p>Total &#8377; 179</p>
                    <p className="price">&#8377; 15 /mo</p>
                  </div>
                </div>
              </label>
            </li>
            <p className="tag-r">Recommended</p>
            <li
              className={`offer-container ${
                this.state.color === "offer3" ? "selected" : ""
              }`}
            >
              <label>
                <input
                  className="radio"
                  type="radio"
                  value="offer3"
                  checked={this.state.color === "offer3"}
                  onChange={this.onRadioChange}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="offer-head">6 Months Subscription</p>
                  <div className="offer-price">
                    <p>Total &#8377; 149</p>
                    <p>&#8377; 25 /mo</p>
                  </div>
                </div>
              </label>
            </li>
            <li
              className={`offer-container ${
                this.state.color === "offer4" ? "selected" : ""
              }`}
            >
              <label>
                <input
                  className="radio"
                  type="radio"
                  value="offer4"
                  checked={this.state.color === "offer4"}
                  onChange={this.onRadioChange}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="offer-head">3 Months Subscription</p>
                  <div className="offer-price">
                    <p>Total &#8377; 99</p>
                    <p>&#8377; 33 /mo</p>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </form>
        <div className="line"></div>
        <div className="sub-fee">
          <p>Subscription Fee</p>
          <p>&#8377; 18,500</p>
        </div>
        <div className="offer">
          <div
            className="offer-line"
            style={{ display: "flex", flexDirection: "row", gap: "200px" }}
          >
            <p className="desktop">Limited time offer</p>
            <p className="mobile">Offer</p>
            <p>-&#8377;{discountedTotal}</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              margin: "1px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <svg
              style={{ padding: "0 5px 0 0" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                fill="#DE4313"
              />
            </svg>
            <p style={{ padding: "0 0 5px 0", marginBottom: "10px" }}>
              Offer valid till 25th March 2023
            </p>
          </div>
        </div>
        <div className="final-price">
          <p>
            <span style={{ fontWeight: "bold" }}>Total </span>(Incl. of 18% GST)
          </p>
          <p>
            &#8377; <span style={{ fontWeight: "bold" }}>{selectedPrice}</span>
          </p>
        </div>
        <div className="buttons">
          <button className="cancel-btn">CANCEL</button>
          <button className="submit-btn">PROCEED TO PAY</button>
        </div>
      </div>
    );
  }
}
export default Offer;
