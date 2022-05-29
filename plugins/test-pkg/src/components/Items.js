import React from 'react';

export default function Items({ items }) {
  return (
    <div className='mx-auto max-w-xl p-4'>
      {items.map(
        ({
          node: {
            id,
            frontmatter: { title },
          },
        }) => (
          <div key={id}>
            <h2 className='font-bold mb-4'>{title}</h2>
          </div>
        )
      )}
    </div>
  );
}
