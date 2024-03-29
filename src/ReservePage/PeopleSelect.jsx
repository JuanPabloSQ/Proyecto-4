import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const currencies = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const PeopleSelect = ({ value, onChange, error, helperText }) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id='people'> Numero de Personas</InputLabel>
      <Select
        labelId='people'
        label='Numero de personas'
        value={value || ''}
        onChange={onChange}
        sx={{ color: 'white' }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PeopleSelect;
