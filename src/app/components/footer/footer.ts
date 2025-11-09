// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Composant Footer (Pied de page)
 * Affiche le bandeau inférieur de l'application avec les informations de copyright
 * Ce composant reste visible en bas de toutes les pages
 */
@Component({
  // OnPush pour optimiser les performances
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
