import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
}));

const AmountField = (props) => {
  const classes = useStyles();
  const { amount, onAmountChange } = props
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '10vh' }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Amount</InputLabel>
        <Select
          name='amount'
          label='Amount'
          id="simple-select"
          value={amount}
          onChange={onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

AmountField.propTypes = {
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};

export default AmountField;
