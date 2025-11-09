/**
 * Configuration ESLint pour le projet Angular
 *
 * Ce fichier définit toutes les règles de qualité de code pour :
 * - Les fichiers TypeScript (.ts)
 * - Les templates Angular (.html)
 *
 * ESLint aide à maintenir un code propre, cohérent et sans erreurs courantes.
 */

// Active la vérification de types TypeScript dans ce fichier de config
// @ts-check

// Imports des différents plugins et configurations ESLint
import eslint from '@eslint/js'; // Configuration de base JavaScript
import stylistic from '@stylistic/eslint-plugin'; // Règles de style et formatage
import angular from 'angular-eslint'; // Règles spécifiques Angular
import eslintConfigPrettier from 'eslint-config-prettier'; // Désactive les règles en conflit avec Prettier
import tseslint from 'typescript-eslint'; // Règles TypeScript

/**
 * Export de la configuration ESLint
 * Le fichier contient deux blocs de configuration :
 * 1. Configuration pour les fichiers TypeScript (.ts)
 * 2. Configuration pour les templates Angular (.html)
 */
export default tseslint.config(
  // ========================================
  // CONFIGURATION POUR LES FICHIERS TYPESCRIPT
  // ========================================
  {
    // Fichiers et dossiers à ignorer lors du linting
    ignores: ['.angular/**', '.nx/**', 'coverage/**', 'dist/**'],

    // Applique cette config à tous les fichiers TypeScript
    files: ['**/*.ts'],

    // Plugins utilisés
    plugins: {
      '@stylistic': stylistic, // Pour les règles de style (longueur de ligne, etc.)
    },

    // Configurations de base étendues (applique des ensembles de règles prédéfinis)
    extends: [
      eslint.configs.recommended,        // Règles JavaScript recommandées
      ...tseslint.configs.recommended,   // Règles TypeScript recommandées
      ...tseslint.configs.stylistic,     // Règles de style TypeScript
      ...angular.configs.tsRecommended,  // Règles Angular pour TypeScript
      eslintConfigPrettier,              // Désactive les règles conflictuelles avec Prettier
    ],

    // Processeur pour analyser les templates inline dans les composants Angular
    processor: angular.processInlineTemplates,

    // ========================================
    // RÈGLES PERSONNALISÉES
    // ========================================
    rules: {
      // ====================================
      // RÈGLES ANGULAR - Sélecteurs
      // ====================================

      // Force les directives à utiliser le préfixe 'app' et le style camelCase
      // Exemple : <div appHighlight> ✓  | <div highlight> ✗
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],

      // Force les composants à utiliser le préfixe 'app' et le style kebab-case
      // Exemple : <app-header> ✓  | <header> ✗
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['attribute', 'element'],
          prefix: 'app',
          style: 'kebab-case',
        },
      ],

      // ====================================
      // RÈGLES ANGULAR - Bonnes Pratiques
      // ====================================

      // Avertit si une méthode de cycle de vie (ngOnInit, etc.) est vide
      // Mieux vaut supprimer les méthodes vides pour garder le code propre
      '@angular-eslint/no-empty-lifecycle-method': 'warn',

      // Encourage l'utilisation de OnPush pour améliorer les performances
      // OnPush réduit les vérifications de changements inutiles
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',

      // Recommande de rendre les @Output() readonly pour éviter les modifications accidentelles
      '@angular-eslint/prefer-output-readonly': 'warn',

      // Encourage l'utilisation des Signals (Angular 16+) pour la réactivité
      // Les Signals sont plus performants que les observables pour certains cas
      '@angular-eslint/prefer-signals': 'warn',

      // Encourage l'utilisation de composants standalone (sans NgModule)
      // C'est l'approche moderne recommandée par Angular
      '@angular-eslint/prefer-standalone': 'warn',

      // ====================================
      // RÈGLES TYPESCRIPT - Bonnes Pratiques
      // ====================================

      // Force une syntaxe cohérente pour les tableaux : type[] au lieu de Array<type>
      '@typescript-eslint/array-type': ['warn'],

      // Désactivé : permet d'utiliser librement Record<> ou { [key: string]: type }
      '@typescript-eslint/consistent-indexed-object-style': 'off',

      // Force une syntaxe cohérente pour les assertions de type
      // Préfère 'as Type' plutôt que '<Type>'
      '@typescript-eslint/consistent-type-assertions': 'warn',

      // Force l'utilisation de 'type' au lieu de 'interface' pour la cohérence
      // Exemple : type User = { name: string } ✓  | interface User { name: string } ✗
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

      // OBLIGATOIRE : toutes les fonctions doivent avoir un type de retour explicite
      // Exemple : function getUser(): User { } ✓  | function getUser() { } ✗
      '@typescript-eslint/explicit-function-return-type': 'error',

      // Force à ne pas écrire 'public' explicitement (c'est la valeur par défaut)
      // Exemple : name: string ✓  | public name: string ✗
      // Mais private/protected doivent être écrits explicitement
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],

      // Convention de nommage : les variables doivent être en camelCase, UPPER_CASE ou PascalCase
      // Exemples : userName ✓  | MAX_SIZE ✓  | UserService ✓  | user_name ✗
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],

      // Avertit si une fonction est vide (peut être intentionnel temporairement)
      '@typescript-eslint/no-empty-function': 'warn',

      // Interdit les interfaces vides (inutiles et sources de confusion)
      '@typescript-eslint/no-empty-interface': 'error',

      // Avertit si 'any' est utilisé (perd les bénéfices du typage)
      // Préférer 'unknown' si le type est vraiment inconnu
      '@typescript-eslint/no-explicit-any': 'warn',

      // Avertit si le type est évident et redondant
      // Exemple : const x: number = 5 ✗  | const x = 5 ✓
      '@typescript-eslint/no-inferrable-types': 'warn',

      // Interdit de redéclarer une variable dans un scope imbriqué
      // Évite les bugs liés aux variables masquées
      '@typescript-eslint/no-shadow': 'warn',

      // Avertit des variables déclarées mais non utilisées
      '@typescript-eslint/no-unused-vars': 'warn',

      // ====================================
      // RÈGLES JAVASCRIPT - Bonnes Pratiques
      // ====================================

      // Force l'utilisation de === et !== au lieu de == et !=
      // Évite les conversions de type implicites sources de bugs
      // Exemple : x === 5 ✓  | x == 5 ✗
      eqeqeq: 'error',

      // Limite la complexité cyclomatique à 20 (nombre de chemins possibles)
      // Force à découper les fonctions trop complexes
      complexity: ['error', 20],

      // Force l'utilisation d'accolades {} même pour les blocs d'une seule ligne
      // Exemple : if (x) { return; } ✓  | if (x) return; ✗
      curly: 'error',

      // Force l'utilisation de hasOwnProperty() dans les boucles for-in
      // Évite d'itérer sur les propriétés héritées du prototype
      'guard-for-in': 'error',

      // Limite à une classe par fichier pour une meilleure organisation
      'max-classes-per-file': ['error', 1],

      // Limite la longueur des lignes pour la lisibilité
      // Code : 120 caractères max, Commentaires : 160 caractères max
      '@stylistic/max-len': [
        'warn',
        {
          code: 120,
          comments: 160,
        },
      ],

      // Limite la taille des fichiers à 400 lignes maximum
      // Force à découper les gros fichiers en modules plus petits et maintenables
      'max-lines': ['error', 400],

      // Interdit les opérateurs binaires (|, &, ^, etc.)
      // Rarement utilisés et souvent sources de confusion
      'no-bitwise': 'error',

      // Autorise l'utilisation de console.log (utile pour le debug)
      // À désactiver en production via d'autres moyens
      'no-console': 'off',

      // Interdit l'utilisation de new String(), new Number(), etc.
      // Utiliser directement les valeurs primitives
      'no-new-wrappers': 'error',

      // Interdit les concaténations inutiles de strings
      // Exemple : 'hello' + 'world' ✗  | 'helloworld' ✓
      'no-useless-concat': 'error',

      // Interdit l'utilisation de 'var' (utiliser const ou let)
      // var a un scope fonctionnel problématique
      'no-var': 'error',

      // Désactivé : permet d'utiliser toutes les syntaxes JavaScript
      'no-restricted-syntax': 'off',

      // Interdit de redéclarer une variable dans un scope imbriqué
      // Évite les variables masquées sources de bugs
      'no-shadow': 'error',

      // Force à déclarer chaque variable séparément
      // Exemple : const x = 1; const y = 2; ✓  | const x = 1, y = 2; ✗
      'one-var': ['error', 'never'],

      // Force l'utilisation de fonctions fléchées dans les callbacks
      // Plus concis et meilleure gestion du 'this'
      'prefer-arrow-callback': 'error',

      // Force l'utilisation de 'const' pour les variables non réassignées
      // Exemple : const x = 5 ✓  | let x = 5 ✗ (si x n'est pas modifié)
      'prefer-const': 'error',

      // Trie les imports par ordre alphabétique (ignore la casse)
      // Permet de grouper les imports par blocs séparés
      'sort-imports': [
        'error',
        {
          ignoreCase: true,                // Ignore majuscules/minuscules
          ignoreDeclarationSort: true,     // Ne trie pas les déclarations elles-mêmes
          allowSeparatedGroups: true,      // Permet de séparer les imports en groupes
        },
      ],

      // ====================================
      // RÈGLES DE SÉCURITÉ
      // ====================================

      // Interdit strictement l'utilisation de eval() (faille de sécurité majeure)
      'no-eval': 'error',

      // Interdit setTimeout/setInterval avec une string (équivalent à eval)
      // Exemple : setTimeout(() => {}, 1000) ✓  | setTimeout('alert(1)', 1000) ✗
      'no-implied-eval': 'error',
    },
  },

  // ========================================
  // CONFIGURATION POUR LES TEMPLATES HTML
  // ========================================
  {
    // Applique cette config à tous les fichiers HTML (templates Angular)
    files: ['**/*.html'],

    // Configurations de base pour les templates Angular
    extends: [
      ...angular.configs.templateRecommended,    // Règles recommandées pour les templates
      ...angular.configs.templateAccessibility   // Règles d'accessibilité (a11y)
    ],

    rules: {
      // ====================================
      // RÈGLES TEMPLATES - Organisation
      // ====================================

      // Force un ordre spécifique et alphabétique des attributs dans les templates
      // Améliore la lisibilité et la cohérence
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          alphabetical: true,  // Tri alphabétique dans chaque catégorie
          order: [
            'STRUCTURAL_DIRECTIVE', // *ngIf, *ngFor (déprécié, utiliser @if et @for)
            'TEMPLATE_REFERENCE',   // #inputRef, #myDiv
            'ATTRIBUTE_BINDING',    // required, disabled, id="3"
            'INPUT_BINDING',        // [id]="value", [attr.colspan]="2"
            'TWO_WAY_BINDING',      // [(ngModel)]="value"
            'OUTPUT_BINDING',       // (click)="onClick()", (change)="handleChange()"
          ],
        },
      ],

      // ====================================
      // RÈGLES TEMPLATES - Bonnes Pratiques
      // ====================================

      // Force à spécifier l'attribut 'type' sur les boutons
      // Exemple : <button type="button"> ✓  | <button> ✗
      // Évite les soumissions de formulaire non intentionnelles
      '@angular-eslint/template/button-has-type': 'warn',

      // Limite la complexité dans les templates (max 10 conditions/boucles)
      // Si le template est trop complexe, déplacer la logique dans le composant
      '@angular-eslint/template/cyclomatic-complexity': ['warn', { maxComplexity: 10 }],

      // Force l'utilisation de === dans les templates au lieu de ==
      // Exemple : @if (x === 5) ✓  | @if (x == 5) ✗
      '@angular-eslint/template/eqeqeq': 'error',

      // Encourage l'utilisation de la nouvelle syntaxe de control flow
      // @if, @for, @switch au lieu de *ngIf, *ngFor, *ngSwitch
      '@angular-eslint/template/prefer-control-flow': 'error',

      // Recommande l'utilisation de ngSrc pour les images (optimisation automatique)
      // Exemple : <img ngSrc="..."> ✓  | <img src="..."> (warning)
      '@angular-eslint/template/prefer-ngsrc': 'warn',

      // Encourage les balises auto-fermantes quand c'est possible
      // Exemple : <app-header /> ✓  | <app-header></app-header> (warning)
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',

      // Recommande l'utilisation de trackBy dans les boucles @for
      // Améliore drastiquement les performances lors des mises à jour
      '@angular-eslint/template/use-track-by-function': 'warn',
    },
  },
);
