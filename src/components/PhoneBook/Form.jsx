import css from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContacts} from 'components/redux/thunk';

export function Form() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const data = {};

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    data.name = form.elements.name.value;
    data.phone = form.elements.phone.value;
    const repeatContact = contacts.filter(el => el.name === data.name);
    repeatContact.length > 0
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContacts(data));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form__label}>
        Phone
        <input
          className={css.form__input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.form__btn}>
        Add contact
      </button>
    </form>
  );
}
