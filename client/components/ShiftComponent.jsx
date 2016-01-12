ShiftComponent = React.createClass({

  propTypes: {
    shift: React.PropTypes.object.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      employee: Employees.findOne({_id: this.props.shift.employee})
    }
  },

  calculateHoursWorked(start, end) {
    return accounting.toFixed(moment(end).diff(start, 'hours', true), 2);
  },

  render() {
    return (
      <tr>
        <td>{this.props.shift.date}</td>
        <td>{this.data.employee.firstName + " " + this.data.employee.lastName}</td>
        <td>{moment(this.props.shift.startTime).format("hh:mm A")}</td>
        <td>{moment(this.props.shift.endTime).format("hh:mm A")}</td>
        <td>{this.calculateHoursWorked(this.props.shift.startTime, this.props.shift.endTime)}</td>
        <td>{accounting.formatMoney(this.calculateHoursWorked(this.props.shift.startTime, this.props.shift.endTime) * this.data.employee.wage)}</td>
      </tr>
    );
  }
});