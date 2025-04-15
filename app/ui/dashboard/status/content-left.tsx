"use client";

import React from "react";
import { useActionState } from "react";
import { createOthers, State } from "@/app/lib/dashboard-actions";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Card,
  CardBody,
  Spinner
} from "@heroui/react";
import { icons } from "./modal-icons";

export function ContentLeft({ idx }: { idx?: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isLoading] = useActionState(
    createOthers,
    initialState
  );

  return (
    <div className="flex w-full flex-col bg-slate-300 rounded-md  md:px-4 py-4 shadow-xl mx-2 mb-4 ">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-bold">Log your latest data </h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {icons.map((icon, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => {
              onOpen();
              setSelectedIndex(index);
            }}
            className="p-0"
          >
            <CardBody className="overflow-visible flex flex-col items-center justify-center ">
              {icon.icon}
              <p className="text-xs px-4 ">{icon.text}</p>
              {/* Modal */}
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
                        <form action={formAction}>
                          {icons[selectedIndex].form}

                          <div
                            id="customer-error"
                            aria-live="polite"
                            aria-atomic="true"
                          >
                            {state.errors?.amount &&
                              state.errors.amount.map((error: string) => (
                                <p
                                  className="mt-2 text-sm text-red-500"
                                  key={error}
                                >
                                  {error}
                                </p>
                              ))}
                          </div>
                          <div className="flex justify-between my-4">
                            <div></div>
                            <Button
                              className="px-12"
                              type="submit"
                              color="warning"
                              isDisabled={isLoading}
                            >
                              {isLoading ? (
                                <Spinner color="danger" size="md" />
                              ) : (
                                "Save"
                              )}{" "}
                            </Button>
                          </div>
                        </form>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
