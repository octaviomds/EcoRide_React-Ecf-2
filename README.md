# Projet Covoiturage

Application de covoiturage composee d'un frontend Angular, d'un frontend React et d'une base de donnees Supabase.

---

## Prerequis

- Node.js >= 18
- npm >= 9
- Un compte Supabase

---

## Structure du projet

```
projet/
├── angular-app/        # Frontend Angular
├── react-app/          # Frontend React (Vite)
└── supabase.ts         # Configuration base de donnees
```

---

## Installation

### Frontend Angular

```bash
npm create vite@latest angular-app
cd angular-app
npm install
```

Lors de la creation avec Vite, selectionner le framework **Angular** lorsque demande.

Lancer le serveur de developpement :

```bash
npm run dev
```

### Frontend React

```bash
npm create vite@latest react-app
cd react-app
npm install
```

Lors de la creation avec Vite, selectionner le framework **React** puis **TypeScript** lorsque demande.

Lancer le serveur de developpement :

```bash
npm run dev
```

---

## Base de donnees

Le projet utilise **Supabase** comme base de donnees.

### Configuration

Creer un projet sur [https://supabase.com](https://supabase.com), puis renseigner les variables dans le fichier `supabase.ts` a la racine :

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'VOTRE_URL_SUPABASE'
const supabaseKey = 'VOTRE_CLE_ANON'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Installer le client Supabase dans chaque application :

```bash
npm install @supabase/supabase-js
```

---

## Modules de l'application (React)

L'application React contient les modules suivants dans `src/app/in-app/` :

- `acces` : gestion des acces et des droits
- `chauffeur` : profil et gestion des chauffeurs
- `contact` : formulaire et page de contact
- `covoiturage` : creation et gestion des trajets
- `dashboard` : tableau de bord principal

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lancer le serveur de developpement |
| `npm run build` | Compiler pour la production |
| `npm run preview` | Previsualiser le build de production |

---

## Technologies utilisees

- Vite
- Angular
- React avec TypeScript
- Supabase (PostgreSQL)
- Ignite UI (`ig-theme.css`, `ignite-ui-cli.json`)


