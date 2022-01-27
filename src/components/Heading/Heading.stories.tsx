import React from 'react';
import { Story, Meta } from '@storybook/react';

import Heading from './Heading.component';
import { IHeadingProps } from './Heading.types';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: Story<IHeadingProps> = (args) => <Heading {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Heading text',
  color: 'black',
};
