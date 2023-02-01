import React from 'react';

const EntryForm = ({ 
    formData, 
    setFormData,
    updateFormProperty,
    addEntry, 
}) => {

    const handleNameInput = event => {
        updateFormProperty('name', event.target.value)
    };

    const processTelString = string => {
        return string.slice(0, -1) + '-' + string.slice(string.length - 1);
    };

    // Process the input value in order to place hyphens 
    // to separate the characters into groups of three, three, and four.
    const handleTelInput = event => {
        let value = event.target.value;
        if (value.length === 13) return;
        if ((value.length === 4) 
        && (value.charAt(value.length - 1) !== '-')) {
            value = processTelString(value);
        };
        if ((value.length === 8) 
        && (value.charAt(value.length - 1) !== '-')) {
            value = processTelString(value);
        };
        updateFormProperty('phoneNumber', value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formData.name === '' || formData.phoneNumber === '') return;
        addEntry();
        setFormData({ 
            name: '', phoneNumber: '' 
        });
    };

    return (
        <form 
            className='EntryForm'
            onSubmit={handleFormSubmit} >
            <input 
                className='input--name'
                type='text'
                value={formData.name}
                onChange={handleNameInput}
            />
            <input 
                className='input--phone-number'
                type='tel' 
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                placeholder='000-000-0000'
                value={formData.phoneNumber}
                onChange={handleTelInput}
            />
            <button className='button--submit' >
                Add to phonebook
            </button>
        </form>
    );
};

export default EntryForm;