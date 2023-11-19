import { Component } from '@angular/core';
import { ThemeparkService } from '../themepark.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Themepark } from '../themepark.model';

@Component({
  selector: 'app-themepark-edit',
  templateUrl: './themepark-edit.component.html',
  styleUrls: ['./themepark-edit.component.css'],
})
export class ThemeparkEditComponent {
  parkId: number | undefined | null = null;
  park: Themepark | undefined | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ThemeparkService: ThemeparkService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.parkId = Number(params.get('id'));
      if (this.parkId) {
        this.park = this.ThemeparkService.getParkById(this.parkId);
      } else {
        this.park = new Themepark();
      }
    });
  }

  save(): void {
    var park = new Themepark();

    var name = (document.getElementById('park-name') as HTMLInputElement).value;
    var description = (
      document.getElementById('park-description') as HTMLInputElement
    ).value;
    var price = Number(
      (document.getElementById('park-price') as HTMLInputElement).value
    );
    var familyFocussed = Boolean(
      (document.getElementById('park-is-family-focussed') as HTMLInputElement)
        .checked
    );
    var address = (document.getElementById('park-address') as HTMLInputElement)
      .value;
    var parkid = this.ThemeparkService.getAllParks().length + 1;

    if (this.parkId) {
      parkid = this.parkId;
      park = {
        id: parkid,
        name: name,
        description: description,
        price: price,
        FamilyFocussed: familyFocussed,
        Address: address,
      };
      this.ThemeparkService.editPark(park);
    } else {
      park = {
        id: parkid,
        name: name,
        description: description,
        price: price,
        FamilyFocussed: familyFocussed,
        Address: address,
      };
      this.ThemeparkService.addPark(park);
    }

    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
