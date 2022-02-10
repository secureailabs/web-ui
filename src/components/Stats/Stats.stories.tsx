import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stats from './Stats.component';

import Page from '@layout/Page';

import { FaUsers } from 'react-icons/fa';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Stats',
  component: Stats,
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => (
  <Page pageType="full" padding={true}>
    <Stats {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Feed',
  widthMaxContent: true,
  stats: [
    {
      title: 'No. of Data Users',
      Icon: FaUsers,
      value: '7',
    },
    {
      title: 'No. of Data Users',
      Icon: FaUsers,
      value: '7',
    },
  ],
};
