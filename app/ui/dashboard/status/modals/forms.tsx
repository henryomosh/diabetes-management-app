"use client";

import React from "react";
import { useState } from "react";
import { Input, TimeInput, DatePicker } from "@heroui/react";
import {
  DateValue,
  getLocalTimeZone,
  today,
  now
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export function ModalForm({ input, others }: { input?: any; others?: any }) {
  let defaultDate = today(getLocalTimeZone());
  let formatter = useDateFormatter({ dateStyle: "full" });
  let localTime = now(getLocalTimeZone());

  const [value, setValue] = React.useState<DateValue | null>(defaultDate);
  const [timeValue, setTimeValue] = useState(localTime);

  const timeString = `${timeValue.hour}:${
    timeValue.minute < 10 ? `0${timeValue.minute}` : timeValue.minute
  } ${timeValue.hour < 12 ? "AM" : "PM"}`;

  return (
    <div className="flex w-full flex-col rounded-md  md:px-4 py-4 shadow-xl mx-2 mb-4 border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <DatePicker
            name="date"
            className="max-w-[284px]"
            label="Date"
            value={value}
            onChange={setValue}
          />
          <p className="text-default-500 text-sm">
            Selected date:{" "}
            {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}{" "}
          </p>
        </div>
        <div className="col-span-3">
          <TimeInput name="time" label="Time" value={timeValue} />
          <p className="text-default-500 text-sm">
            Selected time: {timeValue ? timeString : "--"}{" "}
          </p>
        </div>
        <div className="col-span-6">{input}</div>
        <div className="hidden">{others}</div>
      </div>
    </div>
  );
}

export function FormInput({
  units,
  label,

  type,
  validate,
  name
}: {
  units?: string;
  label?: string;

  type?: string;
  validate?: any;
  name?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Input
        name={name}
        size="lg"
        color="success"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">{units}</span>
          </div>
        }
        label={label}
        labelPlacement="outside"
        placeholder={label}
        startContent={
          <PlusCircleIcon className="h-6 w-6 text-xl text-default-400" />
        }
        type={type}
        validate={validate}
      />
    </div>
  );
}

export function OtherInputs({
  label,
  name,
  units,
  labelV,
  nameV,
  unitsV
}: {
  user_id?: string;
  label?: string;
  name?: string;
  units?: string;
  labelV?: string;
  nameV?: string;
  unitsV?: string;
}) {
  return (
    <>
      <Input name={name} type="text" value={nameV} />
      <Input name={label} type="text" value={labelV} />
      <Input name={units} type="text" value={unitsV} />
    </>
  );
}
