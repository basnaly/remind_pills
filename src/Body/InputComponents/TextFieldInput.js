import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextFieldInput = ({textLabel = "Add name", value = '', setValue = ''}) => {

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 200 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        size='small'
        id="outlined-basic" 
        label={textLabel} 
        variant="outlined" 
        value={value}
        onChange={handleChange}
      />
    </Box>
  )
}

export default TextFieldInput;
