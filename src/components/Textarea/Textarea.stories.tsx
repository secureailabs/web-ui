import React from 'react';
import { Story, Meta } from '@storybook/react';

import Textarea from './Textarea.component';
import TTextarea from './Textarea.types';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TTextarea> = (args) => <Textarea {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'test',
  placeholder: 'test',
};
