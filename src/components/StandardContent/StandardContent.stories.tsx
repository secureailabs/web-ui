import React from 'react';
import { Story, Meta } from '@storybook/react';

import StandardContent from './StandardContent.component';
import TStandardContent from './StandardContent.types';

export default {
  title: 'Components/StandardContent',
  component: StandardContent,
} as Meta;

const Template: Story<TStandardContent> = (args) => (
  <StandardContent {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  children: <div>Test</div>,
  title: 'Dashboard',
};
