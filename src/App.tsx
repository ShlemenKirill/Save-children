import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationMenuItems } from 'core/constants/common';
import {
  ABOUT_US,
  CONTACTS,
  PARTNERS,
  PROJECTS,
  PROJECTS_PREGNANT_HELP,
  REPORTS,
  VOLUNTEERS,
} from 'core/constants/navigation';
import Main from 'pages/Main';
import Reports from 'pages/Reports';
import Partners from 'pages/Partners';
import Volunteers from 'pages/Volunteers';
import Contacts from 'pages/Contacts';
import About from 'pages/About';
import Projects from 'pages/Projects';
import MenuContext from 'context/MenuContext';
import PregnantHelp from 'pages/Projects/PregnantHelp';

const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState<NavigationMenuItems>(
    NavigationMenuItems.main,
  );
  return (
    <MenuContext.Provider value={{ currentMenuItem, setCurrentMenuItem }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path={ABOUT_US} element={<About />} />
          <Route path={PROJECTS}>
            <Route index element={<Projects />} />
            <Route path={'pregnant-help'} element={<PregnantHelp />} />
          </Route>
          <Route path={REPORTS} element={<Reports />} />
          <Route path={PARTNERS} element={<Partners />} />
          <Route path={VOLUNTEERS} element={<Volunteers />} />
          <Route path={CONTACTS} element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
