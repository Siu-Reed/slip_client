import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './banner';
import NewslipForm from './newslipForm';
import SlipCard from './slipCard';
import { useAuth } from '../context/AuthContext';

const slips = memo(({ slipService, username, addable }) => {
  const [slips, setslips] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    slipService
      .getslips(username)
      .then((slips) => setslips([...slips]))
      .catch(onError);

    const stopSync = slipService.onSync((slip) => onCreated(slip));
    return () => stopSync();
  }, [slipService, username, user]);

  const onCreated = (slip) => {
    setslips((slips) => [slip, ...slips]);
  };

  const onDelete = (slipId) =>
    slipService
      .deleteslip(slipId)
      .then(() =>
        setslips((slips) => slips.filter((slip) => slip.id !== slipId))
      )
      .catch((error) => setError(error.toString()));

  const onUpdate = (slipId, text) =>
    slipService
      .updateslip(slipId, text)
      .then((updated) =>
        setslips((slips) =>
          slips.map((item) => (item.id === updated.id ? updated : item))
        )
      )
      .catch((error) => error.toString());

  const onUsernameClick = (slip) => history.push(`/${slip.username}`);

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      {error && <Banner text={error} isAlert={true} transient={true} />}
      {slips.length === 0 && <p className='slips-empty'>No slips Yet</p>}
      <ul className='slips'>
        {slips.map((slip) => (
          <SlipCard
            key={slip.id}
            slip={slip}
            owner={slip.username === user.username}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onUsernameClick={onUsernameClick}
          />
        ))}
      </ul>
      {addable && (
        <NewslipForm
          slipService={slipService}
          onError={onError}
          onCreated={onCreated}
        />
      )}
    </>
  );
});
export default slips;
