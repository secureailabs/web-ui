import React from 'react';
import { Story, Meta } from '@storybook/react';

import Table from './Table.component';

import type TModal from './Table.types';

import Page from '@layout/Page';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story<TModal> = (args) => (
  <Page pageType="center">
    <Table {...args} />
  </Page>
);

export const Simple = Template.bind({});
Simple.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
      width: 200,
    },
    {
      Header: 'No. of versions',
      accessor: 'number_of_versions',
      width: 200,
    },
    {
      Header: 'Publish Date',
      accessor: 'publish_date',
      Cell: ({ value }: { value: Date }) =>
        new Date(value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      width: 200,
    },
    {
      Header: 'Keywords',
      accessor: 'keywords',

      width: 200,
    },
    {
      Header: 'Dataset Owners',
      accessor: 'dataset_owners',
      width: 200,
    },
  ],
  data: [
    {
      name: 'Chronic Kindey Disease Dataset',
      number_of_versions: 3,
      publish_date: new Date(),
      keywords: 'Health Conditions',
      dataset_owners: 'Mercy General Hospital',
    },
    {
      name: 'Chronic Kindey Disease Dataset',
      number_of_versions: 3,
      publish_date: new Date(),
      keywords: 'Health Conditions',
      dataset_owners: 'Mercy General Hospital',
    },
  ],
};
