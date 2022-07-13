import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { Item, NameItem, NumberItem, ButtonItem } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      <NameItem>{name}</NameItem>
      <NumberItem>{number}</NumberItem>
      <ButtonItem type="button" onClick={onDeleteContact}>
        <DeleteIcon
          width="20px"
          height="20px"
          // fill="red"
          area-aria-label="delete contact"
        />
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
