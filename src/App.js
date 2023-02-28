import './App.css';
import logo from './hero-logo 1.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='main-login-page'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-center flex-column'>
              <h3 className='text-login'>Login</h3>
              <p className='text-login-bottom'>Please Enter Your Cred</p>
            </div>
            <img src={logo} alt="logo" />
          </div>
          <div className='d-flex flex-column justify-content-center gap-2'>
            <input className='input-email' type="text" placeholder='Email' />
            <input className='input-password' type="password" placeholder='Password' />
          </div>
          <div className="d-flex justify-content-end align-items-center my-3">
            <a className='text-forgot text-decoration-none' href="#" >Forgot Password?</a>
          </div>
          
          
          
            <button className='btn-login'>Login</button>
          
          <div className='d-flex justify-content-center  mt-5'>
            <p className='text-login-bottom'>Don’t have an account ? <a className='text-login-bottom text-decoration-none' href="#" >Signup</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
