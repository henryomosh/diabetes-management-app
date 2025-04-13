"use client";

import { ReactNode, useState } from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@heroui/react";
import type { ChangeEvent } from "react";

interface SubReportContainerProps {
  title: string;
  children?: ReactNode;
  tabs?: {
    key: string;
    title: string;
    content: ReactNode;
  }[];
}

export default function SubReportContainer({
  title,
  children,
  tabs = []
}: SubReportContainerProps) {
  const [isVertical, setIsVertical] = useState(true);

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsVertical(event.target.checked);
  };

  if (!tabs.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">{children}</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Switch
          checked={isVertical}
          onChange={handleSwitchChange}
          className="ml-4"
        >
          Vertical Layout
        </Switch>
      </div>

      <Tabs
        aria-label="Report Sections"
        isVertical={isVertical}
        className="w-full"
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            <Card>
              <CardBody>{tab.content}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
