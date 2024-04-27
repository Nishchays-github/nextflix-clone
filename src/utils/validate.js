const validate = (email, password) => {
    const emailV = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordV = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailV) return 'email is not valid';
    if(!passwordV) return 'pass  is not valid';
    return null;
  };
  
  export default validate;
  