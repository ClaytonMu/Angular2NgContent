import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {
  monthHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  days = []
  weeks = [];
  monthDays: number;
  firstDate;
  lastDate;

  constructor() {
    

    let nowDate = new Date();
    this.monthDays = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0).getDate();
    this.firstDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1).getDay();
    this.lastDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0).getDay();

    for(let j = 0; j < this.firstDate; j++) {
        let emptyDay = {date: '', details: []};
        this.days.push(emptyDay);
    }
    
    for(let i = 0; i < this.monthDays; i++) {
      let day = {date: i + 1, details: [{type:'devolve', content:'這是內容' + (i+1).toString()}]};
      this.days.push(day);

      let dayIndex = new Date(nowDate.getFullYear(), nowDate.getMonth(), i + 1).getDay()
      if(this.monthHeader[dayIndex] =='Sat')
      {
        this.weeks.push(this.days);
        this.days = [];
      }

      if(i==this.monthDays - 1)
      {
        for(let j = 6; j > this.lastDate; j--) {
          let emptyDay = {date: '', details: ''};
          this.days.push(emptyDay);
        }
        this.weeks.push(this.days);
        this.days = []; 
      }
    }
  }

  ngOnInit() {
  }

}
