import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */
const DatePicker1 = () => (
  <div >
    <h1>Schedule a session with MirYoga</h1>
    <DatePicker hintText="Pick a date here" mode="landscape" />
  
  </div>
);

export default DatePicker1;