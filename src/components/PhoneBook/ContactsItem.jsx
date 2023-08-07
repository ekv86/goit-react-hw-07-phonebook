import { useDispatch } from 'react-redux';
import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { deleteContacts} from 'components/redux/thunk';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContacts(id));
  return (
    <li className={css.contacts__item}>
      <span className={css.contacts__text}>{name}:</span>
      <span className={css.contacts__text}>{phone}</span>
      <button className={css.form__btn} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
