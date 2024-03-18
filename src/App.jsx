import './app.css';
import { routes } from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
// import HomePage from './pages/home/HomePage';

// react - slick;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeProvider } from '@mui/material/styles';

import { SnackbarProvider } from 'notistack';
import ErrorBoundaries from './ErrorBoundary';
import { lightTheme, darkTheme } from './Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Layout from '../src/layout/Layout';
import LoginPage from './pages/login/LoginPage';
import TestPage from './pages/Test/testPage';
import HomePageOld from '../src/pages/home/HomePageOld';

const App = () => {
  // const screenTheme = useSelector((state) => state.screenMode.mode);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            {/* <ThemeProvider theme={screenTheme ? darkTheme : lightTheme}> */}
            <CssBaseline />
            <SnackbarProvider
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <ErrorBoundaries>
                <Router>
                  <Routes>
                    {/* protected and layout shared */}
                    {/* <Route
                      path="/"
                      element={
                        <ProtectedRoutes>
                          <Layout />
                        </ProtectedRoutes>
                      }
                    > */}
                    <Route path="/" element={<HomePageOld />} />

                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    {/* </Route> */}
                    {/* public no layout */}
                    <Route path="/test" element={<TestPage />} />
                  </Routes>
                </Router>
              </ErrorBoundaries>
            </SnackbarProvider>
            {/* </ThemeProvider> */}
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
