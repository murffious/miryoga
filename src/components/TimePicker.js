import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePicker1 = () => (
  <div>
    <TimePicker
      hintText="Click here to pick a time"
      minutesStep={5}
    />
  </div>
);

export default TimePicker1;