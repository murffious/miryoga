import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker1 from './DatePicker';
import TimePicker1 from './TimePicker';
import Papers from './Papers';
import Paper from 'material-ui/Paper';
import NotificationSchedule from './NotificationSchedule';

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
            <div>
                Current Schedule:
                Jenns classes are held at Easton Yoga and Yukato Yoga in the Lehigh Valley. For special events & traveling workshops, see details below.

                One on One times 
                1-3pm or 2-4pm for times M-F. Mornings, Evenings and saturdays available upon request.   We are going to the cultural celebration for the meridian Temple at noon until 3pm. So after that I will call.  .  I couldn't really tell much with the color. Oh and change it to MirYoga instead of Mirayoga in the scheduling box.  
THe fonts I like are: 'Love ya like a sister' 'Just me again down here' and 'sunshiney.'
               <p>Group times  Locations </p> 
                 <MuiThemeProvider> 
                    <Paper style={style} zDepth={3} >
                        <DatePicker1 />
                        <TimePicker1 />
                        <NotificationSchedule />
                    </ Paper>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Schedule;
