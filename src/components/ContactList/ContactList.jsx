import { deleteContact } from 'redux/contactsSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../ContactList/ContactList.module.scss';

function ContactList() {
  const distpatch = useDispatch();

  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.list) ?? filter;

  const filteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <ListGroup>
      {filteredContacts().map(contact => (
        <ListGroup.Item key={contact.id} className={s.item}>
          <div>
            {contact.name}: {contact.number}
          </div>
          <Button
            variant="primary"
            type="button"
            onClick={() => distpatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
