Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "luis@luis.com",
      password: "foo"
    });
  }
});