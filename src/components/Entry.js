import React from 'react';

const Entry = ({ name, phoneNumber }) => {
    return (
        <li className='Entry' >
            <h4 className='entry--name'>
                {name}
            </h4>
            <h4 className='entry--phone-number' >
                {phoneNumber}
            </h4>
        </li>
    );
};

export default Entry;