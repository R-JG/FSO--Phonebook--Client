import React, { useState, useEffect } from 'react';
import EntryForm from './EntryForm';
import SearchForm from './SearchForm';
import Entry from './Entry';
import phonebookServices from '../services/phonebook';

const App = () => {

    const [ phonebookData, setPhonebookData ] = useState(null);
    const [ showAll, setShowAll ] = useState(false);
    const [ searchInputData, setSearchInputData ] = useState('');
    const [ formData, setFormData ] = useState({ 
        name: '', phoneNumber: '' 
    });

    useEffect(() => {
        phonebookServices
            .getAll()
            .then(responseData => setPhonebookData(responseData));
    }, []);

    if (!phonebookData) return console.log('fetching data from server...');

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
        phonebookServices
            .createEntry(formData)
            .then(responseData => {
                setPhonebookData(phonebookData.concat(responseData));
            });
    };

    const deleteEntry = phoneNumber => {
        phonebookServices
            .deleteEntry(phoneNumber)
            .then(responsePhoneNumber => {
                setPhonebookData(phonebookData.filter(entry => 
                    entry.phoneNumber !== responsePhoneNumber
                ));
            });
    };

    const filterPhonebookData = () => {
        if (searchInputData === '') return [];
        return phonebookData.filter(entry => {
            const search = searchInputData.toLowerCase();
            const name = entry.name.toLowerCase();
            return (name.startsWith(search) 
            || entry.phoneNumber.startsWith(searchInputData))
        });
    };

    const phonebookDisplayData = ((showAll) 
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
                            deleteEntry={deleteEntry}
                        />)}
                </ul>
            </main>
        </div>
    );
};

export default App;