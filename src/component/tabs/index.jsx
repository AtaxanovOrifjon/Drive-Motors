import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { TabData } from '../../data';

 function ProductTabs() {
  const [activeTab, setActiveTab] = React.useState('Характеристики');
  
  return (
    <Tabs value={activeTab} className="mt-12 w-full ">
      <TabsHeader
        className="rounded-none w-full  bg-transparent p-0"
        indicatorProps={{
          className:
           "bg-transparent border-b-2  shadow-none rounded-none text-primary",
        }}>
        {TabData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? 'text-gray-900' : ''}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {TabData.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}


export default ProductTabs