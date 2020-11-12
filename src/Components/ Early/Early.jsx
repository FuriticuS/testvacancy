import React from 'react';
import {block} from 'bem-cn';

import './early.scss';

const cn = block('early');

const Early = ({value, week, pay, lastpay}) => {

    console.log(value, week, pay, lastpay);

    return (
        <div className={cn()}>
            <h3>Итого можете внести в качестве досрочных:</h3>

            <div className={cn('year')}>
                <input type="checkbox" id="early"/>
                <label htmlFor="early">{value} рублей в</label>
            </div>

        </div>
    );
};

export default Early;
