import postgres from "postgres";
import { OtherTable } from "./dashboard-definations";
import { NextResponse } from "next/server";
import sql from "./db";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchOtherData() {
  try {
    const data = await sql<OtherTable[]>`SELECT * FROM others`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
export async function fechLatestOther() {
  const today = new Date();
  const today_string = new Date().toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterday_string = new Date(yesterday).toISOString().split("T")[0];

  try {
    const LatestGlucose =
      await sql`SELECT * FROM others WHERE label = 'glucose' ORDER BY date DESC LIMIT 1;`;
    const LatestIsulin =
      await sql`SELECT * FROM others WHERE label = 'insulin' ORDER BY date DESC LIMIT 1;`;
    const LatestBp =
      await sql`SELECT * FROM others WHERE label = 'bp' ORDER BY date DESC LIMIT 1;`;
    const LatestHb1ac =
      await sql`SELECT * FROM others WHERE label = 'hba1c' ORDER BY date DESC LIMIT 1;`;
    const TodayGlucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayInsulin =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayBp =
      await sql`SELECT SUM(amount)  FROM others WHERE label = 'bp' AND (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayHb1ac =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'hba1c' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;

    const data = await Promise.all([
      LatestGlucose,
      LatestIsulin,
      LatestHb1ac,
      LatestBp,
      TodayGlucose,
      TodayInsulin,
      TodayBp,
      TodayHb1ac
    ]);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchNotification() {
  const today = new Date();
  const today_string = new Date().toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterday_string = new Date(yesterday).toISOString().split("T")[0];

  try {
    const TodayGlucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayInsulin =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayBp =
      await sql`SELECT SUM(amount)  FROM others WHERE label = 'bp' AND (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayHb1ac =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'hba1c' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayCabs =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'carbs' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayProtein =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'protein' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayChol =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'cholestrol' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;
    const TodayExe =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'execise' AND  (date BETWEEN ${yesterday_string} AND ${today_string} )`;

    const data = await Promise.all([
      TodayGlucose,
      TodayInsulin,
      TodayBp,
      TodayHb1ac,
      TodayCabs,
      TodayProtein,
      TodayChol,
      TodayExe
    ]);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function FetchGlucose() {
  const today = new Date();
  const today_string = new Date().toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterday_string = new Date(yesterday).toISOString().split("T")[0];
  console;

  try {
    const TodayMorning =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 18 AND EXTRACT(HOUR FROM time) <= 12 AND label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )  `;
    const TodayAfternoon =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 12 AND EXTRACT(HOUR FROM time) <= 18 AND label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )  `;
    const TodayAEvening =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 18 AND EXTRACT(HOUR FROM time) < 24  AND label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )  `;
    const TodayNight =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 12 AND EXTRACT(HOUR FROM time) <= 16 AND label = 'glucose' AND (date BETWEEN ${yesterday_string} AND ${today_string} )  `;

    const data = await Promise.all([
      TodayMorning,
      TodayAfternoon,
      TodayAEvening,
      TodayNight
    ]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchAlertToday() {
  try {
    const data =
      await sql`SELECT * FROM others WHERE date > NOW() - '1 day':: INTERVAL  ORDER BY time DESC`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchOtherdays() {
  const today = new Date();
  const today_string = new Date().toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterday_string = new Date(yesterday).toISOString().split("T")[0];

  try {
    const data =
      await sql`SELECT * FROM others WHERE date < NOW() - '1 day':: INTERVAL ORDER BY date DESC`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
