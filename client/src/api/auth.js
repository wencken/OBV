class Auth {
  //INLOGGEN
  login = (email, password) => {
    return fetch("/auth/login", {
      method: "POST",
      headers: {
        "content-type": `application/json`
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      if (res.status === 200) {
        Promise.resolve();
      } else {
        Promise.reject();
      }
    });
  };

  //UITLOGGEN
  logout = () => {
    return fetch("/auth/logout", {
      method: "POST",
      headers: {
        "content-type": `application/json`
      }
    });
  };

  //REGISTREREN
  register = (name, email, password) => {
    return fetch("/auth/register", {
      method: "POST",
      headers: {
        "content-type": `application/json`
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => {
      if (res.status === 200) {
        Promise.resolve();
      } else {
        Promise.reject();
      }
    });
  };
}

export default Auth;
