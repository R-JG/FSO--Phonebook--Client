import React, { useState } from 'react';
import EntryForm from './EntryForm';
import Entry from './Entry';

const App = () => {

    const [ phonebookData, setPhonebookData ] = useState([]);

    return (
        <div className='App' >
            <header className='header' >
                <h1 className='header--title' >Phonebook</h1>
            </header>
            <main>
                <EntryForm />
                <ul className='entry-list' >
                    {phonebookData.map(entry => <Entry />)}
                </ul>
            </main>
        </div>
    );
};

export default App;