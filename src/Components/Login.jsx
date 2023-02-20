function Login() {
    return (
      
  <div className="login-box box">
    <h2>Login</h2>
    <form>
      <div className="user-box">
      <h3>Username</h3>
        <input type="text" name="" required=""> </input>
        
      </div>
      <div className="user-box">
      <h3>Password</h3>
        <input type="password" name="" required=""></input>
        
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
    
    );
  }
  
  export default Login;