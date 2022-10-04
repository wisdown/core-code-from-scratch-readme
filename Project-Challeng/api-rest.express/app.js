const expres = require("express");

const app = expres();

app.get("/ping", (req, res) => {
  const pong={
    "message":" pong"
  }
  res.send(pong);
});

app.get("/pong", (req, res) => {
  const ping={
    "message":" ping"
  }
  res.send(ping);
});

app.listen("3000", () => {
  console.log("Correiendo en el puerto 3000");
});
