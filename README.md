<div align="center">

# 🍹 Cocktails Angular 20

### _Application moderne de gestion de cocktails_

[![Angular](https://img.shields.io/badge/Angular-20.3.0-dd0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.35.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)

_Projet de formation développé avec les dernières fonctionnalités Angular_

[📖 Documentation](#-table-des-matières) • [🚀 Démarrage rapide](#-démarrage-rapide) • [🏗️ Architecture](#️-architecture) • [💡 Fonctionnalités](#-fonctionnalités-à-venir)

</div>

---

## 📋 Table des matières

- [✨ À propos](#-à-propos)
- [🎯 Fonctionnalités actuelles](#-fonctionnalités-actuelles)
- [💡 Fonctionnalités à venir](#-fonctionnalités-à-venir)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [🚀 Démarrage rapide](#-démarrage-rapide)
- [📁 Structure du projet](#-structure-du-projet)
- [🏗️ Architecture](#️-architecture)
- [📜 Scripts disponibles](#-scripts-disponibles)
- [⚙️ Configuration](#️-configuration)
- [✅ Bonnes pratiques](#-bonnes-pratiques)
- [📚 Ressources](#-ressources)
- [👨‍💻 Développement](#-développement)

---

## ✨ À propos

**Cocktails Angular 20** est une application web moderne permettant de découvrir et gérer une collection de cocktails. Ce projet utilise les **dernières fonctionnalités d'Angular** et démontre l'application des meilleures pratiques de développement front-end.

### 🎓 Contexte

Ce projet est développé dans un cadre de formation avec l'organisme **Dyma** et met en œuvre :

- 🔥 **Architecture Standalone** (sans NgModules)
- ⚡ **Zoneless Change Detection** pour des performances optimales
- 🎯 **OnPush Strategy** sur tous les composants
- 📦 **ESM Modules** (dernière norme JavaScript)
- 🎨 **Design System** avec variables CSS personnalisées

---

## 🎯 Fonctionnalités actuelles

### Interface utilisateur

- ✅ **Header responsive** avec navigation
- ✅ **Liste des cocktails** avec design card moderne
- ✅ **Panneau de détails** affichant les informations d'un cocktail
- ✅ **Footer** avec informations de copyright
- ✅ **Layout en colonnes** 50/50 pour liste et détails

### Données

- 📊 Affichage des informations de cocktails (nom, image, description)
- 🎨 Interface utilisateur entièrement stylisée avec SCSS

---

## 💡 Fonctionnalités à venir

### Phase 1 : Logique métier 🔧

- [ ] **Service CocktailsService** pour la gestion centralisée des données
- [ ] **Communication parent-enfant** avec @Input/@Output
- [ ] **Gestion de l'état** avec Angular Signals
- [ ] **Sélection interactive** d'un cocktail dans la liste

### Phase 2 : Navigation 🧭

- [ ] **Routing** avec Angular Router
- [ ] **Routes principales** : `/cocktails`, `/cocktails/:id`, `/panier`
- [ ] **Lazy Loading** des modules
- [ ] **Guards** pour la protection des routes

### Phase 3 : Fonctionnalités avancées 🚀

- [ ] **Formulaire d'ajout** de cocktail avec validation
- [ ] **Système de panier** avec gestion du state
- [ ] **API REST** pour récupérer les cocktails
- [ ] **Recherche et filtres** avancés
- [ ] **Animations Angular** pour les transitions

### Phase 4 : Tests et optimisation ✨

- [ ] **Tests unitaires** avec Jasmine/Karma
- [ ] **Tests E2E** avec Cypress ou Playwright
- [ ] **Optimisation des images** avec ngSrc
- [ ] **Progressive Web App** (PWA)

---

## 🛠️ Technologies utilisées

### Framework et langages

| Technologie | Version | Description |
|------------|---------|-------------|
| ![Angular](https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white) | 20.3.0 | Framework web moderne |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | 5.9.2 | Langage typé pour JavaScript |
| ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?style=flat-square&logo=sass&logoColor=white) | - | Préprocesseur CSS |
| ![RxJS](https://img.shields.io/badge/-RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white) | 7.8.0 | Programmation réactive |

### Outils de développement

| Outil | Version | Description |
|-------|---------|-------------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | 9.35.0 | Linter JavaScript/TypeScript |
| ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black) | 3.6.2 | Formateur de code |
| ![EditorConfig](https://img.shields.io/badge/-EditorConfig-FEFEFE?style=flat-square&logo=editorconfig&logoColor=black) | - | Configuration d'éditeur |

### Particularités techniques

- 🔄 **Zoneless Change Detection** : Détection de changements sans Zone.js
- 🧩 **Standalone Components** : Architecture moderne sans NgModules
- ⚡ **OnPush Strategy** : Stratégie de détection optimisée
- 📦 **ES Modules** : Système de modules JavaScript natif

---

## 🚀 Démarrage rapide

### Prérequis

Assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
- **pnpm** (gestionnaire de paquets recommandé)

```bash
# Installer pnpm si nécessaire
npm install -g pnpm
```

### Installation

```bash
# 1. Cloner le projet
git clone https://github.com/Caparzofpc/Cocktails-Angular20-Project.git

# 2. Se déplacer dans le dossier
cd Cocktails-Angular20-Project

# 3. Installer les dépendances
pnpm install

# 4. Lancer le serveur de développement
pnpm start
```

🌐 L'application sera accessible sur **http://localhost:4200**

---

## 📁 Structure du projet

```
Cocktails-Angular20-Project/
│
├── 📂 src/
│   ├── 📂 app/                          # Code source de l'application
│   │   ├── 📂 components/               # Composants Angular
│   │   │   ├── 📂 cocktails/            # Feature Cocktails
│   │   │   │   ├── 📂 components/       # Sous-composants
│   │   │   │   │   ├── 📂 cocktail-details/    # Détails d'un cocktail
│   │   │   │   │   └── 📂 cocktails-list/      # Liste des cocktails
│   │   │   │   ├── cocktails.ts        # Composant conteneur
│   │   │   │   ├── cocktails.html      # Template
│   │   │   │   └── cocktails.scss      # Styles
│   │   │   ├── 📂 header/               # En-tête de l'application
│   │   │   └── 📂 footer/               # Pied de page
│   │   │
│   │   ├── 📂 shared/                   # Ressources partagées
│   │   │   └── 📂 interfaces/           # Interfaces TypeScript
│   │   │       └── cocktails.interface.ts
│   │   │
│   │   ├── app.ts                       # Composant racine
│   │   ├── app.html                     # Template racine
│   │   ├── app.scss                     # Styles racine
│   │   └── app.config.ts                # Configuration de l'app
│   │
│   ├── 📂 styles/                       # Styles globaux
│   │   ├── _variables.scss              # Variables CSS (couleurs, tailles)
│   │   ├── _utils.scss                  # Classes utilitaires
│   │   ├── _reset.scss                  # Reset CSS
│   │   └── theme.scss                   # Thème de l'application
│   │
│   ├── index.html                       # Point d'entrée HTML
│   ├── main.ts                          # Point d'entrée TypeScript
│   └── styles.scss                      # Styles principaux
│
├── 📂 public/                           # Assets statiques
│   └── favicon.ico
│
├── 📄 angular.json                      # Configuration Angular CLI
├── 📄 tsconfig.json                     # Configuration TypeScript
├── 📄 eslint.config.js                  # Configuration ESLint
├── 📄 .prettierrc.yaml                  # Configuration Prettier
├── 📄 .editorconfig                     # Configuration éditeur
├── 📄 package.json                      # Dépendances du projet
└── 📄 README.md                         # Documentation (ce fichier)
```

---

## 🏗️ Architecture

### Hiérarchie des composants

```
App (Racine)
│
├── Header (En-tête)
│   └── Navigation
│
├── Cocktails (Conteneur)
│   ├── CocktailsList (Liste)
│   │   ├── Liste de cocktails
│   │   └── Bouton d'ajout
│   │
│   └── CocktailDetails (Détails)
│       ├── Image
│       ├── Nom
│       └── Description
│
└── Footer (Pied de page)
```

### Flux de données

```
┌──────────────────────────────────────┐
│         App Component                │
│      (Composant racine)              │
└─────────────┬────────────────────────┘
              │
    ┌─────────┴──────────┐
    │                    │
┌───▼────┐         ┌─────▼─────┐
│ Header │         │  Cocktails│
└────────┘         │ (Container)│
                   └─────┬──────┘
                         │
              ┌──────────┴───────────┐
              │                      │
      ┌───────▼────────┐    ┌────────▼───────┐
      │ CocktailsList  │    │ CocktailDetails│
      │   (Liste)      │    │   (Détails)    │
      └────────────────┘    └────────────────┘
```

> 💡 **À venir** : Communication entre CocktailsList et CocktailDetails via un service partagé ou des signaux Angular

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm start` | 🚀 Lance le serveur de développement (port 4200) |
| `pnpm build` | 🏗️ Compile le projet pour la production |
| `pnpm watch` | 👀 Compile en mode watch (recompile à chaque changement) |
| `pnpm test` | 🧪 Lance les tests unitaires avec Karma |
| `pnpm lint` | 🔍 Analyse le code avec ESLint |
| `pnpm linter` | 🔍 Lance ESLint directement (sans Angular CLI) |

### Exemples d'utilisation

```bash
# Développement
pnpm start

# Production
pnpm build
cd dist/cocktails/browser
# Servir les fichiers avec un serveur HTTP

# Tests
pnpm test

# Linting
pnpm lint
```

---

## ⚙️ Configuration

### ESLint 🔍

Le projet utilise une configuration ESLint **très stricte** pour garantir la qualité du code :

#### Règles Angular
- ✅ Préfixe `app` obligatoire pour les composants et directives
- ✅ OnPush change detection recommandée
- ✅ Standalone components préférés
- ✅ Signals Angular encouragés

#### Règles TypeScript
- ✅ Types de retour explicites obligatoires
- ✅ Pas de `any` (warning)
- ✅ Utilisation de `type` au lieu d'`interface`
- ✅ Convention de nommage stricte

#### Règles JavaScript
- ✅ Égalité stricte (`===`) obligatoire
- ✅ Maximum 400 lignes par fichier
- ✅ Complexité cyclomatique max : 20
- ✅ `const` préféré à `let`

#### Règles Templates
- ✅ Ordre alphabétique des attributs
- ✅ Utilisation de `@if` / `@for` (nouvelle syntaxe)
- ✅ `type` obligatoire sur les boutons
- ✅ Règles d'accessibilité (a11y)

> 📖 Voir [eslint.config.js](./eslint.config.js) pour la configuration complète commentée

### Prettier 🎨

Configuration de formatage automatique :

- **Largeur max** : 100 caractères
- **Indentation** : 2 espaces
- **Quotes** : Simples (`'`)
- **Point-virgules** : Oui
- **Virgules finales** : Partout
- **Fin de ligne** : LF (Linux/macOS)

> 📖 Voir [.prettierrc.yaml](./.prettierrc.yaml) pour tous les détails

### EditorConfig ✏️

Assure la cohérence entre les éditeurs :

- **Encodage** : UTF-8
- **Indentation** : 2 espaces
- **Fin de ligne** : LF
- **Ligne vide finale** : Oui
- **Suppression espaces en fin de ligne** : Oui

> 📖 Voir [.editorconfig](./.editorconfig) pour la configuration complète

### TypeScript 📘

Configuration stricte du compilateur TypeScript :

- ✅ **Mode strict** activé
- ✅ **strictTemplates** pour les templates Angular
- ✅ **Target** : ES2022
- ✅ **Module** : preserve

---

## ✅ Bonnes pratiques

Ce projet met en œuvre de nombreuses bonnes pratiques Angular :

### Architecture 🏛️

- ✅ **Composants Standalone** : Pas d'utilisation de NgModules
- ✅ **Organisation par features** : Structure modulaire et scalable
- ✅ **Séparation des responsabilités** : Composants smart vs dumb
- ✅ **Composants réutilisables** : Composants découpés et spécialisés

### Performance ⚡

- ✅ **OnPush Change Detection** : Sur tous les composants
- ✅ **Zoneless** : Pas de Zone.js (améliore les performances)
- ✅ **Lazy loading** : Prêt pour le chargement différé (à implémenter)
- ✅ **TrackBy functions** : Recommandé pour les listes (via ESLint)

### Qualité de code 💎

- ✅ **TypeScript strict** : Typage fort partout
- ✅ **ESLint + Prettier** : Code formaté et analysé automatiquement
- ✅ **Conventions de nommage** : Cohérentes dans tout le projet
- ✅ **Code documenté** : Commentaires en français dans tous les fichiers

### CSS/SCSS 🎨

- ✅ **Variables CSS** : Thème centralisé et maintenable
- ✅ **Classes utilitaires** : Approche utility-first (comme Tailwind)
- ✅ **Scopage des styles** : Styles encapsulés par composant
- ✅ **SCSS moderne** : Utilisation de `@use` au lieu de `@import`

### Sécurité 🔒

- ✅ **Pas de eval()** : Interdit par ESLint
- ✅ **Pas de any** : Warning si utilisé
- ✅ **Validation stricte** : Types explicites partout

---

## 📚 Ressources

### Documentation officielle

- 📖 [Angular Documentation](https://angular.io/docs)
- 📖 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 📖 [RxJS Documentation](https://rxjs.dev/)
- 📖 [SCSS Guide](https://sass-lang.com/guide)

### Guides et tutoriels

- 🎓 [Angular Best Practices](https://angular.io/guide/styleguide)
- 🎓 [ESLint Rules](https://eslint.org/docs/rules/)
- 🎓 [Prettier Options](https://prettier.io/docs/en/options.html)

### Outils utiles

- 🛠️ [Angular CLI](https://angular.io/cli)
- 🛠️ [Angular DevTools](https://angular.io/guide/devtools)
- 🛠️ [VS Code Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)

---

## 👨‍💻 Développement

### Environnement recommandé

**IDE/Éditeur** :
- [Visual Studio Code](https://code.visualstudio.com/) avec les extensions :
  - Angular Language Service
  - ESLint
  - Prettier - Code formatter
  - EditorConfig for VS Code

**Extensions Chrome/Firefox** :
- Angular DevTools (pour le debugging)

### Commandes Git

```bash
# Cloner le projet
git clone https://github.com/Caparzofpc/Cocktails-Angular20-Project.git

# Créer une branche pour une nouvelle feature
git checkout -b feature/nom-de-la-feature

# Commiter les changements
git add .
git commit -m "Description des changements"

# Pousser vers le dépôt
git push origin feature/nom-de-la-feature
```

### Conventions de commit

Le projet suit les [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, style
- `refactor:` Refactorisation
- `test:` Ajout de tests
- `chore:` Tâches diverses

**Exemples** :
```bash
feat: add cocktail search feature
fix: resolve navigation bug in header
docs: update README with new architecture
style: format code with prettier
```

---

## 📝 Licence

Ce projet est développé dans un cadre de formation avec **Dyma**.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Fork le projet
2. 🌿 Créer une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Commiter vos changements (`git commit -m 'feat: Add some AmazingFeature'`)
4. 📤 Pousser vers la branche (`git push origin feature/AmazingFeature`)
5. 🔍 Ouvrir une Pull Request

---

## 📞 Contact

Pour toute question sur ce projet, n'hésitez pas à ouvrir une issue sur GitHub.

---

<div align="center">

**Développé avec ❤️ et Angular 20**

[![Angular](https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

_© Dyma 2025-2026_

[⬆ Retour en haut](#-cocktails-angular-20)

</div>
