import sql from "@/app/lib/db";

export async function fetchChartGlucose() {
  try {
    const min_glucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND amount < 4 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const normal_glucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND amount >= 4 AND amount <= 8 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const max_glucose =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'glucose' AND amount > 8 AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;

    const data = await Promise.all([
      min_glucose[0].sum ?? 0,
      normal_glucose[0].sum ?? 0,
      max_glucose[0].sum ?? 0
    ]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchChartInsulin() {
  try {
    const carbs =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'carbs' AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const insulin =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'insulin' AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;

    const data = await Promise.all([carbs[0].sum ?? 0, insulin[0].sum ?? 0]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchChartMeal() {
  try {
    const carbs =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'carbs' AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const protein =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'protein' AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;
    const cholestrol =
      await sql`SELECT SUM(amount) FROM others WHERE label = 'cholestrol' AND EXTRACT(WEEK FROM date) = EXTRACT(WEEK FROM CURRENT_DATE)`;

    const data = await Promise.all([
      carbs[0].sum ?? 0,
      protein[0].sum ?? 0,
      cholestrol[0].sum ?? 0
    ]);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
