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
  try {
    const LatestGlucose =
      await sql`SELECT * FROM others WHERE label = 'glucose' AND date::timestamp::date = CURRENT_DATE  ORDER BY date DESC LIMIT 1;`;
    const LatestIsulin =
      await sql`SELECT * FROM others WHERE label = 'insulin' AND date::timestamp::date = CURRENT_DATE ORDER BY date DESC LIMIT 1;`;
    const LatestBp =
      await sql`SELECT * FROM others WHERE label = 'bp' AND date::timestamp::date = CURRENT_DATE ORDER BY date DESC LIMIT 1;`;
    const LatestHb1ac =
      await sql`SELECT * FROM others WHERE label = 'hba1c' AND date::timestamp::date = CURRENT_DATE ORDER BY date DESC LIMIT 1;`;
    const TodayGlucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND date::timestamp::date = CURRENT_DATE`;
    const TodayInsulin =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin'  AND date::timestamp::date = CURRENT_DATE`;
    const TodayBp =
      await sql`SELECT SUM(amount)  FROM others WHERE label = 'bp' AND date::timestamp::date = CURRENT_DATE`;
    const TodayHb1ac =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'hba1c' AND  date::timestamp::date = CURRENT_DATE`;

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
  try {
    const TodayGlucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND date::timestamp::date = CURRENT_DATE`;
    const TodayInsulin =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND  date::timestamp::date = CURRENT_DATE`;
    const TodayBp =
      await sql`SELECT SUM(amount)  FROM others WHERE label = 'bp' AND date::timestamp::date = CURRENT_DATE`;
    const TodayHb1ac =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'hba1c' AND  date::timestamp::date = CURRENT_DATE`;
    const TodayCabs =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'carbs' AND  date::timestamp::date = CURRENT_DATE`;
    const TodayProtein =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'protein' AND  date::timestamp::date = CURRENT_DATE`;
    const TodayChol =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'cholestrol' AND  date::timestamp::date = CURRENT_DATE`;
    const TodayExe =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'execise' AND  date::timestamp::date = CURRENT_DATE`;

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
  try {
    const TodayMorning =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 6 AND EXTRACT(HOUR FROM time) <= 12 AND label = 'glucose' AND date::timestamp::date = CURRENT_DATE  `;
    const TodayAfternoon =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 12 AND EXTRACT(HOUR FROM time) <= 18 AND label = 'glucose' AND date::timestamp::date = CURRENT_DATE  `;
    const TodayAEvening =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 18 AND EXTRACT(HOUR FROM time) < 24  AND label = 'glucose' AND date::timestamp::date = CURRENT_DATE  `;
    const TodayNight =
      await sql`SELECT * FROM others WHERE EXTRACT(HOUR FROM time) >= 0 AND EXTRACT(HOUR FROM time) <= 6 AND label = 'glucose' AND date::timestamp::date = CURRENT_DATE
        `;
    const Test = sql`SELECT * FROM others WHERE date::timestamp::date = CURRENT_DATE `;

    const data = await Promise.all([
      TodayMorning,
      TodayAfternoon,
      TodayAEvening,
      TodayNight,
      Test
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
      await sql`SELECT * FROM others WHERE date::timestamp::date = CURRENT_DATE  ORDER BY time DESC`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchOtherdays() {
  try {
    const data =
      await sql`SELECT * FROM others WHERE date < NOW() - '1 day':: INTERVAL ORDER BY date DESC`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchChartGlucose() {
  try {
    const sun =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 0 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const mon =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 1 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const tue =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 2 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const wed =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 3 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const thu =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 4 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const fri =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 5 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const sat =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND EXTRACT(DOW FROM date::date) = 6 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;

    const data = await Promise.all([
      sun[0].sum ?? 0,
      mon[0].sum ?? 0,
      tue[0].sum ?? 0,
      wed[0].sum ?? 0,
      thu[0].sum ?? 0,
      fri[0].sum ?? 0,
      sat[0].sum ?? 0
    ]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchChartInsulin() {
  try {
    const sun =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 0 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const mon =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 1 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const tue =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 2 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const wed =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 3 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const thu =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 4 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const fri =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 5 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const sat =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(DOW FROM date::date) = 6 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;

    const data = await Promise.all([
      sun[0].sum ?? 0,
      mon[0].sum ?? 0,
      tue[0].sum ?? 0,
      wed[0].sum ?? 0,
      thu[0].sum ?? 0,
      fri[0].sum ?? 0,
      sat[0].sum ?? 0
    ]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
