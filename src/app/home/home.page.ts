import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

  items=[
    {
      id : 1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://nazjedenie.sk/wp-content/uploads/2013/08/marhule-600x400.jpg'
    },
    {
      id : 2,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL: 'https://sistacafe.com/_next/image?url=https:%2F%2Fsistacafe-assets.sgp1.cdn.digitaloceanspaces.com%2Fc%2F47096%2Fceba95bd-7aa4-4b30-a60c-b4740996a173.jpeg%3Fv%3D20240325133410%26ratio%3D0.667&w=1200&q=75  '
    },
    {
      id : 3,
      name:'Product c',
      price: 300,
      detail:'this is a product C',
      imageURL: 'https://sistacafe.com/_next/image?url=https:%2F%2Fsistacafe-assets.sgp1.cdn.digitaloceanspaces.com%2Fc%2F65889%2F0fc6287a-5b78-4e02-9855-197e25b53315.jpeg%3Fv%3D20240304191703%26ratio%3D0.667&w=1200&q=75  '
    },
    {
      id : 4,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL: 'https://sistacafe.com/_next/image?url=https:%2F%2Fsistacafe-assets.sgp1.cdn.digitaloceanspaces.com%2Fc%2F46608%2Fa388b0c0-85f0-4c6d-8d6a-e45202b88676.jpeg%3Fv%3D20240325141308%26ratio%3D0.667&w=1200&q=75'
    },
  ]
  gotoDetail(i:any){
    this.detail.navigateForward('/detail',{state:{i}})

  }

}
