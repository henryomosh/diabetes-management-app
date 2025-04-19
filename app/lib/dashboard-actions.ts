//@ts-nocheck
"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import sql from "./db";
import { now, getLocalTimeZone } from "@internationalized/date";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const FormSchema = z.object({
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter a value greater than 0." }),
  date: z.string(),
  time: z.string()
});

const CreateOthers = FormSchema.omit({ date: true, time: true });

export type State = {
  errors?: {
    amount?: string[];
  };
  message?: string | null;
};

export async function createOthers(prevState: State, formData: FormData) {
  const validatedFields = CreateOthers.safeParse({
    amount: formData.get("amount")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to add data."
    };
  }

  const { amount } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  const d = new Date();
  const time = d.toTimeString().split(":").slice(0, 2).join(":");
  const obj = Object.fromEntries(formData.entries());
  const objValues = Object.entries(obj);
  const label = objValues[4][1];
  const name = objValues[3][1];
  const units = objValues[5][1];
  const localTime = now(getLocalTimeZone());
  // dates
  const utcDate = new Date(); // UTC time
  const offset = utcDate.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localDate = new Date(utcDate.getTime() - offset);

  const user_id = 1;
  const other = {
    user_id: 1,
    label: label,
    name: name,
    amount: amount,
    units: units,
    time: formData.get("time"),
    date: formData.get("date")
  };

  try {
    await sql`
          INSERT INTO others (user_id, label, name, amount, units, time, date)
        VALUES (${other.user_id}, ${other.label}, ${other.name}, ${other.amount}, ${other.units}, ${other.time}, ${localDate})
        ON CONFLICT (id) DO NOTHING;
        `;
    console.log(other.date);
  } catch (error) {
    return {
      error: error,
      message: "Database Error: Failed to add data."
    };
  }

  revalidatePath("/dashboard/status");
  redirect("/dashboard/status");
}
