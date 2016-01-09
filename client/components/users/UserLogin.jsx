UserLogin = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>

            <form>
              <input type="text" name="email" placeholder="Enter your email." className="form-control" />
              <input type="password" name="password" placeholder="Enter password..." className="form-control" />
              <input type="submit" value="Login" className="btn btn-default"/>
            </form>

          </div>
        </div>
      </div>
    )
  }
});