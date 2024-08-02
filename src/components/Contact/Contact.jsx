import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice/contact'; // Ensure this matches the export from your slice file
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <span>
        {contact.name}: <span>{contact.number}</span>
      </span>
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
