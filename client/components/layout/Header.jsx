Header = React.createClass({
  render() {
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
            <div className="navbar-brand navbar-brand-centered">Dashboard</div>
          </div>


          <div className="collapse navbar-collapse" id="navbar-brand-centered">
            <ul className="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});