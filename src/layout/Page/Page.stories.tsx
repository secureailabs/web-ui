// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from './Page.layout';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Primary.args = {
  pageType: 'full',
  children: <p>Hello World</p>,
};
Secondary.args = {
  pageType: 'center',
  children: <p>Hello World</p>,
};
