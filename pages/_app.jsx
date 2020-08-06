import React from 'react';
// styles
import 'normalize.css';
import 'typeface-open-sans';
import '../styles/basic.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
