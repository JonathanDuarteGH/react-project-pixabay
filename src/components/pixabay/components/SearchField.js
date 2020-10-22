import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const SearchField = (props) => {
  const { searchText, onTextChange } = props;
  return (
    <TextField
      name='searchText'
      id='standard-basic'
      label='Search...'
      variant='standard'
      value={searchText}
      onChange={onTextChange}
      fullWidth={true}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    >
    </TextField>
  );
};

SearchField.propTypes = {
  searchText: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default SearchField;
