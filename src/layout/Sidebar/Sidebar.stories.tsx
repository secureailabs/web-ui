// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from './Sidebar.layout';
import {
  MdDashboard,
  MdViewColumn,
  MdSettings,
  MdHelpOutline,
  MdLogout,
} from 'react-icons/md';

import { IoMdDocument } from 'react-icons/io';

import { HiOutlineDesktopComputer } from 'react-icons/hi';

import { CgTemplate } from 'react-icons/cg';

import { FaServer } from 'react-icons/fa';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsM/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
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
