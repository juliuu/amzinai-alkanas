import React, { useEffect, useState } from 'react';

import { AdminPageContainer, AdminTitle, Table, THead, TBody, TH, TR, TD, Flattened } from './admin.styles';
import { Login, Button, Dropdown } from '../../components';
import { useSessionStorage } from '../../hooks';

const AdminPage = () => {
  const adminTabs = [
    { _id: 'review', title: 'Reviews' },
    { _id: 'recipe', title: 'Recipes' },
  ];
  const [tab, setTab] = useState('review');
  const [token, setToken] = useSessionStorage('token', undefined);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api${tab === 'review' ? '/apzvalgos' : '/receptai'}/lookup/?sort=timestamp`).then((res) => res.json()); // TODO: add normal sort mechanism

        setData(data);
        setIsLoaded(true);
      } catch (error) {
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
        <Flattened justifyContent="space-between" style={{ padding: '0.5rem 0' }}>
          <Dropdown options={adminTabs} onFilterChange={(value) => setTab(value)} />
          <Button to={`/admin/${tab}`} data-type="link">
            Create {tab === 'review' ? 'Review' : 'Recipe'}
          </Button>
        </Flattened>
        <Table>
          <THead>
            <TR>
              <TH>Name</TH>
              <TH>Date</TH>
              <TH>Comments</TH>
              {tab === 'recipe' && <TH>Ratings</TH>}
              <TH>Action</TH>
            </TR>
          </THead>
          <TBody>
            {data.map((item) => (
              <TR key={item._id}>
                <TD>{item.heading.toUpperCase()}</TD>
                <TD>{item.timestamp}</TD>
                <TD style={{ fontWeight: 'bold' }}>{item.comments[0].count}</TD>
                {tab === 'recipe' && <TD style={{ fontWeight: 'bold' }}>{item.rating ? item.rating[0].rating : '-'}</TD>}
                <TD>
                  <Flattened>
                    <Button data-type="icon" color="green">
                      <span className="material-icons-outlined">check_circle</span>
                    </Button>
                    <Button data-type="icon" color="#ff9b00">
                      <span className="material-icons-outlined">unpublished</span>
                    </Button>
                    <Button data-type="icon" color="#ff9b00">
                      <span className="material-icons-outlined">edit</span>
                    </Button>
                    <Button data-type="icon" color="red">
                      <span className="material-icons-outlined">delete</span>
                    </Button>
                  </Flattened>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </AdminPageContainer>
    );
  }
};

export default AdminPage;
