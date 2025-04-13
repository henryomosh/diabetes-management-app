"use client";

import { Progress } from "@heroui/react";

export default function ProgressBar({ other }: { other?: any }) {
  const others = other;
  return (
    <div className="flex flex-col gap-6 w-full max-w-md pr-2">
      <Progress
        classNames={{
          track: "drop-shadow-md border border-default bg-indigo-500"
        }}
        color="warning"
        aria-label="Loading..."
        size="md"
        value={(others[4][0].sum / 50) * 100}
        className="max-w-md"
        showValueLabel={true}
        label="glucose level last 24hrs"
      />
      <Progress
        classNames={{
          track: "drop-shadow-md border border-default bg-indigo-500"
        }}
        color="success"
        aria-label="Loading..."
        size="md"
        value={others[5][0].sum}
        showValueLabel={true}
        label="Insulin level today"
      />
      <Progress
        classNames={{
          track: "drop-shadow-md border border-default bg-indigo-500"
        }}
        color="primary"
        aria-label="Loading..."
        size="md"
        value={others[7][0].sum}
        showValueLabel={true}
        label="HbA1c level last 24hrs"
      />
      <Progress
        classNames={{
          track: "drop-shadow-md border border-default bg-indigo-500"
        }}
        color="danger"
        aria-label="Loading..."
        size="md"
        value={(others[6][0].sum / 399) * 100}
        showValueLabel={true}
        label="Blood pressure level last 24hrs"
      />
    </div>
  );
}
