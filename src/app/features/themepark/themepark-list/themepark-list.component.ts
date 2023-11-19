import { Component } from '@angular/core';
import { ThemeparkService } from '../themepark.service';
import { Themepark } from '../themepark.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-themepark-list',
  templateUrl: './themepark-list.component.html',
  styleUrls: ['./themepark-list.component.css'],
})
export class ThemeparkListComponent {
  parks: Themepark[] | undefined;

  constructor(
    private parkService: ThemeparkService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.parks = this.parkService.getAllParks();
  }

  delete(id: number | undefined): void {
    if (id) {
      this.parkService.deletePark(id);
    }
  }
}
