import React from 'react';

const SearchForm = ({
    showAll,
    setShowAll,
    searchInputData,
    setSearchInputData,
}) => {

    const handleSearchInput = event => {
        setSearchInputData(event.target.value);
    };

    return (
        <div className='SearchForm' >
            <button 
                className={
                    `button--show-all 
                    ${showAll ? 'button--show-all--active' : ''}`}
                onClick={() => setShowAll(!showAll)} >
                Show All
            </button>
            {!showAll && <input 
                className='input--search'
                type='text'
                value={searchInputData}
                onChange={handleSearchInput} 
            />}
        </div>
    );
};

export default SearchForm;