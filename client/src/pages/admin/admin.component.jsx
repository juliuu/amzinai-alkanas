import React, { useEffect, useState } from 'react';

import { AdminPageContainer, AdminTitle } from './admin.styles';

import Login from '../../components/login/login.component';
import Dropdown from '../../components/dropdown/dropdown.component';

import { useSessionStorage } from '../../hooks';

const AdminPage = () => {
  const adminTabs = [
    { _id: 'reviews', title: 'Restoranų apžvalgos' },
    { _id: 'recipes', title: 'Receptai' },
  ];
  const [tab, setTab] = useState('reviews');
  const [token, setToken] = useSessionStorage('token', undefined);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: split into two different tabs for articles and recipes
        console.log('FETCHING DATA --> ');
        const data = await fetch(`/api${tab === 'reviews' ? '/apzvalgos' : '/receptai'}/?sort=timestamp`).then((res) => res.json()); // TODO: add normal sort mechanism
        console.log('DATA --> ', data);

        setData(data);
        setIsLoaded(true);
      } catch (error) {
        console.log('ERROR --> ', error);
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [tab]);

  // TODO: either redirect in backend to login route or have a login route here initially, only then bring in data
  if (!token) return <Login setToken={setToken} />;
  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <AdminPageContainer>
        <AdminTitle>ADMINISTRATIVE DASHBOARD</AdminTitle>
        <Dropdown options={adminTabs} onFilterChange={(value) => setTab(value)} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Comments</th>
              {tab === 'recipes' && <th>Ratings</th>}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.heading}</td>
                <td>{item.timestamp}</td>
                <td>some comment count</td>
                {tab === 'recipes' && <td>some rating count</td>}
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminPageContainer>
    );
  }
};

export default AdminPage;
