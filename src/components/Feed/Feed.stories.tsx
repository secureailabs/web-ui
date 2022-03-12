import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Feed from './Feed.component';

import Page from '@layout/Page';
import TimeAgo from 'javascript-time-ago';

import Avatar from 'react-avatar';

import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en');

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Feed',
  component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = (args) => (
  <Page pageType="full" padding={true}>
    <Feed {...args} />
  </Page>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Feed',
  secondary: 'Show all',
  feed: [
    {
      title:
        'Vanderbilt University published a new version of the ‘KCA consortium data set',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: timeAgo.format(new Date()),
      avatar: 'Adam Jasniewicz',
    },
    {
      title:
        'Mayo Clinic was added to the KCA Research Consortium as a Data Owner',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:
        'https://s3-alpha-sig.figma.com/img/2b1b/861d/ec80aa84ad41edc674d7debf257b70a7?Expires=1644192000&Signature=RWtGP0u~1hSXbon66vznwgDGJNIiyMqqVCo0e3YPk7qUinS8cKp9hZQAX5TJSiovFXaHjMeu7luUe1ZB8KVIxMn3Nsc0OI8f5DPnzn9vpiP4VeUT~WEwnj077uHbTHpM2FXJHjVTLFP1g64msjGSBZimmJNSgdD48m2XbtlwniQztFyEGNcwEQl0xmQ~xIT53gi7dMcQrAPSgAQIBrE-zX3hVx98HI4ESL1QyLXVPmIPI013xdWAvXgamppMBiQ9vOPDSSSM6jh-MhDb3Th4l4Lx6ZGWfj0Gg~zwUSAv-MnFaReVZu83OvwsROzy56AgwhExrLxw7UeLbo6Wt~R4Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      date: timeAgo.format(new Date()),
    },
  ],
};
