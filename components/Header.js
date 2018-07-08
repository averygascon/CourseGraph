import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div style={{marginBottom: 20}}>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
    </Head>
  </div>
);