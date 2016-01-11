EmployeeOption = React.createClass({

  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <option value={this.props.employee._id}>
        {this.props.employee.firstName + " " + this.props.employee.lastName}
      </option>
    );
  }
});