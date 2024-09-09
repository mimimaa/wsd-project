import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as storeService from "./store.js";

const app = new Hono();

app.get("/", (c) => {  
    const storeParam = c.req.query("store");

    console.log(`Query parameter 'store': ${storeParam}`);

    if (storeParam) {
        storeService.setStore(storeParam);
        console.log(`after Setting store with value: ${storeService.getStore()}`);
    }
    
    return c.text(`Store: ${storeService.getStore()}`);
    });

export default app;