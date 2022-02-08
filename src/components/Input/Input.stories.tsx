import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from './Input.component';
import TInput from './Input.types';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<TInput> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'test',
  placeholder: 'test',
  register: () => {}
};
