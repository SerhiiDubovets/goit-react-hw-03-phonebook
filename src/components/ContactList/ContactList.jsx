import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { BlockContact, List, Text } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <BlockContact>
      <List>
        {contacts.length === 0 ? (
          <Text>Contacts not found...</Text>
        ) : (
          contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            ></ContactItem>
          ))
        )}
      </List>
    </BlockContact>
  );
};

export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
