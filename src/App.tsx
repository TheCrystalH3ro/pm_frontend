import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const CreateOrgPage = lazy(() => import('./pages/onboarding/CreateOrgPage'));
const InvitePage = lazy(() => import('./pages/onboarding/InvitePage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsPage'));
const ProjectPage = lazy(() => import('./pages/projects/ProjectPage'));
const SettingsPage = lazy(() => import('./pages/settings/SettingsPage'));
const BillingPage = lazy(() => import('./pages/settings/BillingPage'));
const AnalyticsPage = lazy(() => import('./pages/analytics/AnalyticsPage'));

function ProtectedRoute({ children }: { children: React.ReactNode }) 
{
  return <>{children}</>
}

function OrgRoute({ children }: { children: React.ReactNode })
{
  return <>{children}</>
}

const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/invite/:token" element={
            <ProtectedRoute>
              <InvitePage />
            </ProtectedRoute>
          } />
          <Route path="/create-org" element={
            <ProtectedRoute>
              <CreateOrgPage />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <OrgRoute>
              <AppLayout />
            </OrgRoute>
          }>
            <Route index element={<DashboardPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;