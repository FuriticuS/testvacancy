import React, {Component} from 'react';
import {block} from 'bem-cn';
import Popup from "../Popup/Popup";

import './tax.scss';

const cn = block('tax');


class Tax extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }

    togglePopupHandler = () => {
        this.setState({
            popup: !this.state.popup
        })
    }

    togglePopupCLose = () => {
        this.setState({
            popup: false
        })
    }

    render() {
        return (
            <div className={cn()}>
                <button className='btn' onClick={this.togglePopupHandler}>Налоговый вычет</button>

                {
                    this.state.popup && <Popup isOpen={this.togglePopupCLose} />
                }

            </div>
        );
    }

};

export default Tax;
