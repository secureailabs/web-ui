import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button.component';

import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Page pageType="full" padding={true}>
    <Button {...args} />
  </Page>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const FullWidth = Template.bind({});

Primary.args = {
  children: 'Primary',
  button_type: 'primary',
};

Secondary.args = {
  children: 'Secondary',
  button_type: 'secondary',
};

FullWidth.args = {
  children: 'Full Width',
  button_type: 'primary',
  full: true,
};
