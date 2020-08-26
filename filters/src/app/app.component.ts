import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameCompany= 'marketing digital';
  titulo = 'package';
  date = new Date();
  /*currency = 100;
  month='Month';


  packages = {
    titulo: 'Basic',
    precio: 100,
    month : 'month',
    d1: 'socil media',
    d2: 'branding',
    d3: 'Image Desing',
    d4:'-'
  }*/

  packages = [{
    title: 'Basic',
    price: 100,
    month : 'month',
    d1: 'social media',
    d2: 'branding',
    d3: 'Image Desing',
    d4:'-'
  },
  {
    title: 'Recommended',
    price: 500,
    month : 'month',
    d1: 'social media',
    d2: 'branding',
    d3: 'Image Desing',
    d4:'Video'
  },
  {
    title: 'Advanced',
    price: 900,
    month : 'month',
    d1: 'social media',
    d2: 'branding',
    d3: 'Image/ Video',
    d4:'Community Manager'
  }];

}
