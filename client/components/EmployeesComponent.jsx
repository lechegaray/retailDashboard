EmployeesComponent = React.createClass({

  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.employee.name}</li>
    );
  }
});