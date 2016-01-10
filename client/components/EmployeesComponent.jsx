EmployeesComponent = React.createClass({

  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.wage}</td>
      </tr>
    );
  }
});