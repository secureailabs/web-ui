import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import type TSidebarLink from './SidebarLink.types';

import Text from '@components/Text';

const SidebarLink: React.FC<TSidebarLink> = ({
  text,
  Icon,
  onClick = () => {},
  link,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selected = link === location.pathname;
  return (
    <div
      onClick={() => {
        link ? navigate(link) : onClick();
      }}
      className={`sidebar-link ${selected ? 'sidebar-link--selected' : ''}`}
    >
      <Icon
        className={`sidebar-link__icon ${
          selected ? 'sidebar-link__icon--selected' : ''
        }`}
      />
      <Text color={selected ? 'primary' : 'black'} fontWeight={500}>
        {text}
      </Text>
    </div>
  );
};

export default SidebarLink;
