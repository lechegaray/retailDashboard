EmployeesComponent = React.createClass({

  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  deleteEmployee() {
    var employeeId = this.props.employee._id;
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this employee!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function () {
      Meteor.call("removeEmployee", employeeId);
      swal("Deleted!", "Your employee has been deleted.", "success");
    });
  },

  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{accounting.formatMoney(this.props.employee.wage)}</td>
        <td>
          <button id="deleteShiftConfirm"
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={this.deleteEmployee}>
            X
          </button>
        </td>
      </tr>
    );
  }
});