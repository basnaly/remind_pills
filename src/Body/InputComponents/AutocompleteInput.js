import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteInput = ({options, autocompleteLabel}) => {

  return (

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size='small'
      options={options}
      sx={{ width: 200, m: 1 }}
      renderInput={(params) => 

        <TextField {...params} 
            label={autocompleteLabel} 
        />}
    />
  )
}

export default AutocompleteInput
