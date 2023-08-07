import css from './PhoneBook.module.css';
import { ContactsItem } from './ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import { useEffect } from 'react';
import { fetchTContacts} from 'components/redux/thunk';

const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

export const ContactsList = () => {
  const { contacts, isLoading, error } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTContacts())
  }, [dispatch]);

  const visibleContacts = getVisibleContacts(contacts, filter);
  
  return (
    <>
      {isLoading && !error && <h2>Loading...</h2>}
      <ul className={css.contacts__list}>
        {visibleContacts?.map(({ id, name, phone }) => (
          <ContactsItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
      {error && <h2>{error}</h2>}
    </>
  );
};
