import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DayView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { formateDate } from '../../shared/utils';

const styles = {
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

const ToolbarWithLoading = withStyles(styles, { name: 'Toolbar' })(
  ({ children, classes, ...restProps }) => (
    <div className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>
        {children}
      </Toolbar.Root>
      <LinearProgress className={classes.progress} />
    </div>
  ),
);

const activeData = appointment => ({
  startDate: formateDate(appointment.start_time),
  endDate: formateDate(appointment.end_time),
  title: "Active"
});

export default class CalenderSchedular extends React.PureComponent {
  
  state = {
    loading: true,
    currentDate: '2020-01-01',
    currentViewName: 'Day'
  };

  componentDidMount() {
    if(this.props.member) {
      setTimeout(() => 
        this.setState({ data: this.props.member.activity_periods, loading: false, currentDate: formateDate(this.props.member.activity_periods[0].start_time) }), 1000
      )
    }
  }

  currentViewNameChange = (currentViewName) => this.setState({ currentViewName });

  currentDateChange = (currentDate) =>  this.setState({ currentDate });

  render() {
    const {
      data, loading,
      currentDate, currentViewName,
    } = this.state;

    const formattedData = data
      ? data.map(activeData) : [];

    return (
      <Paper>
        <Scheduler
          data={formattedData}
          height={500}
        >
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <DayView
            startDayHour={9}
            endDayHour={21}
          />
          <WeekView
            startDayHour={9}
            endDayHour={21}
          />
          <MonthView />
          <Appointments />
          <Toolbar
            {...loading ? { rootComponent: ToolbarWithLoading } : null}
          />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <AppointmentTooltip
            showOpenButton
            showCloseButton
          />
          <AppointmentForm readOnly />
        </Scheduler>
      </Paper>
    );
  }
}
