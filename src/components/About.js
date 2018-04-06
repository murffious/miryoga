import React, { Component } from 'react';
import Certs from './Certifications';
import bodi from '../assets/image.png';
import yoga2 from '../assets/yoga2.jpg';

class About extends Component {

    render () {
        return (
            <div style={{marginTop: "300px"}}>

<div class="card">
    <div class="card-content">
    <img src={yoga2} width="300px" style={{float:"right"}}/> 

      <p>MirYoga's Certified Teacher</p>
      The word “Bodhi” means the path by which on experiences awakening and enlightenment. 
          <p>• To teach a complete repertoire of Yoga Postures
          
          • A variety of BodhiFlow Vinyasa Power Yoga Styles & Sequencing
          
          • A variety of BodhiYin Restorative Styles & Sequencing
          
          • A variety of BodhiSpin Chakra Styles with Kundalini Style Sequencing
          
          • The twelve Systems of the Body as related to the body of Yoga
          
          • Anatomy/Emotions of Yoga Movement
          
          • Structures of Sanskrit/Yoga Chant/Ayurveda
          
          • Teaching students body awareness, and how to move through beginning through advanced yoga postures using Bodhi Yoga’s Natural Progression™ approach to Asanas
          
          • Comprehensive Hands-on-adjusting using Thai Partner Yoga Techniques
          
          • Develop Specialized Classes from Pre-Natal, Kids to a range of Therapeutic Yoga
          
          • Skills for designing individually appropriate private sessions with confidence & authenticity.
          over 75 Restorative Partner Yoga Adjustments; including a wide variety of Ayurvedic-Dosha and 10-Sense energy line  Savasana therapies</p>
          
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a href="#test4">About Jenn</a></li>
        <li class="tab"><a class="active" href="#test5">MirYoga: Reflect You</a></li>
        <li class="tab"><a href="#test6">How I came to Yoga</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
      <div id="test4">
      <h1>About Jenn</h1><p>&nbsp;</p>
							


      About me: 
      <p>I grew up in Midway, Utah, a charming little Swiss village in the mountains. I loved it!It was thrilling and challenging to ride my bike and run in the mountains.  The fresh air and sunshine fed my soul.  I have always been very interested in exercise and eating whole foods and pursued a degree in exercise. I took my first yoga class in college.  I still remember my teacher.  She was wearing an anklet that would jangle when she walked.  I thought to myself, I want to be like her and am really enjoying this and want more!  My first yoga training was with YogaFit.  That was an intro but I wanted more depth.  I found that through BodhiYoga with my wonderful mentor Syl Carson in Provo, UT.  I did the initial 200hr teacher training which covers Ayurveda, philosophy, anatomy, and how to teach pre-natal yoga, kids yoga, kundalini, flow, yin and several others.I found I enjoyed learning the hands-on adjustments, and was drawn to a second 200hr training-Restorative Partner Yoga with Syl.  Restorative partner yoga is my passion.  It is a one-on-one session that induces deep relaxation.  The receiver is put into passive yoga stretches while the giver is usually in a very similar pose.  My favorite place to do yoga is in nature.  </p>
      
      <p>I have five lovely children and six step-children and six step-grandchildren.It is fascinating to watch them learn, grow and develop into fine responsible citizens of this great country. I love living in Idaho.  I am a nature lover and gardener. I like to bake breads, pies and cakes.  I’ve even made bagels and English muffins before.  Cycling and walking are activities I enjoy as well. My mother instilled in me an awe for art, culture, and literature.  My father, to grow a business and leadership, anda great respect and love for our founding fathers, our flag, history, our country and the American Dream.  </p>
      
      
      </div>
      <div id="test5">What does Miryagp mean </div>
      <div id="test6">Why do yoga? 
      <p>I have found for me personally I feel refreshed, calm, and focused after yoga.  There are many health benefits as well such as better digestion and a healthy heart.The poorest of people can practice yoga. Yoga is portable. Anyone can do it, at the very least meditation.There are so many distractions, noise and negativity in the world.  Yoga brings us balance, peace and contentment. Yoga is all about learning to live in the moment and acceptance of self and others.  We are all on our own path and when we accept where others are on their path, there follows serenity.  I have learned to live and think abundantly in yoga.  I have and more importantly AM enough.  </p></div>
    </div>
  </div>


								

								
  <h4 class="col s12">Credentials</h4>
  <div className="row">
    <div className="col s12 m2">
      <div className="card-panel teal">
        <span className="white-text">YogaFit Teacher Training Level 1
        TRX Certified
        </span>
      </div>
    </div>
    <div className="col s12 m2">
      <div className="card-panel teal">
        <span className="white-text">200hr Bodhi Yoga Teacher Certified
        <img src={bodi} width="100px"/></span>
      </div>
    </div>
    <div className="col s12 m2">
      <div className="card-panel teal">
        <span className="white-text">200hr Restorative Partner Yoga Certification,
        </span>
      </div>
    </div>
    <div className="col s12 m2">
      <div className="card-panel teal">
        <span className="white-text">Bachelors Degree; Exercise & Sports Science 
        American College of Sports Medicine & Exercise Physiologist
        </span>
      </div>
    </div>
  </div>	 
                 
                
  
            {/* <div><Certs /></div> */}
            </div>
        )
    }
}

export default About;