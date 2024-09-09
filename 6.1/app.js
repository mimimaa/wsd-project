import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as storeService from "./store.js";

const app = new Hono();

app.get("/", async (c) => {  
    const storeParam = c.req.query("store");

    if (storeParam) {
        await storeService.setStore(storeParam);
    }
    
    const storeValue = await storeService.getStore();
    //console.log(`Store: ${storeValue}`) 
    return c.text(`Store: ${storeValue}`);
    });

export default app;