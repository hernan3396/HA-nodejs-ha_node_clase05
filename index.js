const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/clase05-ejercicio02", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const teamSchema = new mongoose.Schema({
  nombre: String,
});

const Team = mongoose.model("Team", teamSchema);

mongoose.connection.on("error", (err) => console.log(err));

mongoose.connection.once("open", async () => {
  console.log("Conexion exitosa");

  const team = new Team({
    nombre: "Uruguay",
  });

  try {
    const newTeam = await team.save();
    console.log(newTeam);
  } catch {
    console.log(err);
  }
});
