import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import { Spinner, Header } from './components';
// TODO: maybe remove this spinner together with suspense

const HomePage = React.lazy(() => import('./pages/home/home.component'));
const PreviewsPage = React.lazy(() => import('./pages/previews/previews.component'));
const ReviewPage = React.lazy(() => import('./pages/review/review.component'));
const RecipePage = React.lazy(() => import('./pages/recipe/recipe.component'));
const AdminPage = React.lazy(() => import('./pages/admin/admin.component'));
const ReviewEditor = React.lazy(() => import('./pages/reviewEditor/reviewEditor.component'));

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/apzvalgos" element={<PreviewsPage />} />
          <Route path="/apzvalgos/:id" element={<ReviewPage />} />
          <Route path="/receptai" element={<PreviewsPage />} />
          <Route path="/receptai/:id" element={<RecipePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/review" element={<ReviewEditor />} />
          <Route path="/admin/recipe" element={<ReviewEditor />} />
          {/* TODO: replace review editor with recipe editor */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
