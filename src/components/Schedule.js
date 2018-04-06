import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker1 from './DatePicker';
import TimePicker1 from './TimePicker';
import Papers from './Papers';
import Paper from 'material-ui/Paper';
import NotificationSchedule from './NotificationSchedule';
import {Button, Icon, Row, Col, CardPanel, Input} from 'react-materialize';
import yoga4 from '../assets/ruslan-zh.jpg';
// 'Love ya like a sister' 'Just me again down here' and 'sunshiney.'
class Schedule extends Component {

    render () {
        const style = {
            height: '40vh',
            width: '60%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
        return (
            <div style={{marginTop: "300px"}}>
                <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s2">
                            <img src={yoga4} alt="" class="circle responsive-img"/> 
                            </div>
                            <div class="col s10">
                            <span class="black-text">
                            Current Schedule:
                Jenns classes come to you and she has a Yoga Studio in Caldwell, Idaho. For special events & traveling workshops, see details below.

                <p>One on One times</p> 
                1-3pm or 2-4pm for times M-F. Mornings, Evenings and Saturdays available upon request.

                Cost : $75 per 90 min.
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">One on One Session</span>
                            <p>1-3pm or 2-4pm for times M-F. Mornings, Evenings and Saturdays available upon request.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                        </div>
                        <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">For special events & traveling workshops, see details below.</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                        </div>
                    </div>
              
                 <MuiThemeProvider> 
                    <Paper style={style} zDepth={3} >
                        <DatePicker1 />
                        <TimePicker1 />
                        <Row>
                        <Input s={6} label="Name" validate><Icon>account_circle</Icon></Input>
                        <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                      </Row>
                      <Row>
                        <Input s={6} label="Email" validate><Icon>email</Icon></Input>
                        <Input name='group1' type='checkbox' value='red' label='Terms and Conditions' />
                      </Row>
        <br/>
                        <NotificationSchedule />
                    </ Paper>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Schedule;
