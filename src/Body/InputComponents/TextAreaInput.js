import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const TextAreaInput = () => {

  return (

    <TextareaAutosize
      className='mt-2'
      aria-label="minimum height"
      minRows={3}
      placeholder="Notes"
      style={{ width: 200 }}
    />
  )
}

export default TextAreaInput;
