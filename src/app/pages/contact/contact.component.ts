import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nPipe } from '../../core/i18n/i18n.pipe';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [RouterModule, ContactFormComponent, I18nPipe]
})
export class ContactComponent {
  onSubmitForm(data: unknown): void {
    console.log('Form submitted:', data);
  }
}
