Header = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      party: "Yay!"
    }
  },

  handleLogout() {
    Meteor.logout();
  },

  render() {
    let loginButton;
    let { currentUser, party } = this.data;

    if (currentUser) {
      loginButton = (
        <li><a href="#" onClick={ this.handleLogout }>Logout</a></li>
      )
    } else {
      loginButton = (
        <li><a href="/login">Login</a></li>
      )
    }

    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand navbar-brand-centered">Dashboard { party }</div>
          </div>


          <div className="collapse navbar-collapse" id="navbar-brand-centered">
            <ul className="nav navbar-nav">
              <li><a href="/employees">Employees</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              { loginButton }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});