import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visitService from "./visit.js";

const app = new Hono();

app.get("/", async (c) => {
  await visitService.incrementVisit(); 
  return c.text("Hello world!");
});

app.get("/visits", async (c) => {
  const visits = await visitService.getVisit(); 
  return c.text(`Visit count: ${visits}`);
});

export default app;
