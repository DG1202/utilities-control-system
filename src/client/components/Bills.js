import React, { Component } from 'react';
import OneBill from './OneBill';
import MonthOfPayment from './MonthOfPayment'

export default class Bills extends Component {
    constructor(props){
        super(props);
        this.state = {year: '2020', month: 'Квітень',prev: '',curr: '', cost: '', sum: ''};
    }
    handleMonthChange = (month) => {this.setState({month:month})};
    handleYearChange = (year) => {this.setState({year:year})};
    handlePriviuseValue = (e) => {this.setState({prev: +e.target.value}, this.handleSumCost)};
    handleCurrentValue = (e) => {this.setState({curr: +e.target.value}, this.handleSumCost)};
    handleCostEach = (e) => {this.setState({cost: +e.target.value}, this.handleSumCost)};
    handlePaid = (e) => {this.setState({paid: e.target.checked})};
    handleSumCost = () => {if (!this.state.curr || !this.state.cost) return;
        this.setState((prevState)=>( {sum: (prevState.curr - prevState.prev)* prevState.cost}))};
    render(){
        return(
            <React.Fragment>
                 <MonthOfPayment year = {this.state.year}
                                 month = {this.state.month}
                                 onYearChange = {this.handleYearChange}
                                 onMonthChange ={this.handleMonthChange}/>
                 <div className = 'd-flex flex-row bd-highlight justify-content-md-between align-content-start flex-wrap'>
                              {this.props.bills.map((bill)=>
                               <OneBill many
                                        bill = {bill}
                                        key = {bill.categoryName}
                               />)
                              }
                 </div>
                 <input type = 'button' className = ' btn-primary ' value= 'Додати' />
            </React.Fragment>
        )
    }
}