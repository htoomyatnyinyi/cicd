import { Elysia } from "elysia";

export const app = new Elysia()
  // object ပြန်ပေးဖို့ () => ({ ... }) ပုံစံသုံးပါ
  .get("/", () => ({ message: "Hello from Elysia 🚀" }))
  .get("/health", () => ({ status: "ok" }));

if (import.meta.main) {
  app.listen(process.env.PORT ?? 3000);
}

// import { Elysia } from "elysia";

// export const app = new Elysia()
//   .get("/", () => "Hello Elysia")
//   .get("/health", () => ({ status: "ok" }))
//   .get("/test", () => "Hello Elysia Test")
//   .listen(3000);

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
// );
