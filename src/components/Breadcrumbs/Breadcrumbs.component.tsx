import React from 'react';

import { Link } from 'react-router-dom';

import { TBreadcrumbs } from './Breadcrumbs.types';

const Breadcrumbs: React.FC<TBreadcrumbs> = ({ breadcrumbsData }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbsData.map(({ breadcrumb, match }, index) => (
        <>
          {index != 0 && <> / </>}
          <Link
            to={match.pathname}
            className={
              index == breadcrumbsData.length - 1 ? 'orange' : undefined
            }
          >
            {breadcrumb}
          </Link>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
