import React, { useEffect, useState } from 'react';

import { AdminPageContainer, AdminTitle, Table, THead, TBody, TH, TR, TD, Flattened } from './admin.styles';
import { Login, Button, Dropdown, Modal } from '../../components';
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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [itemDetails, setItemDetails] = useState(null);
  const [actionCompleted, setActionCompleted] = useState('pending');

  const fetchData = async () => {
    try {
      const data = await fetch(
        `/api${tab === 'review' ? '/apzvalgos' : '/receptai'}/lookup/?sort=timestamp`
      ).then((res) => res.json()); // TODO: add normal sort mechanism

      setData(data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tab, fetchData]);

  const handleDelete = async (id) => {
    try {
      setActionCompleted('loading');

      await fetch(`/api${tab === 'review' ? '/apzvalgos' : '/receptai'}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async () => {
        await fetchData();
        setActionCompleted('confirmed');
      });

      setTimeout(() => {
        setShowDeleteModal(false);
        setActionCompleted('pending');
      }, 500);
    } catch (error) {
      setError(error);
    }
  };

  const handlePublish = async (params) => {
    try {
      setActionCompleted('loading');

      await fetch(`/api${tab === 'review' ? '/apzvalgos' : '/receptai'}/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ published: params.published }),
      }).then(async () => {
        await fetchData();
        setActionCompleted('confirmed');
      });

      setTimeout(() => {
        setShowPublishModal(false);
        setActionCompleted('pending');
      }, 500);
    } catch (error) {
      setError(error);
    }
  };

  // TODO: either redirect in backend to login route or have a login route here initially, only then bring in data
  if (!token) return <Login setToken={setToken} />;
  if (error) return <div>Error: {error.message}</div>; // TODO: make a simple error page
  if (!isLoaded) return <div>Loading...</div>; // TODO: make a cool loading component

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
              {tab === 'recipe' && (
                <TD style={{ fontWeight: 'bold' }}>{item.rating ? item.rating[0].rating : '-'}</TD>
              )}
              <TD>
                <Flattened>
                  {item.published && (
                    <Button
                      data-type="icon"
                      color="green"
                      onClick={() => {
                        setShowPublishModal(true);
                        setItemDetails({
                          id: item._id,
                          published: !item.published,
                        });
                      }}
                    >
                      <span className="material-icons-outlined">check_circle</span>
                    </Button>
                  )}
                  {!item.published && (
                    <Button
                      data-type="icon"
                      color="#ff9b00"
                      onClick={() => {
                        setShowPublishModal(true);
                        setItemDetails({
                          id: item._id,
                          published: !item.published,
                        });
                      }}
                    >
                      <span className="material-icons-outlined">unpublished</span>
                    </Button>
                  )}
                  <Button data-type="icon" color="#ff9b00">
                    <span className="material-icons-outlined">edit</span>
                  </Button>
                  <Button
                    data-type="icon"
                    color="red"
                    onClick={() => {
                      setShowDeleteModal(true);
                      setItemDetails(item._id);
                    }}
                  >
                    <span className="material-icons-outlined">delete</span>
                  </Button>
                </Flattened>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
      {showDeleteModal && (
        <Modal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => handleDelete(itemDetails)}
          actionCompleted={actionCompleted}
        >
          <h4>Are you sure about this, mate?</h4>
        </Modal>
      )}
      {showPublishModal && (
        <Modal
          onCancel={() => setShowPublishModal(false)}
          onConfirm={() => handlePublish(itemDetails)}
          actionCompleted={actionCompleted}
        >
          <h4>Do you wish to {itemDetails.published ? '' : 'UN'}PUBLISH this post?</h4>
        </Modal>
      )}
    </AdminPageContainer>
  );
};

export default AdminPage;
