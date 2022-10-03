const expres = require("express");

const app = expres();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen("3000", () => {
  console.log("Correiendo en el puerto 3000");
});
