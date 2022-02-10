import React from 'react';
import SearchBar from '@components/SearchBar';
import UserInfo from '@components/UserInfo';

import THeader from './Header.types';

const Header: React.FC<THeader> = ({
  search,
  username,
  organization,
  profile_image,
}) => {
  return (
    <div className="header">
      <SearchBar search={search} />
      <UserInfo
        username={username}
        organization={organization}
        profile_image={profile_image}
      />
    </div>
  );
};

export default Header;
