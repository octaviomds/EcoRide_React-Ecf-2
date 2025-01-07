DEPLOIEMENT AVEC VERCEL :


![Image 20-10-2024 à 22 11 2](https://github.com/user-attachments/assets/a4f349c8-3d2c-4290-8c76-f9c22e9e197a)


Ouvrez votre terminal ou Git Bash.
Exécutez les commandes suivantes pour créer un nouveau répertoire de projet et y naviguer :

mkdir vercel-app cd vercel-app

Initialisez le projet Node.js en exécutant :

npm init -y

Installez Express.js, un framework Node.js:

Installer npm express

creer un fichier index.js:
const express = require('express');
Const app = express();
const PORT = 4000;

app.get('/home', (req, res) => {
res.status(200).json 
}) ;

App.listen(PORT, () => {
  console.log(`Serveur fonctionnant sur http://localhost:${PORT}`) ;
}) ;

module.exports = application ;

ajouter un fichier gitignore

echo node_modules > .gitignore

creer un fichier vercel:
{
"version" : 2,
  "Construit" : [
{
"Src" : "index.js",
      "utilisation" : "@vercel/node"
}
],
"itinéraires" : [
{
"src" : "/(. *)",
      "dest" : "index.js"
}
]
}


Connectez-vous à votre compte Vercel et accédez à votre tableau de bord.
Cliquez sur "Nouveau projet" et importez le référentiel GitHub que vous venez de créer.
Après l'importation, configurez tous les paramètres nécessaires 
Cliquez sur « Déployer ».

creer une base de donnéés D' UN PROJET :

UNE BASE DE DONNÉES À VERCEL DANS NEON

Ouvrez votre base de données / projet Neon dans la console Neon

Pour ouvrir votre base de données / projet Neon dans la console Neon :

Dans l'onglet Stockage du tableau de bord Vercel, sélectionnez votre base de données.
Sur votre page de base de données, sélectionnez Ouvrir dans Neon Postgres.



lien:https://www.figma.com/@leomartin


![Image 20-10-2024 à 03 01 3](https://github.com/user-attachments/assets/9f3b4107-6d81-4963-a919-c73770619851)


![Image 20-10-2024 à 22 37](https://github.com/user-attachments/assets/42923823-cb55-49ba-afaf-3ea9fb75f215)
