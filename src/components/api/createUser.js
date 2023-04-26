async function createUser(email, password) {
    const encodedPassword = b64EncodeUnicode(password);
    const data = {
      email: email,
      password: encodedPassword
    };
  
    try {
      const response = await fetch(
        'https://us-central1-tidal-datum-384923.cloudfunctions.net/create-user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
  
      console.log('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
  
  async function getUserAsync(email, password) {
    const encodedPassword = b64EncodeUnicode(password);
  
    try {
      const response = await fetch('https://us-central1-tidal-datum-384923.cloudfunctions.net/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: encodedPassword
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
  
      const userData = await response.json();
      return b64DecodeUnicode(userData.password);
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  }
  
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    ));
  }
  
  function b64DecodeUnicode(str) {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  }
  
  export { createUser, getUserAsync };
  