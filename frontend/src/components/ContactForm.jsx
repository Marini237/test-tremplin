import React, { useState } from "react";

const ContactForm = () => {
  const [civilite, setCivilite] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [slots, setSlots] = useState([]);
  const [motif, setMotif] = useState("");
  const [message, setMessage] = useState("");

  const addSlot = () => {
    if (day && hour && minute) {
      const slot = `${day} à ${hour}h${minute}`;
      setSlots([...slots, slot]);
      setDay("");
      setHour("");
      setMinute("");
    }
  };

  const removeSlot = (index) => {
    const updated = [...slots];
    updated.splice(index, 1);
    setSlots(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      civilite,
      nom,
      prenom,
      email,
      telephone,
      disponibilites: slots,
      motif,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("✅ Réponse du serveur :", result);
      alert("Formulaire envoyé avec succès !");

      // 🔄 Réinitialisation des champs
      setCivilite("");
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setDay("");
      setHour("");
      setMinute("");
      setSlots([]);
      setMotif("");
      setMessage("");
    } catch (error) {
      console.error("❌ Erreur d’envoi :", error);
      alert("Une erreur s’est produite lors de l’envoi.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-between items-start gap-6 px-6 py-8 h-full"
    >
      {/* Bloc gauche - Coordonnées */}
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <h2 className="text-white font-semibold uppercase tracking-wide">
          Vos coordonnées
        </h2>

        <div className="flex gap-4 text-white">
          <label>
            <input
              type="radio"
              name="civility"
              value="Mme"
              checked={civilite === "Mme"}
              onChange={(e) => setCivilite(e.target.value)}
              required
            />{" "}
            Mme
          </label>
          <label>
            <input
              type="radio"
              name="civility"
              value="M"
              checked={civilite === "M"}
              onChange={(e) => setCivilite(e.target.value)}
              required
            />{" "}
            M
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="rounded-full px-4 py-2 w-full"
            required
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="rounded-full px-4 py-2 w-full"
            required
          />
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-4 py-2 col-span-2 w-full"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="rounded-full px-4 py-2 col-span-2 w-full"
            required
          />
        </div>

        <h3 className="text-white font-semibold uppercase tracking-wide">
          Disponibilités pour une visite
        </h3>

        <div className="flex flex-wrap gap-2">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="rounded-full px-4 py-2 w-[100px]"
          >
            <option value="">Jour</option>
            {[
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi",
              "Vendredi",
              "Samedi",
              "Dimanche",
            ].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <select
  value={hour}
  onChange={(e) => setHour(e.target.value)}
  className="rounded-full px-4 py-2 w-[80px]"
>
  <option value="">h</option>
  {Array.from({ length: 11 }, (_, i) => {
    const h = (i + 8).toString().padStart(2, "0"); // De 08 à 18 inclus
    return (
      <option key={h} value={h}>
        {h}h
      </option>
    );
  })}
</select>


          <select
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className="rounded-full px-4 py-2 w-[80px]"
          >
            <option value="">m</option>
            {["00", "15", "30", "45"].map((m) => (
              <option key={m} value={m}>
                {m}m
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={addSlot}
            className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm"
          >
            Ajouter dispo
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {slots.map((slot, index) => (
            <li
              key={index}
              className="bg-white/20 text-white px-4 py-1 rounded-full text-sm flex justify-between items-center w-fit"
            >
              {slot}
              <button onClick={() => removeSlot(index)} className="ml-2">
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloc droit - Message */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h3 className="text-white font-semibold uppercase tracking-wide">
          Votre message
        </h3>

        <div className="flex flex-wrap gap-3 text-white">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="motif"
              value="visite"
              checked={motif === "visite"}
              onChange={(e) => setMotif(e.target.value)}
              required
            />
            Demande de visite
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="motif"
              value="rappel"
              checked={motif === "rappel"}
              onChange={(e) => setMotif(e.target.value)}
            />
            Être rappelé
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="motif"
              value="photos"
              checked={motif === "photos"}
              onChange={(e) => setMotif(e.target.value)}
            />
            Plus de photos
          </label>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          className="w-full rounded-3xl p-4 resize-none min-h-[160px]"
          required
        ></textarea>

        <div className="flex justify-start md:justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold uppercase"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
