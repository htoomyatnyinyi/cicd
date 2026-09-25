import { describe, expect, it } from "bun:test";
import { app } from "./index";

describe("Elysia app", () => {
  it("GET / returns message", async () => {
    const res = await app.handle(new Request("http://localhost/"));

    // res.text() အစား res.json() ကို ပြောင်းသုံးပါ
    const body = await res.json();

    // body ထဲက message ကို ယူပြီး စစ်ပါ
    expect(body.message).toBe("Hello from Elysia 🚀");
  });
});

// import { describe, expect, it } from "bun:test";
// import { app } from "./index";

// describe("Elysia app", () => {
//   it("GET / returns message", async () => {
//     const res = await app.handle(new Request("http://localhost/"));

//     // res.json() အစား res.text() သုံးပါ
//     const body = await res.text();

//     expect(body).toBe("Hello from Elysia 🚀");
//   });
// });
