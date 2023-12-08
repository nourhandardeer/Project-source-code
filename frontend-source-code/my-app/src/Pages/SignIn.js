import React from 'react';

function SignIn() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign In Form</h1>
      <input style={styles.input} type="email" placeholder="Email" />
      <input style={styles.input} type="password" placeholder="Password" />
      <button style={styles.button}>OK</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    width: '300px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SignIn;
