// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Import de l'interface TypeScript pour typer les données de cocktail
import { Cocktail } from 'app/shared/interfaces/cocktails.interface.js';

/**
 * Composant CocktailDetails (Détails du cocktail)
 * Affiche les informations détaillées d'un cocktail sélectionné
 * Fonctionnalités :
 * - Affiche l'image du cocktail
 * - Affiche le nom du cocktail
 * - Affiche la description complète
 *
 * Note: Pour l'instant les données sont en dur, à terme elles seront
 * reçues depuis le composant parent via @Input() ou un service
 */
@Component({
  // OnPush pour optimiser les performances
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.scss',
})
export class CocktailDetails {
  // Données du cocktail à afficher (actuellement en dur, temporaire)
  cocktail: Cocktail = {
    // URL de l'image du cocktail
    imageUrl:
      'https://static.750g.com/images/1200-675/dfe52623942a8b2e6b4f1e1715a42570/servez-et-degustez.jpg',
    // Nom du cocktail
    name: 'Mojito',
    // Description détaillée du cocktail
    description: `Le mojito est un cocktail classique cubain, idéal pour les moments de détente. Composé de rhum blanc, de feuilles de menthe fraîche, de jus de citron vert, de sucre, d'eau gazeuse et de glace pilée, il offre un équilibre parfait entre fraîcheur, acidité et douceur, avec des arômes rafraîchissants et tropicaux.`,
  };
}
