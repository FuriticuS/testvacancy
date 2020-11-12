import React, {Component} from 'react';
import {block} from 'bem-cn';
import Early from "../ Early/Early";

import './popup.scss';

const cn = block('popup');

class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valueOld: '',
            changed: false,
            pay: '',
            week:'',
            remainder:'',
            deduction: 260000,
            lastpay:'',
            click: false,
            length: 0
        }
    }

    inputChange = (e) => {
        let newState = this.state;
        newState.value = e.target.value;
        newState.changed = e.target.value !== newState.valueOld;
        newState.length = e.target.value.length;
        this.setState(newState);
    }

    payment = () => {
        this.setState({
            pay: Math.round((this.state.value*12)*0.13),
            week: this.state.week+1,
            click: true,
            remainder: this.state.deduction%this.state.pay,
            lastpay: this.state.deduction-(this.state.remainder*this.state.pay),
            value: ''
        })
    }

    render() {
        return (
            <div className={cn()} >

                <div className={cn('back')} onClick={this.props.isOpen}> </div>

                <div className={cn('text')}>

                    <i className="fal fa-times close" onClick={this.props.isOpen}> </i>

                    <h1>Налоговый вычет</h1>

                    <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>

                    <div className={cn('payment')}>
                        <h3>Ваша зарплата в месяц</h3>
                        <input
                            type="number"
                            placeholder='Введите данные'
                            onChange={this.inputChange}
                            value={this.state.value}
                        />
                        <button onClick={this.payment} disabled={!this.state.changed}>Рассчитать</button>
                    </div>

                    {
                        this.state.click &&
                        <Early
                            value={this.state.pay}
                            week={this.state.week}
                            pay={this.state.pay}
                            lastpay={this.state.lastpay}
                        />
                    }

                    <div className={cn('choice')}>
                        <h3>Что уменьшаем?</h3>

                        <div className="choice-click">
                            <button className='btn'>Платёж</button>
                            <button>Срок</button>
                        </div>

                    </div>

                    <button className='btn'>Добавить</button>

                </div>

            </div>
        );
    }

};

export default Popup;
