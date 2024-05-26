import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {
  environment
} from "../../../../../../../environments/environment.development";

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrl: './photo-modal.component.scss'
})
export class PhotoModalComponent {
  protected readonly environment = environment;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {

  }

  getBaseUrl(photo: string): string {
    return `https://stockhub12.ru/uploads/${photo.split('_')[0]}/${photo}`;
  }

  protected readonly console = console;
}
