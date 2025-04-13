import {
  PlusIcon,
  SyringeIcon,
  DropIcon,
  ExerciseIcon,
  MonitorPressureIcon,
  BloodPressureIcon,
  CarbsIcon,
  CaloriesIcon,
  CholestrolIcon,
  MedicationIcon
} from "../../icons";
import { ModalForm, FormInput, OtherInputs } from "./modals/forms";

export const icons = [
  //HBA1C
  {
    icon: <MonitorPressureIcon className=" h-10 w-10 fill-pink-700 " />,
    text: "HbA1c",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="HbA1c"
            units="%"
            type="number"
            validate={(value: number) => {
              if (value >= 100) {
                return "Must be less or equal to 100";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="hba1c"
            units="%"
            name="HbA1c"
            labelV="hba1c"
            unitsV="%"
            nameV="HbA1c"
          />
        }
      />
    )
  },
  // BP
  {
    icon: <BloodPressureIcon className="h-10 w-10  fill-pink-700" />,
    text: "Blood Pressure",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Blood Pressure"
            units="bpm"
            type="number"
            validate={(value: number) => {
              if (value > 399) {
                return "Must be less than 400";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="bp"
            units="bpm"
            name="Blood Pressure"
            labelV="bp"
            unitsV="bpm"
            nameV="Blood Pressure"
          />
        }
      />
    )
  },
  // Carbs
  {
    icon: <CarbsIcon className="h-10 w-10 fill-pink-700" />,
    text: "Carbs",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Carbs"
            units="Grams"
            type="number"
            validate={(value: number) => {
              if (value > 600) {
                return "Must be less than 600";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="carbs"
            units="grams"
            name="Carbs"
            labelV="carbs"
            unitsV="grams"
            nameV="Carbs"
          />
        }
      />
    )
  },
  // Calories
  {
    icon: <CaloriesIcon className=" h-10 w-10  fill-pink-700" />,
    text: "Protein",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Protein"
            units="Grams"
            type="number"
            validate={(value: number) => {
              if (value > 800) {
                return "Must be less than 800";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="protein"
            units="grams"
            name="Protein"
            labelV="protein"
            unitsV="grams"
            nameV="Protein"
          />
        }
      />
    )
  },
  // Cholestrol
  {
    icon: <CholestrolIcon className="h-10 w-10  fill-pink-700" />,
    text: "Cholestrol",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Cholestrol"
            units="mg"
            type="number"
            validate={(value: number) => {
              if (value > 399) {
                return "Must be less than 400";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="cholestrol"
            units="mg"
            name="Cholestrol"
            labelV="cholestrol"
            unitsV="grams"
            nameV="Cholestrol"
          />
        }
      />
    )
  },
  // Glucose
  {
    icon: <DropIcon className="h-10 w-10  fill-pink-700" />,
    text: "Glucose",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Glucose"
            units="mmol/l"
            type="number"
            validate={(value: number) => {
              if (value > 50) {
                return "Must be less than 50";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="glucose"
            units="mmol/l"
            name="Glucose"
            labelV="glucose"
            unitsV="grams"
            nameV="Glucose"
          />
        }
      />
    )
  },
  // Insulin
  {
    icon: <SyringeIcon className="h-10 w-10  fill-pink-700" />,
    text: "Insulin",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Insulin"
            units="unit"
            type="number"
            validate={(value: number) => {
              if (value > 100) {
                return "Must be less than 100";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="insulin"
            units="unit"
            name="Insulin"
            labelV="insulin"
            unitsV="unit"
            nameV="Insulin"
          />
        }
      />
    )
  },
  {
    icon: <ExerciseIcon className="h-10 w-10  fill-pink-700" />,
    text: "Exercise",
    form: (
      <ModalForm
        input={
          <FormInput
            name="amount"
            label="Duration"
            units="minutes"
            type="number"
            validate={(value: number) => {
              if (value > 900) {
                return "Must be less than 900 minutes";
              }
            }}
          />
        }
        others={
          <OtherInputs
            label="execise"
            units="min"
            name="Execise"
            labelV="execise"
            unitsV="min"
            nameV="Execise"
          />
        }
      />
    )
  }
];
