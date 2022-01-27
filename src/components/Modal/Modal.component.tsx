import React from 'react';

import Heading from '@components/Heading';
import Text from '@components/Text';
import { MdClose } from 'react-icons/md';
import Margin from '@components/Margin';
import type TModal from './Modal.types';

const Modal: React.FC<TModal> = ({ title, description, children, close }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <MdClose onClick={close} className="modal__exit" />
        {title ? (
          <Heading textAlign="center" className="modal__title">
            {title}
          </Heading>
        ) : (
          <></>
        )}
        <Margin size={5} />
        {description ? (
          <Text className="modal__description" color="black" textAlign="center">
            {description}
          </Text>
        ) : (
          <></>
        )}
        <Margin size={8} />
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
