import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FarmerImg from '../Farmer.jpg'; // Import the background image
import Navbar from './Navbar';

const AuthenticationUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [farmerId, setFarmerId] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };
  const validateFarmerId = (farmerId) => {
    const re = /^[0-9]{6}$/;
    return re.test(farmerId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
    if (!validateFarmerId(farmerId)) {
      setErrorMessage('Farmer ID must be exactly 6 digits');
      return;
    }

    if (isLogin) {
      console.log('Logging in with:', { email, password, farmerId });
      alert('User Logged in successfully');
      navigate('/');
    } else {
      console.log('Signing up with:', { email, password, farmerId });
      alert('User signed up successfully');
    }

    setEmail('');
    setPassword('');
    setFarmerId('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    else if (name === 'farmerId') {
      setFarmerId(value);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div >
      <Navbar />
      <div style={styles.wrapper}>

      
      <div style={styles.container}>
        <h2>{isLogin ? 'Farmer User Login' : 'Farmer User Sign Up'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
            <label>Farmer ID:</label> {/* New Farmer ID field */}
            <input
              type="text"
              name="farmerId"
              value={farmerId}
              placeholder='Enter 6 digit Farmer ID'
              onChange={handleChange}
              required
              style={styles.input}
              maxLength="6" // Limit to 6 digits
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder='Enter Email Address'
              value={email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder='Enter unique Password'
              value={password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={toggleMode} style={styles.toggleButton}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    // backgroundImage: `url(${FarmerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '500px',
    padding: '50px',
   
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  toggleButton: {
    marginTop: '15px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default AuthenticationUser;
