import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserInfo from './UserInfo.component';

import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'UserInfo',
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <Page pageType="center">
    <UserInfo {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  username: 'User_name',
  organization: 'Mayo Clinic',
};
