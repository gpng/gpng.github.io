import React from 'react';
// styles
import 'normalize.css';
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/700.css';
import '../styles/basic.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
