import { ReactElement } from 'react';
import type { TSidebar } from '@components/Sidebar';

type TSidebarLayout = TSidebar & {
  children: ReactElement;
};

export default TSidebarLayout;
