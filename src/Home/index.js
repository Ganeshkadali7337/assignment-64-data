import { Component } from "react";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import SideBar from "../SideBar";
import CardItem from "../CardItem";
import "./index.css";

const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/Polyglot_k5zvic.webp",
    title: "State of Markets",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY_fmi3xf.webp",
    title: "The Central Capex Surge",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1710766671/IMG_20240318_182337_rdmye5.jpg",
    title: "Direct taxes and business Cycles",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1710766670/IMG_20240318_182359_xhnw5g.jpg",
    title: "Bank Monitor",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/Polyglot_k5zvic.webp",
    title: "State of Markets",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY_fmi3xf.webp",
    title: "Bank Monitor",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1710766671/IMG_20240318_182337_rdmye5.jpg",
    title: "State of Markets",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1710766670/IMG_20240318_182359_xhnw5g.jpg",
    title: "State of Markets",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/Polyglot_k5zvic.webp",
    title: "Direct taxes and business Cycles",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712826576/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY_fmi3xf.webp",
    title: "The Central Capex Surge",
    description:
      "The market capitalisation of indian stocks crossed usd4.5 trillion in january",
  },
];
class Home extends Component {
  state = { barOpen: true, count: 4, disable: false };

  onBarOpen = () => {
    const { barOpen } = this.state;
    this.setState({ barOpen: !barOpen });
  };

  onClickViewmore = () => {
    const { count } = this.state;
    console.log(count);
    this.setState({ count: data.length, disable: true });
  };

  renderCards = () => {
    const { count } = this.state;
    let list = [];

    for (let i = 0; i < count; i++) {
      list.push(data[i]);
    }

    return (
      <ul className="list2">
        {list.map((each) => (
          <CardItem item={each} key={each.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { barOpen, disable } = this.state;
    return (
      <div>
        {barOpen && (
          <div className="side-bar">
            <SideBar onBarOpen={this.onBarOpen} />
          </div>
        )}

        <div className="content">
          <div className="greeting-container">
            <div className="collapse-container">
              <button onClick={this.onBarOpen} className="bar-open">
                <FaArrowCircleRight />
              </button>
              <div>
                <h1 className="greeting">Good Afternoon, Akshay</h1>
                <p className="para">You are subscribed to retail plan.</p>
              </div>
            </div>
            <div className="notification">
              <MdOutlineDateRange className="margin1" />
              <p className="margin1">Today, 14 February </p>
              <FiClock className="margin1" />
              <p className="margin1">16:42</p>
              <MdOutlineNotifications className="margin2" />
            </div>
          </div>
          <div className={barOpen ? `cards-container ` : `cards-container2`}>
            <ul className="library-list">
              <li className="library-card">
                <MdLibraryBooks className="library-icon one" />
                <h1 className="library-heading">My Saved Library 1</h1>
                <p>dd-mm-yyyy</p>
              </li>
              <li className="library-card">
                <MdLibraryBooks className="library-icon two" />
                <h1 className="library-heading">My Saved Library 2</h1>
                <p>dd-mm-yyyy</p>
              </li>
              <li className="library-card">
                <MdLibraryBooks className="library-icon three" />
                <h1 className="library-heading">My Saved Library 3</h1>
                <p>dd-mm-yyyy</p>
              </li>
              <li className="library-card">
                <MdLibraryBooks className="library-icon four" />
                <h1 className="library-heading">My Saved Library 4</h1>
                <p>dd-mm-yyyy</p>
              </li>
              <li className="library-card">
                <MdLibraryBooks className="library-icon five" />
                <h1 className="library-heading">My Saved Library 5</h1>
                <p>dd-mm-yyyy</p>
              </li>
            </ul>
            <div className="bottom-cards-container">
              <div className="main-card-container">
                <div className="cards2-container">{this.renderCards()}</div>
                {!disable && (
                  <button onClick={this.onClickViewmore} className="View-More">
                    View More
                  </button>
                )}
              </div>
              <div className="card3-container">
                <div className="recent-releases-container">
                  <p className="para4">Recent Releases</p>
                  <select className="select">
                    <option>India</option>
                  </select>
                </div>
                <div className="main-card3-container">
                  <GoDotFill className="dot" />
                  <div className="container4">
                    <p className="date">February 12, 2024</p>
                    <h1 className="heading3">Industrial Production</h1>
                    <p className="para5">
                      Index of industrial Production ( grew by 3.8% YoY in
                      December, os compared to e 6.7% to growth in the month
                      last year Electricity hose the slowest growth of 12% Velv
                      le Decamber an compared to 10.4% Tut growth in the same
                      month last year
                    </p>
                  </div>
                </div>
                <div className="main-card3-container">
                  <GoDotFill className="dot" />
                  <div className="container4">
                    <p className="date">February 12, 2024</p>
                    <h1 className="heading3">CPI Inflation</h1>
                    <p className="para5">
                      Index of industrial Production ( grew by 3.8% YoY in
                      December, os compared to e 6.7% to growth in the month
                      last year Electricity hose the slowest growth of 12% Velv
                      le Decamber an compared to 10.4% Tut growth in the same
                      month last year
                    </p>
                  </div>
                </div>
                <div className="main-card3-container">
                  <GoDotFill className="dot" />
                  <div className="container4">
                    <p className="date">February 12, 2024</p>
                    <h1 className="heading3">Industrial Production</h1>
                    <p className="para5">
                      Index of industrial Production ( grew by 3.8% YoY in
                      December, os compared to e 6.7% to growth in the month
                      last year Electricity hose the slowest growth of 12% Velv
                      le Decamber an compared to 10.4% Tut growth in the same
                      month last year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
