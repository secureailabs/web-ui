import React from 'react';

import type TSidebarLayout from './Sidebar.types';

import Sidebar from '@components/Sidebar';

const SidebarLayout: React.FC<TSidebarLayout> = ({ primary, secondary }) => {
  console.log('primary, ', primary);
  return (
    <div className="sidebar-layout">
      <Sidebar primary={primary} secondary={secondary} />
    </div>
  );
};

export default SidebarLayout;
