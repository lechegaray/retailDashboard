Meteor.publish("employees", function () {
  return Employees.find();
});

Meteor.publish("shifts", function () {
  return Shifts.find();
});