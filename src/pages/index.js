import * as React from 'react';
import Hero from '../../plugins/test-pkg/src/components/Hero';

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <div className='bg-teal-200 p-8'>test</div>
    </main>
  );
};

export default IndexPage;
