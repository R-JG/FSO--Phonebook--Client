import React, { useState } from 'react';
import EntryForm from './EntryForm';
import SearchForm from './SearchForm';
import Entry from './Entry';

const App = () => {

    const [ phonebookData, setPhonebookData ] = useState([]);
    const [ showAll, setShowAll ] = useState(false);
    const [ searchInputData, setSearchInputData ] = useState('');
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

    /*
    const deleteEntry = phoneNumber => {
        setPhonebookData(phonebookData.filter(entry => 
            entry.phoneNumber !== phoneNumber
        ));
    };
    */

    const filterPhonebookData = () => {
        if (searchInputData === '') return [];
        return phonebookData.filter(entry => 
            entry.name.startsWith(searchInputData) 
            || entry.phoneNumber.startsWith(searchInputData));
    };

    const phonebookDisplayData = (showAll 
        ? phonebookData 
        : filterPhonebookData()
    );

    return (
        <div className='App' >
            <header className='header' >
                <h1 className='header--title' >Phonebook</h1>
                <hr className='header--divider' />
            </header>
            <main className='main-container'>
                <EntryForm 
                    formData={formData} 
                    setFormData={setFormData} 
                    updateFormProperty={updateFormProperty} 
                    addEntry={addEntry}
                />
                <ul className='entry-list' >
                    <SearchForm 
                        showAll={showAll} 
                        setShowAll={setShowAll} 
                        searchInputData={searchInputData}
                        setSearchInputData={setSearchInputData}
                    />
                    {phonebookDisplayData.map(entry => 
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