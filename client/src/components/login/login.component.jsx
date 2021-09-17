import React, { useState } from 'react';

import { Container, Form, Input, Submit } from './login.styles';

const fetchToken = async (credentials) => {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
};

const Login = ({ setToken }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const token = await fetchToken({ username, password });

      setToken(token);
    } catch (error) {
      setIsError(error);
    }
  };

  // TODO: disable styles for submit button
  if (isError) return <div>OOPS something went wrong</div>; // TODO: improve upon
  return (
    <Container>
      <h1>Įveskite prisijungimo duomenis</h1>
      <Form onSubmit={handleSubmit}>
        <Input required type="text" placeholder="vartotojo vardas..." onChange={(e) => setUsername(e.target.value)} />
        <Input required type="password" placeholder="slaptažodis..." onChange={(e) => setPassword(e.target.value)} />
        <Submit type="submit" value="Prisijungti" />
      </Form>
    </Container>
  );
};

export default Login;
