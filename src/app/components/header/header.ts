// Imports Angular nécessaires pour le composant
import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Composant Header (En-tête)
 * Affiche le bandeau supérieur de l'application avec :
 * - Le logo/titre de l'application
 * - Les liens de navigation principaux
 */
@Component({
  // OnPush pour optimiser les performances
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
