"use client";
import React from "react";
import { Accordion, AccordionItem, Avatar, Button } from "@heroui/react";
import {
  ChartPieIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  CircleStackIcon,
  ShieldExclamationIcon
} from "@heroicons/react/20/solid";
import DoughnutChartWrapper from "@/app/ui/dashboard/overview/donut-chart";
import LatestData from "@/app/ui/dashboard/overview/latest-data";
import Treatment from "@/app/ui/dashboard/overview/treatment";

export default function Overview({
  data,
  data2,
  data3
}: {
  data?: any;
  data2: any;
  data3?: any;
}) {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-sm",
    trigger:
      " py-6 px-2 mb-2 mt-0 data-[hover=true]:bg-default-300 rounded-lg h-14 flex items-center bg-default-300 shadow-sm",
    indicator: "text-medium",
    content: "text-small px-2"
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div
      className="flex w-full flex-col md:col-span-5 overflow-y-auto"
      style={{ height: "50rem" }}
    >
      <Accordion
        defaultExpandedKeys={["1"]}
        itemClasses={itemClasses}
        showDivider={true}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              overflowY: "unset",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1
                },
                opacity: {
                  easings: "ease",
                  duration: 1
                }
              }
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              overflowY: "hidden",
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3
                }
              }
            }
          }
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={<ChartPieIcon className="w-6 text-green-600" />}
          title="Glucose Overview 7 days"
          indicator={({ isOpen }) =>
            isOpen ? (
              <XMarkIcon className="w-5 text-black" />
            ) : (
              <PlusIcon className="w-5 text-black" />
            )
          }
        >
          <div className="grid grid-cols-3 gap-0">
            <DoughnutChartWrapper data={data} data2={data2} data3={data3} />
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Chung Miller"
          startContent={<CircleStackIcon className="w-6 text-indigo-600" />}
          title="Latest Data"
          indicator={({ isOpen }) =>
            isOpen ? (
              <XMarkIcon className="w-5 text-black" />
            ) : (
              <PlusIcon className="w-5 text-black" />
            )
          }
        >
          <LatestData />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Chung Miller"
          startContent={
            <ShieldExclamationIcon className="w-6 text-yellow-600" />
          }
          title="Diabetes treatment overview for the last 7 days"
          indicator={({ isOpen }) =>
            isOpen ? (
              <XMarkIcon className="w-5 text-black" />
            ) : (
              <PlusIcon className="w-5 text-black" />
            )
          }
        >
          <Treatment />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
