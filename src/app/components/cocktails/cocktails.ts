// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Import des composants enfants pour afficher la liste et les détails
import { CocktailDetails } from './components/cocktail-details/cocktail-details';
import { CocktailsList } from './components/cocktails-list/cocktails-list';

/**
 * Composant Cocktails (conteneur principal)
 * Ce composant organise l'affichage de la fonctionnalité cocktails en deux parties :
 * - À gauche : la liste des cocktails disponibles
 * - À droite : les détails du cocktail sélectionné
 * Il agit comme un conteneur pour coordonner ces deux sous-composants
 */
@Component({
  // OnPush pour optimiser les performances
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cocktails',
  // Import des composants enfants
  imports: [CocktailsList, CocktailDetails],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {}
