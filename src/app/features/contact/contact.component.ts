import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PERSONAL_INFO } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 px-4 sm:px-8 bg-white">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Left: Direct Details -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— Contact Us</span>
              <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
                Let's Talk for <span class="text-sun-500">Your Next Projects</span>
              </h2>
              <p class="text-slate-600 text-sm mt-3 leading-relaxed">
                Available immediately for Full-Time Java Full Stack / Angular Developer positions or contract roles.
              </p>
            </div>

            <div class="space-y-4 text-xs font-medium text-slate-700">
              <a [href]="personal.whatsAppUrl" class="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div class="w-10 h-10 rounded-full bg-sun-400/20 text-sun-600 flex items-center justify-center text-lg">📞</div>
                <div>
                  <div class="text-[10px] text-slate-400 uppercase">Phone & WhatsApp</div>
                  <div class="text-sm font-bold text-slate-900">{{ personal.phone }}</div>
                </div>
              </a>

              <a [href]="'mailto:' + personal.email" class="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div class="w-10 h-10 rounded-full bg-forest-900/10 text-forest-850 flex items-center justify-center text-lg">✉️</div>
                <div>
                  <div class="text-[10px] text-slate-400 uppercase">Email Address</div>
                  <div class="text-sm font-bold text-slate-900">{{ personal.email }}</div>
                </div>
              </a>

              <a [href]="personal.linkedinUrl" target="_blank" class="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg">🔗</div>
                <div>
                  <div class="text-[10px] text-slate-400 uppercase">LinkedIn Profile</div>
                  <div class="text-sm font-bold text-slate-900">linkedin.com/in/kaleeswaran-irulaiya</div>
                </div>
              </a>

              <div class="flex items-center gap-3.5 p-3 rounded-2xl">
                <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">📍</div>
                <div>
                  <div class="text-[10px] text-slate-400 uppercase">Location</div>
                  <div class="text-sm font-bold text-slate-900">{{ personal.location }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Form without asterisk signs -->
          <div class="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            
            <div *ngIf="submitted" class="p-6 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-semibold space-y-2">
              <div class="text-sm font-bold">✓ Message Transmitted!</div>
              <p>Thank you for reaching out. Kaleeswaran will get back to you shortly.</p>
              <button (click)="submitted = false" class="text-forest-850 underline mt-2">Send another message</button>
            </div>

            <form *ngIf="!submitted" (ngSubmit)="submit()" class="space-y-4 text-xs font-medium text-slate-700">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label>Your Name</label>
                  <input [(ngModel)]="form.name" name="name" required type="text" placeholder="Ex. John Doe"
                         class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-forest-850">
                </div>
                <div class="space-y-1.5">
                  <label>Email Address</label>
                  <input [(ngModel)]="form.email" name="email" required type="email" placeholder="example@gmail.com"
                         class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-forest-850">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label>Phone Number</label>
                  <input [(ngModel)]="form.phone" name="phone" type="tel" placeholder="+91..."
                         class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-forest-850">
                </div>
                <div class="space-y-1.5">
                  <label>Role / Opportunity</label>
                  <select [(ngModel)]="form.service" name="service"
                          class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-forest-850">
                    <option value="Full-Time Developer">Full-Time Java / Angular Role</option>
                    <option value="Spring Boot Backend">Spring Boot Backend Microservices</option>
                    <option value="Angular Frontend">Angular 19 Frontend Web App</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label>Your Message</label>
                <textarea [(ngModel)]="form.message" name="message" required rows="4" placeholder="Enter here.."
                          class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-forest-850"></textarea>
              </div>

              <button type="submit" 
                      class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-850 text-white font-bold text-xs uppercase tracking-wider hover:bg-forest-900 transition-all shadow-md">
                <span>Submit</span>
                <span class="w-5 h-5 rounded-full bg-sun-400 text-forest-900 flex items-center justify-center text-[10px]">→</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  public personal = PERSONAL_INFO;
  public submitted = false;
  public form = {
    name: '',
    email: '',
    phone: '',
    service: 'Full-Time Developer',
    message: ''
  };

  submit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.submitted = true;
  }
}
