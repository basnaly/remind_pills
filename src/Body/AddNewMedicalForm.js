import React from 'react';
import AutocompleteInput from './InputComponents/AutocompleteInput';
import { FORM, FREQUENCY, INTERVAL, UNIT } from '../constants';

import TextAreaInput from './InputComponents/TextAreaInput';
import TextFieldInput from './InputComponents/TextFieldInput';


const AddNewMedicalForm = () => {

  return (

    <div className="d-flex flex-column align-items-center overflow-auto">
        <TextFieldInput textLabel={"Add name"} />

        <AutocompleteInput options={FORM} autocompleteLabel={'Form'} />

        <TextFieldInput textLabel={"Strength"} />

        <AutocompleteInput options={UNIT} autocompleteLabel={'Unit'} />

        <TextFieldInput textLabel={"Pack contains amount"} />

        <AutocompleteInput options={FREQUENCY} autocompleteLabel={'Frequency'} />

        <AutocompleteInput options={INTERVAL} autocompleteLabel={'Interval'} />

        <TextAreaInput />
      
    </div>
  )
}

export default AddNewMedicalForm;
