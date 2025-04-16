"use client";

import { Accordion, AccordionItem, Avatar, Button } from "@heroui/react";
import {
  ChartPieIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  CircleStackIcon,
  ShieldExclamationIcon,
  PencilSquareIcon
} from "@heroicons/react/20/solid";
import {
  SyringeIcon,
  DropIcon,
  ExerciseIcon,
  MonitorPressureIcon,
  BloodPressureIcon,
  CarbsIcon,
  CaloriesIcon,
  CholestrolIcon,
  MedicationIcon
} from "@/app/ui/icons";
import DoughnutChartWrapper from "@/app/ui/dashboard/overview/donut-chart";
import LatestData from "@/app/ui/dashboard/overview/latest-data";
import Treatment from "@/app/ui/dashboard/overview/treatment";
import { ReminderAccordionItem } from "./accordion-items/accordion-item";

export default function RemindersAccordion({ data }: { data?: any }) {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-sm",
    trigger:
      " py-6 px-2 mb-2 mt-0  rounded-lg h-14 flex items-center bg-slate-300 shadow-sm",
    indicator: "text-medium",
    content: "text-small px-2"
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex w-full flex-col md:col-span-4 overflow-y-auto ">
      <Accordion
        defaultExpandedKeys={["1"]}
        itemClasses={itemClasses}
        showDivider={false}
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
          startContent={<DropIcon className="w-6 h-6 fill-yellow-600" />}
          title="Glucose"
          indicator={({ isOpen }) =>
            isOpen ? (
              <XMarkIcon className="w-5 text-black" />
            ) : (
              <PlusIcon className="w-5 text-black" />
            )
          }
        >
          <ReminderAccordionItem data={data} />
          <div className="grid grid-cols-3 gap-0"></div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Chung Miller"
          startContent={<PencilSquareIcon className="w-6 text-indigo-600" />}
          title="Doctor's Notes"
          indicator={({ isOpen }) =>
            isOpen ? (
              <XMarkIcon className="w-5 text-black" />
            ) : (
              <PlusIcon className="w-5 text-black" />
            )
          }
        ></AccordionItem>
      </Accordion>
    </div>
  );
}
// checking
