import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyled';
import { PhonebookTitle, Phonebook, ContactTitle } from './Phonebook.styled';
import InputForm from './InputForm';
import ContactList from './ContactList';
import SearchFilter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    this.state.contacts.some(e => e.name === contact.name)
      ? alert(`${name}, is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  getVisibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getVisibleFilter();

    return (
      <Phonebook>
        <GlobalStyle />
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <InputForm onSubmit={this.addContact} />
        <ContactTitle>Contacts</ContactTitle>
        <SearchFilter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleFilter}
          onDeleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
