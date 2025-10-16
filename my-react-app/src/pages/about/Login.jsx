const Login = () => {
  return (
    <div style={{padding: "20px", backgroundColor: "#fff3e0", marginTop: "10px"}}>
      <h3>Login</h3>
      <form>
        <div style={{marginBottom: "10px"}}>
          <label>Username: </label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div style={{marginBottom: "10px"}}>
          <label>Password: </label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

