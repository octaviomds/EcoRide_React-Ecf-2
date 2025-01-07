DEPLOIEMENT AVEC VERCEL :


![Image 20-10-2024 à 22 11 2](https://github.com/user-attachments/assets/a4f349c8-3d2c-4290-8c76-f9c22e9e197a)

CONFIGURER L'ENVIRONNEMENT DE TRAVAIL:

Installation 

utilisation de Node, Watchman, de l'interface de ligne de commande React Native, de Xcode et CocoaPods.

utiliser l' éditeur de texte pour développer l' application, il faut installer Xcode afin de configurer les outils nécessaires pour créer votre application React Native pour iOS.

NODE ET WATCHMAN

installer Node et Watchman en utilisant Homebrew. Exécutez les commandes suivantes dans un terminal après l'installation de Homebrew :

SHELL

brew install node
brew install watchman


Watchman est un outil de Facebook pour surveiller les changements dans le système de fichiers. 

XCODE

utiliser la dernière version de Xcode.

 L'installation de Xcode installera également le simulateur iOS et tous les outils nécessaires pour créer l' application iOS.

Outils de ligne de commande

 installation des outils de ligne de commande Xcode. Ouvrir Xcode, puis choisir Paramètres... (ou Préférences...) dans le menu Xcode. configuration dans le panneau Emplacements et installez les outils en sélectionnant la version la plus récente dans le menu déroulant Outils de ligne de commande.

Outils de ligne de commande Xcode

Installation d'un simulateur iOS dans Xcode

Pour installer un simulateur, ouvrez Xcode > Paramètres... (ou Préférences...) et sélectionnez l'onglet Plateformes (ou Composants). Sélectionnez un simulateur avec la version correspondante d'iOS pour l'utiliser.


utilisez Xcode version 14.0 ou supérieure pour installer un simulateur, ouvrez l'onglet Xcode > Paramètres > Plateformes, puis cliquez sur l'icône "+" et sélectionnez l'option iOS...

CacaoPods

CocoaPods est l'un des systèmes de gestion des dépendances disponibles pour iOS. CocoaPods  Ruby.  installer CocoaPods en utilisant la version de Ruby fournie avec la dernière version de macOS.

AUTRE FACON DE DEPLOYER AVEC VERCEL

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


Connectez au compte Vercel et accédez à votre tableau de bord.
Cliquez sur "Nouveau projet" et importez le référentiel GitHub créer.
Après l'importation, configuration tous les paramètres nécessaires 
Cliquez sur « Déployer ».

 modifier ou creer une base de donnéés D'un projet  :

UNE BASE DE DONNÉES À VERCEL DANS NEON

Ouvrez votre base de données / projet Neon dans la console Neon

Pour ouvrir votre base de données / projet Neon dans la console Neon :

Dans l'onglet Stockage du tableau de bord Vercel, sélectionnez votre base de données.
Sur votre page de base de données, sélectionnez Ouvrir dans Neon Postgres.



lien:https://www.figma.com/@leomartin


![Image 20-10-2024 à 03 01 3](https://github.com/user-attachments/assets/9f3b4107-6d81-4963-a919-c73770619851)


![Image 20-10-2024 à 22 37](https://github.com/user-attachments/assets/42923823-cb55-49ba-afaf-3ea9fb75f215)
