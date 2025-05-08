# Test Tremplin - Majordhom

Projet de test technique pour l'agence Majordhom.  
Formulaire d'envoi de contact avec React + Node.js + MySQL + Docker.

## Technologies utilisées

- Frontend : React + Tailwind
- Backend : Express.js (Node.js)
- Base de données : MySQL (via Docker)
- Environnement local : Docker (MySQL, PhpMyAdmin)

## Démarrage

### 1. Cloner le projet :
git clone https://github.com/Marini237/test-tremplin.git
cd test-tremplin

### 2. Lancer la base de données (Docker)

docker compose up -d

Vérifiez que les conteneurs db-1 (MySQL) et apache-1 sont bien lancés.

### 3. Backend (Express)

cd backend
npm install
node server.js

Serveur écouté sur http://localhost:5000

### 4. Frontend (React)

cd ../frontend
npm install
npm run dev

Application disponible sur http://localhost:3000

### 📂 Base de données

Accès PhpMyAdmin : http://localhost:8080

Hôte : db

Utilisateur : root

Mot de passe : verysecurepassword

Table utilisée : messages_contact

### ✉️ Fonctionnalités

Validation des champs obligatoires

Enregistrement des données dans MySQL

Design responsive et soigné
