import bcrypt from "bcryptjs";
import postgres from "postgres";

import sql from "../lib/db";
import { users, patients, others } from "../lib/dashboard-data";

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedOthers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS others (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id INT NOT NULL,
      label VARCHAR(20) NOT NULL,
      name VARCHAR(20) NOT NULL,
      amount FLOAT NOT NULL,
      units VARCHAR(20) NOT NULL,
      time TIME NOT NULL,
      date TIMESTAMPTZ NOT NULL
    );
  `;
  const li = [
    {
      user_id: 1,
      label: "bp",
      name: "Test",
      amount: 120,
      units: "bpm",
      time: "02:30",
      date: "2025-04-16T00:00:00.000Z"
    }
  ];
  const insertedOthers = await Promise.all(
    others.map(
      (other) => sql`
        INSERT INTO others (user_id, label, name, amount, units, time, date)
        VALUES (${other.user_id}, ${other.label}, ${other.name}, ${other.amount}, ${other.units}, ${other.time}, ${other.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedOthers;
}

async function seedPatients() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS patients (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      patient_id UUID NOT NULL,
      name VARCHAR(50) NOT NULL,
      gender VARCHAR(10) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      dob DATE NOT NULL,
      email TEXT NOT NULL,
      image_url TEXT NOT NULL
    );
  `;

  const insertedPatients = await Promise.all(
    patients.map(
      (patient) => sql`
        INSERT INTO patients (patient_id, name, gender, phone, dob, email, image_url)
        VALUES (${patient.patient_id},${patient.name}, ${patient.gender}, ${patient.phone}, ${patient.dob}, ${patient.email}, ${patient.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedPatients;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      // seedCustomers(),
      // seedInvoices(),
      // seedRevenue(),
      seedOthers(),
      seedPatients()
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
