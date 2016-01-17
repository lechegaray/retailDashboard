Meteor.methods({
  addEmployee(firstName, lastName, wage) {

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var findDuplicate = Employees.find({firstName: firstName, lastName: lastName}).count();

    if (findDuplicate > 0) {
      console.log("Duplicate entry found");
    } else {
      Employees.insert({
        firstName: firstName,
        lastName: lastName,
        wage: wage,
        createdAt: new Date()
      });
    }
  },

  addShift(date, employee, startTime, endTime) {

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Shifts.insert({
      date: date,
      employee: employee,
      startTime: startTime,
      endTime: endTime,
      createdAt: new Date()
    });
  },

  removeShift(shiftValue) {

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Shifts.remove(shiftValue);

  },

  removeEmployee(employeeId) {

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Employees.remove(employeeId);

  }

});