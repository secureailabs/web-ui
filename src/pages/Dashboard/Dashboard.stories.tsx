import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

import 'eqcss/EQCSS';

import Sidebar from '@layout/Sidebar';
import {
  MdDashboard,
  MdViewColumn,
  MdSettings,
  MdHelpOutline,
  MdLogout,
} from 'react-icons/md';
import Stats from '@components/Stats';
import feed_image1 from '@assets/feed1.jpeg';
import feed_image2 from '@assets/feed2.jpeg';

import Header from '@components/Header';

import { IoMdDocument } from 'react-icons/io';

import { HiOutlineDesktopComputer } from 'react-icons/hi';

import { CgTemplate } from 'react-icons/cg';

import { FaServer } from 'react-icons/fa';

import Feed from '@components/Feed';

import GridLayout from 'react-grid-layout';

import StandardContent from '@components/StandardContent';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en');

import { FaUsers } from 'react-icons/fa';
import Footer from '@components/Footer';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsM/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/Dashboard',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const stats = [
  {
    title: 'No. of Data Users',
    Icon: FaUsers,
    value: '7',
  },
  {
    title: 'No. of Data Users',
    Icon: FaUsers,
    value: '7',
  },
];

const layout = [
  { i: 'a', x: 0, y: 0, w: 8, h: 5 },
  { i: 'b', x: 8, y: 5, w: 2, h: 8 },
  { i: 'c', x: 8, y: 0, w: 2, h: 7 },
];

const feed1 = {
  title: 'Feed',
  secondary: 'Show all',
  feed: [
    {
      title:
        'Vanderbilt University published a new version of the ‘KCA consortium data set',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: feed_image1,
      date: timeAgo.format(new Date()),
    },
    {
      title:
        'Mayo Clinic was added to the KCA Research Consortium as a Data Owner',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: feed_image2,
      date: timeAgo.format(new Date()),
    },
  ],
};
const feed2 = {
  title: 'Data User Activity',
  secondary: 'Show all',
  feed: [
    {
      title: 'Lorem Ipsum',
      description: 'performs data updates on lorem ipsum',
      date: timeAgo.format(new Date()),
    },
    {
      title: 'Lorem Ipsum',
      description: 'performs data updates on lorem ipsum',
      date: timeAgo.format(new Date()),
    },
  ],
};

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args}>
    <div className="standard-grid-row">
      <Header
        search={() => {}}
        username="User_name"
        organization="Mayo Clinic"
      />
      <StandardContent title="Dashboard">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          width={1400}
          rowHeight={50}
        >
          <div key="a">
            <Feed containerHeight={true} {...feed1} />
          </div>
          <div key="b">
            <Feed containerHeight={true} {...feed2} />
          </div>
          <div key="c">
            <Stats
              title="Summary of Membership"
              containerHeight={true}
              stats={stats}
            />
          </div>
        </GridLayout>
      </StandardContent>
      <Footer />
    </div>
  </Sidebar>
);

export const Primary = Template.bind({});

Primary.args = {
  primary: [
    { text: 'Dashboard', Icon: MdDashboard, link: '/' },
    { text: 'Datasets', Icon: MdViewColumn, link: '/datasets' },
    {
      text: 'Digital Contracts',
      Icon: IoMdDocument,
      link: '/digital-contracts',
    },
    {
      text: 'Virtual Machines',
      Icon: HiOutlineDesktopComputer,
      link: '/virtual-machines',
    },
    {
      text: 'Azure Templates Manager',
      Icon: CgTemplate,
      link: '/templates',
    },
    {
      text: 'Unified Registries',
      Icon: FaServer,
      link: '/registries',
    },
  ],
  secondary: [
    {
      text: 'Settings',
      Icon: MdSettings,
      link: '/settings',
    },
    {
      text: 'Help',
      Icon: MdHelpOutline,
      link: '/help',
    },
    {
      text: 'Logout',
      Icon: MdLogout,
      onClick: () => {},
    },
  ],
};
