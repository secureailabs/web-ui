import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card.component';

import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Page pageType="full" padding={true}>
    <Card {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  primaryText: 'Feeds',
  secondaryText: 'Show all',
  children: (
    <div
      style={{
        paddingTop: '100px',
      }}
    ></div>
  ),
};
