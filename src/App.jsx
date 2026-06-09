import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Home from '@/pages/Home';
import Subjects from '@/pages/Subjects';
import TopicQuestions from '@/pages/TopicQuestions';
import RevisionNotes from '@/pages/RevisionNotes';
import PapersSubject from '@/pages/PapersSubject';
import PapersMaths from '@/pages/PapersMaths';
import PapersAS from '@/pages/PapersAS';
import PapersA from '@/pages/PapersA';
import Level from '@/pages/Level';
import LevelSubject from '@/pages/LevelSubject';
import NotesPage from '@/pages/NotesPage';
import TopicComingSoon from '@/pages/TopicComingSoon';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/topic-questions" element={<TopicQuestions />} />
      <Route path="/topic-questions/coming-soon" element={<TopicComingSoon />} />
      <Route path="/revision-notes" element={<RevisionNotes />} />
      <Route path="/papers/maths" element={<PapersMaths />} />
      <Route path="/papers/as/:subject" element={<PapersAS />} />
      <Route path="/papers/a/:subject" element={<PapersA />} />
      <Route path="/papers/:subject" element={<PapersSubject />} />
      <Route path="/levels/:level/:subject" element={<LevelSubject />} />
      <Route path="/levels/:level" element={<Level />} />
      <Route path="/notes/:level/:subject" element={<NotesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App