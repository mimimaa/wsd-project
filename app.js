import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();
const kv = await Deno.openKv();

async function getFeedbackCount(feedbackValue) {
  const key = ["feedback", feedbackValue.toString()];
  const res = await kv.get(key);
  return res.value ?? 0;
}

async function incrementFeedbackCount(feedbackValue) {
  const key = ["feedback", feedbackValue.toString()];
  const count = await getFeedbackCount(feedbackValue);
  await kv.set(key, count + 1);
}

app.get("/feedbacks/:value", async (c) => {
  const value = c.req.param("value");
  const feedbackCount = await getFeedbackCount(value);
  return c.text(`Feedback ${value}: ${feedbackCount}`);
});

app.post("/feedbacks/:value", async (c) => {
  const value = c.req.param("value");
  await incrementFeedbackCount(value);
  return c.text(`Feedback ${value} incremented`);
});

export default app;