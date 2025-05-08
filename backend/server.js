const express = require("express");
const cors = require("cors");
const pool = require("./db.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const {
    civilite,
    nom,
    prenom,
    email,
    telephone,
    disponibilites,
    motif,
    message,
  } = req.body;

  const dispo = disponibilites.join(", ");

  pool.query(
    `INSERT INTO messages_contact (civilite, nom, prenom, email, telephone, disponibilites, motif, message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [civilite, nom, prenom, email, telephone, dispo, motif, message],
    (err, results) => {
      if (err) {
        console.error("Erreur MySQL :", err);
        return res.status(500).json({ message: "Erreur enregistrement DB ❌" });
      }

      // ✅ Une seule réponse envoyée
      res.status(200).json({ message: "Formulaire enregistré en base ✅" });
    }
  );
});

app.listen(PORT, () =>
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
);
