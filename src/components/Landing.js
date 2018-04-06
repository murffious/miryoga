import React, { Component } from 'react';
import {Button, Icon, Row, Col, CardPanel} from 'react-materialize';

import yoga1 from '../assets/Jenn1.jpg';
import panel1 from '../assets/rockwall.jpeg';
import panel2 from '../assets/ocean_rock.jpeg';
import Fade from './Slider';
class Home extends Component {

    render () {
        return (
            <div>
               <Row>
                  <Col s={12} m={12}>
                      <CardPanel className="teal lighten-4 black-text">
                          <span>Welcome to MirYoga: Reflect Your Light Within</span> <Button waves='light'>Schedule<Icon left>schedule</Icon></Button> <span>Call or Text 208-284-6331</span> <span>Email jennsmiryoga@gmail.com</span> 
                      </CardPanel>
                    
                  </Col>
                  
              </Row>

              <img src={yoga1} width="300px" /> 
              <Row>
                  <Col s={12} m={12}>
                      <CardPanel className="teal lighten-4 black-text">
                          <span>Pursuing a quiet yoga revolution,  based in healing,  Jenn offers exclusive Resotrative Yoga to Caldwawell Boise area. and beyond.   </span> <span>"Gentle is the New Advanced"</span> 
                      </CardPanel>
                    
                  </Col>
                  
              </Row>
              <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            {/* <div className="col s2">
              <img src={yoga1} alt="" className="responsive-img"/>
            </div> */}
            <div className="col s10">
              <h1 >
                What people are saying about Restorative Partner Yoga with Jenn
              </h1>
               {/* Possible slider <Fade />  */}
              <div className="carousel-container">
              <Carousel slides={carouselSlidesData} />
            </div> 
            <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Learn More</a>

            </div>
          </div>
        </div>
      </div>
              
           
               
           
{/* trash  */}

{/* 
    <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={yoga1} alt="" className="responsive-img"/>
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="panel panel-default">
  <div className="panel-heading">What is Restorative Partner Yoga?</div>
  <div className="panel-body">
  <img src={panel1} width="300px" /> 
  Call to action phrases like :

do you want to feel...?ahave you felt like ...? 
do you want ot chagne or feel more happy?  What will Miroga do fo them or whatever. 


Yoga has been accepted and is practiced worldwide now.What cannot be denied is that there has also been a change in the way that yoga is perceived worldwide. While some may think of yoga with suspicion as a 'Hindu ritual performed by sages', this is not true of the majority. Yoga is seen as a way to achieve nirvana amidst the pressures of a capitalist life. "The rigours of the typical sedentary white collar job, staring at computer and phone screens, transiting between airports and hotel rooms, have given birth to a ‘wellness’ industry that attempts to save modern man from the pitfalls modern life. And yoga takes centre stage in the plethora of wellness solutions that help rejuvenate, resuscitate and reflect on the present, even as attention spans attenuate," wrote Vivan Sharan for Global Policy Journal.
Much time and effort was spent trying to define yoga's potential. "Yoga serves as a reminder of the potential for men and women to live in harmony with each other, as well as with nature, at a time when violent forces are threatening to destabilise society. Yoga is an important antidote to such negativity — to move us on the path of peace," said Sushma Swaraj.
  </div>
</div> */}

<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">What is Restorative Partner Yoga?</h3>
  </div>
  <div className="col s12 m8 offset-m2 l6 offset-l3">
  <div className="panel-body">
    <div className="row valign-wrapper">
      <div className="col s2">
        <img src={panel1} alt="" className="responsive-img"/>
      </div>
      <div className="col s10">
        <span className="black-text">
   
<h3>Ever wanted to do yoga without sweating?</h3>
do you want to feel...?ahave you felt like ...? 
do you want ot chagne or feel more happy?  What will Miroga do fo them or whatever. 


Yoga has been accepted and is practiced worldwide now.What cannot be denied is that there has also been a change in the way that yoga is perceived worldwide. While some may think of yoga with suspicion as a 'Hindu ritual performed by sages', this is not true of the majority. Yoga is seen as a way to achieve nirvana amidst the pressures of a capitalist life. "The rigours of the typical sedentary white collar job, staring at computer and phone screens, transiting between airports and hotel rooms, have given birth to a ‘wellness’ industry that attempts to save modern man from the pitfalls modern life. And yoga takes centre stage in the plethora of wellness solutions that help rejuvenate, resuscitate and reflect on the present, even as attention spans attenuate," wrote Vivan Sharan for Global Policy Journal.
Much time and effort was spent trying to define yoga's potential. "Yoga serves as a reminder of the potential for men and women to live in harmony with each other, as well as with nature, at a time when violent forces are threatening to destabilise society. Yoga is an important antidote to such negativity — to move us on the path of peace," said Sushma Swaraj.
        </span>
      </div>
    </div>
  </div>
</div>
</div>

<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">What is Yoga?</h3>
  </div>
  <div className="col s12 m8 offset-m2 l6 offset-l3">
  <div className="panel-body">
    <div className="row valign-wrapper">
      <div className="col s2">
        <img src={panel2} alt="" className="responsive-img"/>
      </div>
      <div className="col s10">
        <span className="black-text">
        April 23, 2015
*ByDr.IshwarV.Basavaraddi 

Introduction :Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and science of healthy living. The word ‘Yoga’ is derived from the Sanskrit root ‘Yuj’, meaning ‘to join’ or ‘to yoke’ or ‘to unite’. As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature. According to modern scientists, everything in the universe is just a manifestation of the same quantum firmament. One who experiences this oneness of existence is said to be in yoga, and is termed as a yogi, having attained to a state of freedom referred to as mukti, nirvana or moksha. Thus the aim of Yoga is Self-realization, to overcome all kinds of sufferings leading to 'the state of liberation' (Moksha) or ‘freedom’ (Kaivalya). Living with freedom in all walks of life, health and harmony shall be the main objectives of Yoga practice. “Yoga” also refers to an inner science comprising of a variety of methods through which human beings can realize this union and achieve mastery over their destiny. Yoga, being widely considered as an ‘immortal cultural outcome’ of Indus Saraswati Valley civilization – dating back to 2700 B.C., has proved itself catering to both material and spiritual upliftment of humanity. Basic humane values are the very identity of Yoga Sadhana.
        </span>
      </div>
    </div>
  </div>
</div>
</div>

{/* <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">What is Yoga?</h3>
  </div>
  <div className="panel-body">
  <img src={panel2} width="300px" /> 
April 23, 2015
*ByDr.IshwarV.Basavaraddi 

Introduction :Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and science of healthy living. The word ‘Yoga’ is derived from the Sanskrit root ‘Yuj’, meaning ‘to join’ or ‘to yoke’ or ‘to unite’. As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature. According to modern scientists, everything in the universe is just a manifestation of the same quantum firmament. One who experiences this oneness of existence is said to be in yoga, and is termed as a yogi, having attained to a state of freedom referred to as mukti, nirvana or moksha. Thus the aim of Yoga is Self-realization, to overcome all kinds of sufferings leading to 'the state of liberation' (Moksha) or ‘freedom’ (Kaivalya). Living with freedom in all walks of life, health and harmony shall be the main objectives of Yoga practice. “Yoga” also refers to an inner science comprising of a variety of methods through which human beings can realize this union and achieve mastery over their destiny. Yoga, being widely considered as an ‘immortal cultural outcome’ of Indus Saraswati Valley civilization – dating back to 2700 B.C., has proved itself catering to both material and spiritual upliftment of humanity. Basic humane values are the very identity of Yoga Sadhana.
  </div>
</div> */}

                  </div>
        )
    }
}
export default Home;


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