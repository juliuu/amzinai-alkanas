import React from 'react';

import Login from '../../components/login/login.component';

import { useSessionStorage } from '../../hooks';

const AdminPage = () => {
  const [token, setToken] = useSessionStorage('token', undefined);

  if (!token) return <Login setToken={setToken} />;
  return <div>HELLO ADMIN</div>;
};

export default AdminPage;
