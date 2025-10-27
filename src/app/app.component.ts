import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, CommonModule, WhatsappIconComponent, InfoCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    { name: 'Mesa para manicure', image: 'https://lilianasoto.com.co:8099/montaje_img_03.jpg', price: '$ 700 K' },
    { name: 'Silla para pedicure', image: 'https://lilianasoto.com.co:8099/montaje_img_06.jpg', price: '$ 400 K' },
    { name: 'Silla para cabello', image: 'https://lilianasoto.com.co:8099/montaje_img_15.jpg', price: '$ 400 K' },
    { name: 'Lavacabezas', image: 'https://lilianasoto.com.co:8099/montaje_img_09.jpg', price: '$ 600 K' },
    { name: 'Tocador con espejo y bombillos', image: 'https://lilianasoto.com.co:8099/montaje_img_14.jpg', price: '$ 500 K' },
  ];
}
