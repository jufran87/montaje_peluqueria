
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-icon',
  templateUrl: './whatsapp-icon.component.html',
  styleUrls: ['./whatsapp-icon.component.css'],
  standalone: true
})
export class WhatsappIconComponent {
  openWhatsAppChat(){
    let phoneNumber = '+573166215346';
    let message = encodeURIComponent('Hola, me interesa el montaje de peluquería que estás vendiendo.');
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

}
