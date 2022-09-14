import React, { lazy, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationMenuItems } from 'core/constants/common';
import {
  ABOUT_US,
  CONTACTS,
  PARTNERS,
  PROJECTS,
  REPORTS,
  VOLUNTEERS,
} from 'core/constants/navigation';
import MenuContext from 'context/MenuContext';
import AppLoader from 'components/AppLoader';

const Main = lazy(() => import('pages/Main'));
const Reports = lazy(() => import('pages/Reports'));
const Partners = lazy(() => import('pages/Partners'));
const Volunteers = lazy(() => import('pages/Volunteers'));
const Contacts = lazy(() => import('pages/Contacts'));
const About = lazy(() => import('pages/About'));
const Projects = lazy(() => import('pages/Projects'));
const PregnantHelp = lazy(() => import('pages/Projects/PregnantHelp'));
const LargeFamilyHelp = lazy(() => import('pages/Projects/LargeFamilyHelp'));
const CareHome = lazy(() => import('pages/Projects/CareHome'));
const HelpInEvacuation = lazy(() => import('pages/Projects/HelpInEvacuation'));

const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState<NavigationMenuItems>(
    NavigationMenuItems.main,
  );
  return (
    <MenuContext.Provider value={{ currentMenuItem, setCurrentMenuItem }}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<AppLoader />}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path={ABOUT_US}
            element={
              <Suspense fallback={<AppLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route path={PROJECTS}>
            <Route
              index
              element={
                <Suspense fallback={<AppLoader />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path={'pregnant-help'}
              element={
                <Suspense fallback={<AppLoader />}>
                  <PregnantHelp />
                </Suspense>
              }
            />
            <Route
              path={'large-family-help'}
              element={
                <Suspense fallback={<AppLoader />}>
                  <LargeFamilyHelp />
                </Suspense>
              }
            />
            <Route
              path={'care-home'}
              element={
                <Suspense fallback={<AppLoader />}>
                  <CareHome />
                </Suspense>
              }
            />
            <Route
              path={'help-in-evacuation'}
              element={
                <Suspense fallback={<AppLoader />}>
                  <HelpInEvacuation />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={REPORTS}
            element={
              <Suspense fallback={<AppLoader />}>
                <Reports />
              </Suspense>
            }
          />
          <Route
            path={PARTNERS}
            element={
              <Suspense fallback={<AppLoader />}>
                <Partners />
              </Suspense>
            }
          />
          <Route
            path={VOLUNTEERS}
            element={
              <Suspense fallback={<AppLoader />}>
                <Volunteers />
              </Suspense>
            }
          />
          <Route
            path={CONTACTS}
            element={
              <Suspense fallback={<AppLoader />}>
                <Contacts />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
