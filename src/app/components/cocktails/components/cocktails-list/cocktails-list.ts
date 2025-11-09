// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Composant CocktailsList (Liste des cocktails)
 * Affiche la liste de tous les cocktails disponibles
 * Fonctionnalités :
 * - Affiche chaque cocktail sous forme d'élément de liste cliquable
 * - Permet d'ajouter un nouveau cocktail via un bouton
 * - Gère la sélection active (premier élément actuellement)
 *
 * Note: Pour l'instant les données sont en dur, à terme elles viendront d'un service
 */
@Component({
  // OnPush pour optimiser les performances
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cocktails-list',
  imports: [],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
})
export class CocktailsList {}
