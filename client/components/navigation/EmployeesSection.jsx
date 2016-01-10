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

  onSubmit(e) {
    e.preventDefault();

    var self = this;
    var firstName = $(e.target).find("[name=firstName]").val();
    var lastName = $(e.target).find("[name=lastName]").val();
    var wage = $(e.target).find("[name=wage]").val();

    Employees.insert({
      firstName: firstName,
      lastName: lastName,
      wage: wage,
      createdAt: new Date()
    });

  },

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <h1>Employee List</h1>
            <table>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Wage</th>
              {this.renderEmployees()}
            </table>
          </header>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Enter Employee</h1>

              <form onSubmit={ this.onSubmit }>
                <input type="text" name="firstName" placeholder="Enter employee first name" className="form-control" />
                <input type="text" name="lastName" placeholder="Enter employee last name" className="form-control" />
                <input type="text" name="wage" placeholder="Enter employee hourly wage" className="form-control" />
                <input type="submit" value="Insert" className="btn btn-default"/>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
});