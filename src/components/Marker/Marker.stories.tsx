import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Marker from './Marker.component';

import Page from '@layout/Page';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Marker',
  component: Marker,
} as ComponentMeta<typeof Marker>;

const Template: ComponentStory<typeof Marker> = (args) => (
  <Page pageType="full" padding={true}>
    <Marker {...args} />
  </Page>
);

export const Default = Template.bind({});

export const Customized = Template.bind({});

Default.args = {
  children: <>children</>,
};

Customized.args = {
  children: 'children',
  width: '50rem',
  background_color: '#3248a8',
  text_color: '#a8324e',
  font_size: '5rem',
  font_weight: '1000',
};
