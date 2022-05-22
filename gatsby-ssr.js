import React from 'react';
import Layout from './plugins/test-pkg/src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
