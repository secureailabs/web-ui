import React from 'react';
import { Story, Meta } from '@storybook/react';

import Margin from './Margin.component';
import { IMarginProps } from './Margin.types';

import { HiMail, HiQuestionMarkCircle } from 'react-icons/hi';

export default {
  title: 'Components/Margin',
  component: Margin,
} as Meta;

const Template: Story<IMarginProps> = (args) => <Margin {...args} />;

export const Simple = Template.bind({});
Simple.args = {};
