import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { WellnessSolutionsPage } from '@/pages/WellnessSolutionsPage';
import { SolutionDetailPage } from '@/pages/SolutionDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { StartHerePage } from '@/pages/StartHerePage';
import { ContactPage } from '@/pages/ContactPage';
import { AffiliateDisclosurePage } from '@/pages/AffiliateDisclosurePage';
import { MedicalDisclaimerPage } from '@/pages/MedicalDisclaimerPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'wellness-solutions', element: <WellnessSolutionsPage /> },
      { path: 'wellness-solutions/:slug', element: <SolutionDetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'resources/start-here', element: <StartHerePage /> },
      { path: 'resources/:slug', element: <ArticleDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'affiliate-disclosure', element: <AffiliateDisclosurePage /> },
      { path: 'medical-disclaimer', element: <MedicalDisclaimerPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
