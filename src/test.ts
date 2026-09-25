import { describe, expect, it } from "bun:test";
import { app } from "./index";

describe("Elysia app", () => {
  it("GET / returns message", async () => {
    const res = await app.handle(new Request("http://localhost/"));
    const body = await res.json();
    expect(body.message).toBe("Hello from Elysia 🚀");
  });
});
