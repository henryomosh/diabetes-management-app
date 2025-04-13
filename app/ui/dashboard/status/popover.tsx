"use client";

import React from "react";
import { useCallback } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@heroui/react";
import { PlusIcon, SyringeIcon, DropIcon, ExerciseIcon } from "../../icons";
import { ModalForm, FormInput } from "./modals/forms";
import LoginForm from "../../login-form";

export const icons = [
  {
    icon: <DropIcon className=" h-6 w-6 fill-yellow-700 " />,
    text: "Glucose",
    form: (
      <ModalForm
        input={
          <FormInput
            label="Glucose"
            units="mmol/l"
            type="number"
            validate={(value: number) => {
              if (value > 50) {
                return "Must be less or equal to 100";
              }
            }}
          />
        }
      />
    )
  },
  {
    icon: <SyringeIcon className="h-6 w-6 fill-green-700" />,
    text: "Insulin",
    form: (
      <ModalForm
        input={
          <FormInput
            label="Inuslin"
            units="unit"
            type="number"
            validate={(value: number) => {
              if (value > 100) {
                return "Must be less or equal to 100";
              }
            }}
          />
        }
      />
    )
  },
  {
    icon: <ExerciseIcon className="h-6 w-6 fill-pink-700" />,
    text: "Exercise",
    form: (
      <ModalForm
        input={
          <FormInput
            label="Exercise"
            units="minutes"
            type="number"
            validate={(value: number) => {
              if (value >= 900) {
                return "Must be less or equal to 900";
              }
            }}
          />
        }
      />
    )
  }
];

export function Content() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className="flex w-full flex-col bg-gray-300 rounded-md  md:px-4 py-4 shadow-xl mx-2 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Log data</h2>
        <p></p>
      </div>
      <div className="grid grid-cols-6">
        {icons.map((icon, index) => (
          <div key={index}>
            <Button
              size="sm"
              variant="solid"
              color="success"
              className=" shadow-xl bg-gray-100"
              onPress={() => {
                onOpen();
                setSelectedIndex(index);
              }}
              isIconOnly
            >
              {icon.icon}
            </Button>
            <p className="text-xs">{icon.text}</p>

            <Modal
              classNames={{
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10"
              }}
              backdrop="transparent"
              isDismissable={false}
              isOpen={isOpen}
              placement="bottom"
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Log {icons[selectedIndex].text}
                    </ModalHeader>
                    <ModalBody>
                      <form>{icons[selectedIndex].form}</form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary">Save</Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PopoverButton() {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleOpen = useCallback(() => {
    setHidden(false);
  }, [isOpen1]);

  return (
    <Popover
      classNames={{
        content: [
          // arrow color
          "bg-default-400"
        ]
      }}
      placement="right"
      showArrow={true}
      isOpen={isOpen1}
      onOpenChange={setIsOpen1}
      backdrop="transparent"
    >
      <PopoverTrigger>
        <Button
          color="success"
          startContent={<PlusIcon className="w-4 h-4 fill-gray-800" />}
        >
          Add Data
        </Button>
      </PopoverTrigger>
      <div className={` ${hidden ? "invisible" : ""}`}>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="grid grid-cols-6 gap-2"></div>
          </div>
        </PopoverContent>
      </div>
    </Popover>
  );
}
