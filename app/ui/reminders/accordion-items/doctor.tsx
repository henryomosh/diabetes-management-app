import { Alert } from "@heroui/react";

export default function DoctorNotes() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert
        color="secondary"
        title={`No doctor notes available`}
        description={`You have no doctor notes available. Please check back later or contact your healthcare provider for more information.`}
        variant="bordered"
      />
    </div>
  );
}
