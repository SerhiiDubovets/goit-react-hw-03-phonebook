import PropTypes from 'prop-types';
import { Item, NameItem, NumberItem, ButtonItem } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      <NameItem>{name}</NameItem>
      <NumberItem>{number}</NumberItem>
      <ButtonItem type="button" onClick={onDeleteContact}>
        Delete
      </ButtonItem>
    </Item>
  );
};

export default ContactItem;

ContactItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func,
};
