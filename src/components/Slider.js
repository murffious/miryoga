import React, { Component } from 'react';
import Slider from 'react-slick';


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>“This was a wonderful experience.  I’ve never done anything like this. And I’ve been looking for something like this for a long time!  Jen set a beautiful intention.  My body greatly appreciated the touch, support, stretching and exercise.  This really helped me work on my breathing, which I struggle with.  I learned a lot about myself from this experience.  I walked away feeling like a better person.” 
Bethany N., Caldwell ID
</div>
          <div><img style={{width: '100px'}} src={require('../assests/1.jpg')} /></div>
          <div><img style={{width: '100px'}} src={require('../assests/1.jpg')} /></div>
        </Slider>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// var Slider = require('react-slick');

// class SimpleSlider extends Component {
//   render () {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div><h3>1</h3></div>
//         <div><h3>2</h3></div>
//         <div><h3>3</h3></div>
//         <div><h3>4</h3></div>
//         <div><h3>5</h3></div>
//         <div><h3>6</h3></div>
//       </Slider>
//     );
//   }
// }
// export default SimpleSlider;