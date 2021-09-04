import React from 'react';

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An erroooor ${statusCode} occurred on server`
        : 'An erroooor occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
};

export default Error;
