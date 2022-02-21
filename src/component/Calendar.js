import { DateRangePicker } from 'react-date-range';
import { Component } from 'react';

import {withRouter} from '../withRouter';

class CalendarComponent extends Component {
  
  
  render(){
    return (
      <div>
        <DateRangePicker
          dateDisplayFormat="yyyy-MM-dd HH:mm:ss"
          editableDateInputs={true}
          onChange={function(ranges){
				this.props.onRangeChange(ranges);
		  }.bind(this)}
          moveRangeOnFirstSelection={false}
          ranges={this.props.data}/>
        <br/>
      </div>
    )
  }
}
export default withRouter(CalendarComponent);