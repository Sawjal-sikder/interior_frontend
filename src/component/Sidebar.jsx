import { Sidebar } from 'flowbite-react';
import {
  HiChartPie,
  HiInbox,
  HiUser,
  HiCog,
} from 'react-icons/hi';

export default function CustomSidebar() {
  return (
    <Sidebar aria-label="Sidebar" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Messages
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCog}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
