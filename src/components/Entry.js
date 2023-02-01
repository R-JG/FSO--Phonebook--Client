import React from 'react';

const Entry = ({ 
    name, 
    phoneNumber, 
    deleteEntry,
 }) => {

    const handleDeleteButton = () => deleteEntry(phoneNumber);

    return (
        <li className='Entry' >
            <div className='entry--container' >
                <div className='entry--info' >
                    <h4 className='entry--name'>
                        {name}
                    </h4>
                    <h4 className='entry--phone-number' >
                        {phoneNumber}
                    </h4>
                </div>
                <button 
                    className='button--delete'
                    onClick={handleDeleteButton} >
                    Delete
                </button>
            </div>
            <hr className='entry--divider' />
        </li>
    );
};

export default Entry;