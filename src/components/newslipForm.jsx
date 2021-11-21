import React, { useState } from 'react';

const NewslipForm = ({ slipService, onError, onCreated }) => {
  const [slip, setslip] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    slipService
      .postslip(slip)
      .then((created) => {
        setslip('');
      })
      .catch(onError);
  };

  const onChange = (event) => {
    setslip(event.target.value);
  };

  return (
    <form className='slip-form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='사라질 생각들을 던져보세요.'
        value={slip}
        required
        autoFocus
        onChange={onChange}
        className='form-input slip-input'
      />
      <button type='submit' className='form-btn'>
        Post
      </button>
    </form>
  );
};

export default NewslipForm;
