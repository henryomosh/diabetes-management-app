//@ts-nocheck
import pool from "./db";

export default async function handler(req, res) {
  try {
    const result = await pool.query("SELECT * from test");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Inter err" });
  }
}
