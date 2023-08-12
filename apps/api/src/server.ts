import express from "express";
import payload from "payload";

const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    mongoOptions: {
      dbName: process.env.DB_NAME,
    },
  });

  // Add your own express routes here

  app.listen(process.env.PAYLOAD_PORT ?? 3000);
};

start();
