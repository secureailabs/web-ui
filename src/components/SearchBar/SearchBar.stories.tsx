// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar.component';

import { MdOutlineSearch } from 'react-icons/md';
import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <Page pageType="center">
    <SearchBar {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  Icon: MdOutlineSearch,
  placeholder: 'Search...',
  search: (value: string) => alert(`Inputed value: ${value}`),
};
