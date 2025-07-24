import React from 'react';

export default function GridContainer({ children, numColumns = 2 }) {
  if (numColumns === 2) {
    return <div className="grid-cols-1 sm:grid-cols-2 grid gap-4">{children}</div>;
  } else if (numColumns === 3) {
    return <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-4">{children}</div>;
  } else {
    return <div className="">{children}</div>;
  }
}
