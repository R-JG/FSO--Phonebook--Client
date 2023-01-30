import React, { useState } from 'react';
import EntryForm from './EntryForm';
import Entry from './Entry';

const App = () => {

    const [ phonebookData, setPhonebookData ] = useState([]);
    const [ formData, setFormData ] = useState({ 
        name: '', phoneNumber: '' 
    });

    const updateFormProperty = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const addEntry = () => {
        if (phonebookData.some(entry => 
            (entry.phoneNumber === formData.phoneNumber))
        ) return alert('This phone number already exists in the phonebook.');
        setPhonebookData(phonebookData.concat(formData));
    };

    return (
        <div className='App' >
            <header className='header' >
                <h1 className='header--title' >Phonebook</h1>
            </header>
            <main>
                <EntryForm 
                    formData={formData} 
                    setFormData={setFormData} 
                    updateFormProperty={updateFormProperty} 
                    addEntry={addEntry}
                />
                <ul className='entry-list' >
                    {phonebookData.map(entry => 
                        <Entry 
                            key={entry.name + entry.phoneNumber} 
                            name={entry.name} 
                            phoneNumber={entry.phoneNumber}
                        />)}
                </ul>
            </main>
        </div>
    );
};

export default App;