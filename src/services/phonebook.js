import axios from 'axios';

const baseUrl = '/api/phonebook';

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(response => response.data);
};

const createEntry = newEntryObj => {
    const response = axios.post(baseUrl, newEntryObj);
    return response.then(response => response.data);
};

const deleteEntry = phoneNumber => {
    const response = axios.delete(`${baseUrl}/${phoneNumber}`);
    return response.then(response => response.data);
};

const phonebookServices = {
    getAll,
    createEntry,
    deleteEntry,
};

export default phonebookServices;