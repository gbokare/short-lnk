import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './Privateheader';
import AddLink from './Addlink';
import LinksListFilters from './LinksListFilters';


export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className ="page-content">
        <LinksListFilters />
        <AddLink />
        <LinksList />
      </div>
    </div>
  )
};

