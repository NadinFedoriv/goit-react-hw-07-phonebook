import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError, selectVisiableContacts } from 'redux/selectors';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';

import './ContactList.scss';
import { useEffect } from 'react';

export function ContactsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   const visibleContacts = useSelector(selectVisiableContacts);   
    

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        toast.error(`Something go wrong :(`)
      ) : (
        <ul className="list">
          {visibleContacts.map(({ id, name, number }) => (
            <li className="item" key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className="del-button"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
