import { DateRangePicker } from 'react-date-range';
import { Component } from 'react';

import {withRouter} from '../withRouter';

import moment from 'moment';
import Button from '@material-ui/core/Button'

class CalendarComponent extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    };
  };
  onRangeChange = (ranges) => {
    console.log(ranges); // native Date object
    this.setState({
      startDate:ranges['selection'].startDate,
      endDate:ranges['selection'].endDate,
      key:ranges['selection'].key,
    });
  }
  
  searchByDate = () => {
	window.localStorage.removeItem("STARTDATE");
	window.localStorage.removeItem("ENDDATE");
	
	const sd = moment(this.state.startDate).format('yyyy-MM-DD HH:mm:ss');
	const ed = moment(this.state.endDate).format('yyyy-MM-DD HH:mm:ss');
	window.localStorage.setItem("STARTDATE", sd);
	window.localStorage.setItem("ENDDATE", ed);

	console.log(window.localStorage.getItem("STARTDATE"));
	console.log(window.localStorage.getItem("ENDDATE"));
  }
  
  render(){
    return (
      <div>
        <DateRangePicker
          dateDisplayFormat="yyyy-MM-dd HH:mm:ss"
          editableDateInputs={true}
          onChange={this.onRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={[this.state]}/>
        <br/>
        <div> Start Date :{moment(this.state.startDate).format('yyyy-MM-DD HH:mm:ss')}</div>
        <br/>
        <div> End Date :{moment(this.state.endDate).format('yyyy-MM-DD HH:mm:ss')}</div>
        <Button variant="contained" color="primary" onClick={this.searchByDate}> 조건 저장 </Button>
      </div>
    )
  }
}
export default withRouter(CalendarComponent);