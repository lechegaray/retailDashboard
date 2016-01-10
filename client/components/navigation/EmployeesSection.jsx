EmployeesSection = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      employees: Employees.find({}).fetch()
    }
  },

  renderEmployees() {
    return this.data.employees.map((employee) => {
      return <EmployeesComponent key={employee._id} employee={employee} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Employee List</h1>
        </header>

        <ul>
          {this.renderEmployees()}
        </ul>
      </div>
    );
  }
});