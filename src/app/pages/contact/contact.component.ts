import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [RouterModule, ContactFormComponent]
})
export class ContactComponent {
  onSubmitForm(data: any): void {
    console.log('Formulaire soumis:', data);
    // Ici vous pourriez appeler un service pour envoyer l'email
  }
}