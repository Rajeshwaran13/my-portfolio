import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import HomeView from './views/HomeView';
import './hooks/useTheme';
import './styles/tokens.css';
import './styles/base.css';
import './styles/app.css';

const ProjectDetailView = lazy(() => import('./views/ProjectDetailView'));
const AnalysisView = lazy(() => import('./views/AnalysisView'));

const lazyPage = (Page) => (
  <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
    <Page />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'projects/:id', element: lazyPage(ProjectDetailView) },
      { path: 'analysis', element: lazyPage(AnalysisView) },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
