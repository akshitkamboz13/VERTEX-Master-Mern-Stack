import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { SyllabusProvider, useSyllabus } from './context/SyllabusContext';

import RouteTracker from './components/common/RouteTracker';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy Load Layout and Pages
const Layout = React.lazy(() => import('./components/layout/Layout'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Syllabus = React.lazy(() => import('./pages/Syllabus'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Revision = React.lazy(() => import('./pages/Revision'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
import PrivacyPolicy from './pages/PrivacyPolicy';

const LoadingFallback = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-400">
    <Loader2 className="w-10 h-10 mb-4 animate-spin text-indigo-500" />
    <p className="text-sm font-medium">Loading App...</p>
  </div>
);

function AppContent() {
  const { syllabus, loading } = useSyllabus();

  if (loading) {
    return (
      <div className="flex bg-slate-50 dark:bg-slate-900 justify-center items-center min-h-screen">
        <p className="text-slate-600 dark:text-slate-400 animate-pulse text-lg font-medium">Loading Vertex...</p>
      </div>
    );
  }

  if (!syllabus) {
    return (
      <div className="flex flex-col bg-slate-50 dark:bg-slate-900 justify-center items-center min-h-screen p-4 text-center">
        <p className="text-rose-500 text-xl font-bold mb-2">Unavailable Offline</p>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xs mx-auto">
          The syllabus data hasn't been cached yet. Please go online once to download the roadmap.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors font-medium"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <RouteTracker />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="syllabus" element={<Syllabus />} />
              <Route path="revision" element={<Revision />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

function App() {
  return (
    <SyllabusProvider>
      <AppContent />
    </SyllabusProvider>
  );
}

export default App;
