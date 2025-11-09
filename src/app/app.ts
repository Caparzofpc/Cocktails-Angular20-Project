// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Import des composants enfants
import { Cocktails } from './components/cocktails/cocktails';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

/**
 * Composant racine de l'application
 * Ce composant sert de conteneur principal et organise la structure générale de la page
 * Il utilise un layout en colonne avec header, contenu principal et footer
 */
@Component({
  // OnPush améliore les performances en limitant les vérifications de changements
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // Liste des composants standalone importés
  imports: [Header, Footer, Cocktails],
})
export class App {}
