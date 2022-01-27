import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from '@components/Input';
import Margin from '@components/Margin';
import Modal from './Modal.component';

import Button from '@components/Button';
import type TModal from './Modal.types';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<TModal> = (args) => <Modal {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      <Input
        full={true}
        onChange={() => {}}
        label="Title"
        placeholder="Title"
      />
      <Margin size={5} />
      <Input
        full={true}
        onChange={() => {}}
        label="Access Durations (days)"
        placeholder="Access Durations (days)"
      />
      <Margin size={5} />
      <Input
        full={true}
        onChange={() => {}}
        label="Request Comments"
        placeholder="Request Comments"
      />
      <Margin size={8} />
      <Button full={true} type="primary">
        Request Dataset Access
      </Button>
    </>
  ),
  close: () => {},
  title: 'Request Dataset Access',
  description:
    "To request access to this dataset, eter the title of your research, for how long you'll need access to the data, and any comments regarding your request.",
};
