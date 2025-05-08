import React from "react";
import ContactForm from "./components/ContactForm";
import background from "./assets/salon.png";
import "./index.css"; // Assure que Montserrat est bien importée

function App() {
  return (
    <div
      className="w-full h-screen bg-white flex items-center justify-center p-0 m-0 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-3xl z-0"
      />
      <div
        className="w-full max-w-6xl h-[90%] backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl py-6 px-2 md:px-6  relative z-10
"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <h1 className="text-4xl font-bold text-left mb-8 text-white font-semibold uppercase tracking-wide">
          Contactez l'agence
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
