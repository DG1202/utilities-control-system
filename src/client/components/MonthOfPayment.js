import React, { Component } from 'react';


export default class MonthOfPayment extends Component{
    handleMonthChange = (e) => {this.props.onMonthChange(e.target.value)};
    handleYearChange = (e) => {this.props.onYearChange(e.target.value)};
    render(){
        const{month,year} = this.props;
        this.months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        this.years =[];
        for(let i = 2015;i<2126;i++){this.years.push(i + '')};
      return(
          <div>
              <span>Вибрати місяць оплати: </span><select value={month} onChange={this.handleMonthChange}>{this.months.map((month)=><option value={month} key = {month}>{month}</option>)}</select>
              <select value={year} onChange={this.handleYearChange}>{this.years.map((year)=><option value={year} key = {year}>{year}</option>)}</select>
          </div>
        )
    }
}