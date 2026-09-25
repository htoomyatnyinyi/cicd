import { describe, expect, it } from "bun:test";
import { app } from "./index";

describe("Elysia app", () => {
  it("GET / returns message", async () => {
    const res = await app.handle(new Request("http://localhost/"));

    // res.json() အစား res.text() သုံးပါ
    const body = await res.text();

    expect(body).toBe("Hello from Elysia 🚀");
  });
});
