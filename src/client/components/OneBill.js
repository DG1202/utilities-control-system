import React, { Component } from 'react';
import MonthOfPayment from './MonthOfPayment'

export default class OneBill extends Component {
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

    sendData = () => {fetch(`insert?data=${JSON.stringify({[this.props.bill.categoryName]: this.state})}`, {method: "POST"})};


    render() {
        const {bill,many} = this.props;

        return(
            <div className = 'my-2'>
                {many ? '' : <MonthOfPayment year = {this.state.year}
                                             month = {this.state.month}
                                             onYearChange = {this.handleYearChange}
                                             onMonthChange ={this.handleMonthChange}/>}
            <div className="border border-secondary my-2 p-4">
              <h1>{bill.title}</h1>
              <table className= 'card-text'>
              <tbody>
                {bill.categoryName !== 'removalOfGarbage' &&
                bill.categoryName !== 'rent' ?
                    (
                        <tr className = 'valueInput'>
                            <td>Попередній показник:</td>
                            <td><input type='number'
                                       value = {this.prev}
                                       onChange = {this.handlePriviuseValue}
                                       className = 'all-inputs'/>
                            </td>
                        </tr> ) : null }
                <tr className = 'valueInput'>
                    <td>Поточний показник:</td>
                    <td><input type='number'
                               value = {this.curr}
                               onChange = {this.handleCurrentValue}
                               className = 'all-inputs' />
                    </td>
                </tr>

                <tr className = 'costInput'>
                    <td>Тариф:</td>
                    <td><input type='number'
                               value = {this.cost}
                               onChange = {this.handleCostEach}
                               className = 'all-inputs' />
                    </td>
                </tr>
                <tr className = 'costInput'>
                    <td>Сума:</td>
                    <td>{this.state.sum}</td>
                </tr>
                <tr>
                    <td>Оплачено</td>
                    <td><input type='checkBox'
                               checked = {this.paid}
                               onChange={this.handlePaid}
                               className = 'all-inputs' />
                    </td>
                </tr>
                </tbody>
            </table>
          </div>
                {many ? '' : <input type = 'button' className = ' btn-primary ' value= 'Додати' onClick ={this.sendData}/>}
        </div>
        );
    }
}