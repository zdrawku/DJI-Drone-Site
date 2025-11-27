import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DjiDronesComparisonType } from '../models/dji-drone-comparison/dji-drones-comparison-type';
import { DjiDroneComparisonService } from '../services/dji-drone-comparison.service';

@Component({
  selector: 'app-drone-comparison-view',
  standalone: false,
  templateUrl: './drone-comparison-view.component.html',
  styleUrls: ['./drone-comparison-view.component.scss']
})
export class DroneComparisonViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public djiDroneComparisonDjiDronesComparison: DjiDronesComparisonType[] = [];

  constructor(
    public djiDroneComparisonService: DjiDroneComparisonService,
  ) {}


  ngOnInit() {
    this.djiDroneComparisonService.getDjiDronesComparison().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.djiDroneComparisonDjiDronesComparison = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
