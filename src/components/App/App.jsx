import { useState, useEffect } from 'react';
import initialContacts from '@/contacts.json';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import style from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem('saved-contacts');

    return saveContacts ? JSON.parse(saveContacts) : initialContacts;

    // После перзагрузки возвращаются initialContacts
    // if (saveContacts) {
    //   const parsedContacts = JSON.parse(saveContacts);
    //   return parsedContacts.length > 0 ? parsedContacts : initialContacts;
    // }
    // return initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const addContact = newContact => {
    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={style.app}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
