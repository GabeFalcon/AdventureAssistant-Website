import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Sources from './components/pages/Sources';
import CharacterSheetCreation from './components/pages/CharacterSheet';
import Guides from './components/pages/Guides';
import CommandsGuide from './components/pages/CommandsGuide';
import MusicGuide from './components/pages/MusicGuide';
import Commands from './components/pages/Commands';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ForgotPassword from './components/pages/ForgotPassword';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import LoginGaurd from './components/LoginGaurd';
import SheetGuide from './components/pages/SheetGuide';
import { Helmet } from "react-helmet";
 
function App() {
  return (
    <>
    <Helmet>
      <title>Adventure Assistant</title>
      <meta name="description" content ="AA Tab Name"></meta>
    </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/sources' element={<Sources />} />
          <Route path='/guides' element={<Guides />} />
          <Route path='/commands' element={<Commands />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/guides/commands' element={<CommandsGuide />} />
          <Route path='/guides/music' element={<MusicGuide />} />
          <Route path='/guides/sheet' element={<SheetGuide />} />
          <Route element={<LoginGaurd />}>
            <Route path='/login' element={<Login />} />
          </Route>
          {/* Protected Routes */}
            <Route element={<RequireAuth />}>
              <Route path='/character-sheet' element={<CharacterSheetCreation />} />
            </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
