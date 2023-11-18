import { Component } from '@angular/core';
import { ThemeparkService } from '../themepark.service';
import { Themepark } from '../themepark.model';

@Component({
  selector: 'app-themepark-list',
  templateUrl: './themepark-list.component.html',
  styleUrls: ['./themepark-list.component.css'],
})
export class ThemeparkListComponent {
  parks: Themepark[] | undefined;

  constructor(private parkService: ThemeparkService) {}

  ngOnInit(): void {
    this.parks = this.parkService.getAllParks();
  }
}
