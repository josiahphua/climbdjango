import { date } from 'check-types';
import React, { useState } from 'react'
import Calendar from 'react-awesome-calendar';
import DatePicker from 'react-datepicker';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-07-10T18:00:00',
    to: '2021-07-11T19:00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-07-17T13:00:00+00:00',
    to: '2021-07-19T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: 'pink',
    from: '2021-07-21T13:00:00+00:00',
    to: '2021-07-25T20:00:00+00:00',
    title: 'This is also another event'
}];

let jsDate = new Date().toLocaleString() // this gives me the date and time. Not as values I need.
console.log("lets try get date",jsDate)

let jsDate2 = new Date().toISOString()
console.log('now 2nd date: ', jsDate2)

function Cal() {
    const [startDate, setStartDate] = useState(new Date());
    const [eventsAll, setEventsAll] = useState({
        
    });

    return (
        <div className="container">
            <div className="row">
                <Calendar
                    events={events}
                />
            </div>
            <div className="row">
                <form>
                    <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)} />
                </form>
            </div>
            
        </div>
    )
}


export default Cal;