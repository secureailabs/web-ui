import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Resource from './Resource.component';
import { MdOutlineMoveToInbox } from 'react-icons/md';

import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Resource',
  component: Resource,
} as ComponentMeta<typeof Resource>;

const Template: ComponentStory<typeof Resource> = (args) => (
  <Page pageType="full" padding={true}>
    <Resource {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  Icon: MdOutlineMoveToInbox,
  primaryText: 'Resource Name',
  secondaryText:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  buttonText: 'Download',
  onClick: () => { }
};
