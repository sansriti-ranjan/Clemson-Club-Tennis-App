import React, { Component } from 'react';

export default class Calendar extends Component {
    //construct the calendar component here as per your requirements
    constructor(){
        super();

        this.weekdays = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date()
        }
    }

  render() {
        return (
          <div className="calendar">
            <div className="calendar-header">
              <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}
              </h2>
            </div>
            <div className="calendar-body">
              <div className="table-header">
                {
                  this.weekdays.map((weekday) => {
                    return <div className="weekday"><p>{weekday}</p></div>
                  })
                }
              </div>
              <div className="table">
              </div>
            </div>
          </div>
        )
  }
}