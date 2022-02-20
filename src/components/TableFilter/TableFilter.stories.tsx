import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import TableFilter from './TableFilter.component';

import type TTableFilter from './TableFilter.types';

import Page from '@layout/Page';

export default {
  title: 'Components/TableFilter',
  component: TableFilter,
} as Meta;

const Template: Story<TTableFilter> = (args) => {
  const [current_filter, setCurrentFilter] = useState('waiting_for_approval');
  return (
    <Page pageType="center">
      <TableFilter
        {...args}
        current_filter={current_filter}
        setCurrentFilter={setCurrentFilter}
      />
    </Page>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  filters: [
    {
      name: 'Waiting for Approval',
      count: 0,
      value: 'waiting_for_approval',
    },
    {
      name: 'Waiting for Activation',
      count: 0,
      value: 'waiting_for_activation',
    },
    {
      name: 'Activated',
      count: 2,
      value: 'activated',
    },
    {
      name: 'Expired',
      count: 5,
      value: 'expired',
    },
  ],
};
