import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DjiDronesComparisonType } from '../models/dji-drone-comparison/dji-drones-comparison-type';
import { DjiDroneComparison } from '../static-data/dji-drone-comparison';

@Injectable({
  providedIn: 'root'
})
export class DjiDroneComparisonService {
  public getDjiDronesComparison(): Observable<DjiDronesComparisonType[]> {
    return of(DjiDroneComparison['DjiDronesComparisonType']);
  }
}
