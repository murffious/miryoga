import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import CardMain from './components/CardMain';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker1 from './components/DatePicker';
import TimePicker1 from './components/TimePicker';
import Papers from './components/Papers';
import Paper from 'material-ui/Paper';
import NotificationSchedule from './components/NotificationSchedule';
import Fade from './components/Slider';
// import JqxDateTimeInput from './jqwidgets-react/react_jqxdatetimeinput';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import About from './components/About';
import Schedule from './components/Schedule';
import Home from './components/Landing';

class App extends Component {
 
  render() {
    const style = {
      height: '40vh',
      width: '60%',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
     <div>
        <NavBar />
       <div className="container">
      
      
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/schedule" component={Schedule}/>
          
     
       
        </div>
        {/* <Fade /> */}
        {/* <div class="carousel-container">
        <Carousel slides={carouselSlidesData} /></div> */}
        
       
</div>



  
    );
  }
}

export default App;
// const { Component } = React;


// const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel
const carouselSlidesData = [
  {
    content:
    "This was a wonderful experience.  I’ve never done anything like this. And I’ve been looking for something like this for a long time!  Jen set a beautiful intention.  My body greatly appreciated the touch, support, stretching and exercise.  This really helped me work on my breathing, which I struggle with.  I learned a lot about myself from this experience.  I walked away feeling like a better person." ,
    author: "Bethany N.",
    source: "Caldwell, ID"
  }, {
    content:
    "Jennifer is very attentive to my needs and my body’s feelings.  Her hands were warm and comforting.  The stretches were good for me and I so enjoy the feeling of washing away stress.  She was always checking to make sure I was comfortable. I enjoyed her caring and sweet manner.  A very pleasant and relaxing session.",
    author: " Arlene H.",
    source: "Caldwell, ID"
  }, {
    content:
      "Flowed beautifully and I feel amazing!",
    author: "Nicole S.",
    source: "Caldwell, ID"
  }, {
    content:
      "I came into the session, not sure what to expect, and loved the experience!  I’ve done yoga in large and small groups, but this level of one-on-one was better than any class.  Anyone brand new or seasoned to yoga could do this.  Jenn explained all that would happen before-hand and gave me tips to help things flow smoothly, including explaining the name and order of sequencing.  The environment was comforting and safe.  I’d recommend it to anyone interested in the experience!  A+",
    author: "Emily H.",
    source: "Syracuse, UT"
  }, {
    content:
      "Loved it!  Jennifer made me very comfortable.  Super relaxing and a great learning experience.",
    author: "Erica H.",
    source: "Caldwell, ID"
  }, {
    content:
      "Jenn created a relaxing environment and has a soothing, calming voice.  She coached at the appropriate times and allowed silence in general.  Positions were awesome and transitions were smooth. Essential oils were a nice touch.  Jenn was born to do yoga and it was a great session! Thanks Jenn!",
    author: "Marguerite J.",
    source: "Selah, WA"
  }, {
    content:
      "Yesterday was my first time for partner yoga and it was not only professional but put me at complete ease and helped me relax. The best part is I slept well that evening because for the first time in two weeks I had absolutely no back pain!  I will definitely schedule another appointment with her.",
    author: "Joanne P.",
    source: "Wilder, ID"
  }, {
    content:
      "I have been under some intense stress over several months. The session was soothing and relaxing.  I slept well and peaceful.",
    author: "Tod H.",
    source: "Caldwell, ID"
  }, {
    content:
      "Jenn explained what was going to happen and about the marma points and energy lines.  She has an incredibly warm touch and is extra sensitive to my needs.  I felt very relaxed and almost fell asleep several times.  I appreciated her reminders to breathe and look forward to other sessions.  I think that these therapy sessions can help me with the various issues that I have, especially my knees and back.  Jenn did a great job and I will be scheduling again.",
    author: "Charlene H.",
    source: "Caldwell, ID"
  }, {
    content:
      "Jennifer delivered an excellent “giver” experience to me as a ‘receiver’.  She is professional, gentle, caring observant and diligent in her practice.  Jen frequently made sure I was comfortable every step of the way.  At the finish, she invited me to rest and relax as long as I needed.  She is definitely an asset to the wonderful world of yoga.",
    author: "Celia M.",
    source: "Orem, UT"
  }, {
    content:
      "Considering this was a first time, I wasn’t exactly sure what to expect.  Experiencing partner yoga was gradual and relaxing, thereby creating a symbiosis of the body and relaxation.   There’s very little “real world” experiences that can match up to these sessions.  Would definitely recommend to other people.",
    author: "Abbie H.",
    source: "Garden City, ID"
  }
];

// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">{this.props.slide.content}</p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p>
      </li>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);