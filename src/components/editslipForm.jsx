import React, { useState } from 'react';

const EditslipForm = ({ slip, onUpdate, onClose }) => {
  const [text, setText] = useState(slip.text);

  const onSubmit = async (event) => {
    event.preventDefault();
    onUpdate(slip.id, text);
    onClose();
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className='edit-slip-form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your slip'
        value={text}
        required
        autoFocus
        onChange={onChange}
        className='form-input slip-input'
      />
      <div className='edit-slip-form-action'>
        <button type='submit' className='form-btn-update'>
          Update
        </button>
        <button type='button' className='form-btn-cancel' onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditslipForm;
