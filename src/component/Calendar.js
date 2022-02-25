import { DateRangePicker } from 'react-date-range';
import { Component } from 'react';

import {withRouter} from '../withRouter';

import { ko } from 'react-date-range/dist/locale';

import { defaultStaticRanges } from 'react-date-range/dist/defaultRanges';
import { defaultInputRanges } from 'react-date-range/dist/defaultRanges';

class CalendarComponent extends Component {
    
  constructor(props) {
		super(props);
		this.state = {
			deRange: [],
			deInput: [],
		}
	}
    
  componentDidMount() {
	let temp = function(defaultStaticRanges) {	
		defaultStaticRanges[0].label = '오늘';
		defaultStaticRanges[1].label = '어제';
		defaultStaticRanges[2].label = '이번 주';
		defaultStaticRanges[3].label = '지난 주';
		defaultStaticRanges[4].label = '이번 달';
		defaultStaticRanges[5].label = '지난 달';
		return defaultStaticRanges
	}
	let temp2 = function(defaultInputRanges) {
		defaultInputRanges[0].label = '오늘까지';
		defaultInputRanges[1].label = '오늘로부터';
		return defaultInputRanges
	}
	
	 this.setState({
		deRange: temp(defaultStaticRanges),
		deInput: temp2(defaultInputRanges),
	})
	 
  }
    
  render(){
	
    return (
      <div>
        <DateRangePicker
          dateDisplayFormat="yyyy-MM-dd HH:mm:ss"
          locale={ko}
          staticRanges={this.state.deRange}
          inputRanges={this.state.deInput}
          editableDateInputs={true}
          onChange={function(ranges){
				this.props.onRangeChange(ranges);
				console.log(defaultStaticRanges[0]);
		  }.bind(this)}
          moveRangeOnFirstSelection={false}
          ranges={this.props.data}/>
        <br/>
      </div>
    )
  }
}
export default withRouter(CalendarComponent);