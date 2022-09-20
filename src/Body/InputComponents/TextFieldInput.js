import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextFieldInput = ({textLabel = "Add name"}) => {

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
      />
    </Box>
  )
}

export default TextFieldInput;
