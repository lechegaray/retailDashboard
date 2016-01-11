Schedule = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      shifts: Shifts.find({}).fetch(),
      employees: Employees.find({}).fetch()
    }
  },

  renderShifts() {
    return this.data.shifts.map((shift) => {
      return <ShiftComponent key={shift._id} shift={shift} />;
    });
  },

  renderEmployeeOptions() {
    return this.data.employees.map((employee) => {
      return <EmployeeOption key={employee._id} employee={employee} />;
    });
  },

  onSubmit(e) {
    e.preventDefault();

    var self = this;
    var date = $(e.target).find("[name=date]").val();
    var employee = $(e.target).find("[name=employee]").val();
    var startTime = moment($(e.target).find("[name=start-time]").val(), "HH-mm").format();
    var endTime = moment($(e.target).find("[name=end-time]").val(), "HH-mm").format();

    Shifts.insert({
      date: date,
      employee: employee,
      startTime: startTime,
      endTime: endTime,
      createdAt: new Date()
    });

  },

  render() {
    return (
      <div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>Date</th>
              <th>Employee</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Hours Worked</th>
              <th>Total Pay</th>
            </tr>
            </thead>
            <tbody>
            {this.renderShifts()}
            </tbody>
          </table>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Enter Shift</h1>

              <form onSubmit={ this.onSubmit }>
                <input type="date" name="date" placeholder="Enter date" className="form-control"/>
                <select type="text" name="employee" className="form-control">
                  {this.renderEmployeeOptions()}
                </select>
                <input type="time" name="start-time" placeholder="Enter start time" className="form-control"/>
                <input type="time" name="end-time" placeholder="Enter end time" className="form-control"/>
                <input type="submit" value="Insert" className="btn btn-default"/>
              </form>

            </div>
          </div>
        </div>
      </div>


    );
  }
});