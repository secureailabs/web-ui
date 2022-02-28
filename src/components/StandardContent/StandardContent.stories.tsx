import React from 'react';
import { Story, Meta } from '@storybook/react';

import StandardContent from './StandardContent.component';
import TStandardContent from './StandardContent.types';
import Button from '@components/Button';
import Page from '@layout/Page';
export default {
  title: 'Components/StandardContent',
  component: StandardContent,
} as Meta;

const Template: Story<TStandardContent> = (args) => (
  <Page pageType="center">
    <StandardContent {...args} />
  </Page>
);

export const Simple = Template.bind({});
Simple.args = {
  children: <div>Test</div>,
  title: 'Dashboard',
  HeaderButton: (
    <Button button_type="secondary" full={false}>
      Test
    </Button>
  ),
};
