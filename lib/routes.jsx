FlowRouter.route("/", {
  name: "Home",
  action(params) {
    renderMainLayoutWith(<Home />)
  }
});

FlowRouter.route("/login", {
  name: "Login",
  action(params) {
    renderMainLayoutWith(<UserLogin />);
  }
});

FlowRouter.route("/employees", {
  name: "EmployeesComponent",
  action(params) {
    renderMainLayoutWith(<EmployeesSection />);
  }
});

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}