ShiftComponent = React.createClass({

  propTypes: {
    shift: React.PropTypes.object.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("employees");

    return {
      employee: Employees.findOne({_id: this.props.shift.employee})
    }
  },

  calculateHoursWorked(start, end) {
    return accounting.toFixed(moment(end).diff(start, 'hours', true), 2);
  },

  deleteShift() {
    var shiftValue = this.props.shift._id;
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this shift!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function () {
      Meteor.call("removeShift", shiftValue);
      swal("Deleted!", "Your shift has been deleted.", "success");
    });
  },

  render() {
    return (
      <tr className="shift-row">
        <td>{this.props.shift.date}</td>
        <td>{this.data.employee.firstName + " " + this.data.employee.lastName}</td>
        <td>{moment(this.props.shift.startTime).format("hh:mm A")}</td>
        <td>{moment(this.props.shift.endTime).format("hh:mm A")}</td>
        <td>{this.calculateHoursWorked(this.props.shift.startTime, this.props.shift.endTime)}</td>
        <td>{accounting.formatMoney(this.calculateHoursWorked(this.props.shift.startTime, this.props.shift.endTime) * this.data.employee.wage)}</td>
        <td>
          <button id="deleteShiftConfirm"
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={this.deleteShift}>
            X
          </button>
        </td>
      </tr>
    );
  }
});