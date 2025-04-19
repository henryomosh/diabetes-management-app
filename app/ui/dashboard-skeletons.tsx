"use client";

import { Card, Skeleton } from "@heroui/react";

export function OverviewSkeleton() {
  return (
    <div>
      <Skeleton>
        <div className="h-40 rounded-lg bg-default-300 p-4" />
      </Skeleton>
    </div>
  );
}

export function PatientSkeleton() {
  return (
    <div>
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </Card>
      ;
    </div>
  );
}
