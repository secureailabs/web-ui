import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stat from './Stat.component';

import Page from '@layout/Page';

import { FaUsers } from 'react-icons/fa';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Stat',
  component: Stat,
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => (
  <Page pageType="center" padding={true}>
    <div
      style={{
        backgroundColor: 'white',
        padding: '2rem',
      }}
    >
      <Stat {...args} />
    </div>
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'No. of Data Users',
  Icon: FaUsers,
  value: '7',
};
