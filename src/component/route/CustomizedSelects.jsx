import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class CustomizedSelects extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    sysId: '',
    passId: '',
  };

  handleChange = event => {
    this.setState({ sysId: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ passId: event.target.value });
  };
  
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
            
        <FormControl className={classes.margin}>
            
            <DatePicker 
            selected={this.state.startDate} 
            onChange={(date) =>
              this.setState({
                startDate: date,
              })
            }
          />
          
          <DatePicker 
          selected={this.state.endDate} 
          onChange={(date) =>
            this.setState({
               endDate: date,
            })
          }
        />
  
        </FormControl>
            
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            SysId
          </InputLabel>
          <Select
            value={this.state.sysId}
            onChange={this.handleChange}
            input={<BootstrapInput name="sysId" id="age-customized-select" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>01</MenuItem>
            <MenuItem value={2}>02</MenuItem>
            <MenuItem value={3}>03</MenuItem>
          </Select>
        </FormControl>
            
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-native-simple" className={classes.bootstrapFormLabel}>
            PassId
          </InputLabel>
          <NativeSelect
            value={this.state.passId}
            onChange={this.handleChange2}
            input={<BootstrapInput name="passId" id="age-customized-native-simple" />}
          >
            <option value="" />
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </NativeSelect>
        </FormControl>
        
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="select-submit" className={classes.bootstrapFormLabel}>
            submit
            </InputLabel>
            <BootstrapInput variant="contained" color="primary" type="submit" id="select-submit">submit</BootstrapInput>
        </FormControl>
           
      </form>
    );
  }
}

CustomizedSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSelects);
