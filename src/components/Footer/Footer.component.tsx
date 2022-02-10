import React from 'react';

import Text from '@components/Text';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Text fontWeight={400} fontSize="10px" color="black" textAlign="center">
        Private and Confidential. For Private Preview Purposes Only. Copyright
        (C) 2022 Secure AI Labs, Inc., all rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
