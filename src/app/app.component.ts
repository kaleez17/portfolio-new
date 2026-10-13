import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { TickerComponent } from './features/ticker/ticker.component';
import { ServicesComponent } from './features/services/services.component';
import { AboutComponent } from './features/about/about.component';
import { ToolsComponent } from './features/tools/tools.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { JourneyComponent } from './features/journey/journey.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { ContactComponent } from './features/contact/contact.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { AiTerminalComponent } from './features/ai-terminal/ai-terminal.component';
import { PERSONAL_INFO } from './shared/data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TickerComponent,
    ServicesComponent,
    AboutComponent,
    ToolsComponent,
    ProjectsComponent,
    JourneyComponent,
    PricingComponent,
    ContactComponent,
    TestimonialsComponent,
    AiTerminalComponent
  ],
  template: `
    <div class="min-h-screen bg-[#FAF9F6] text-slate-800">
      
      <!-- Top Navigation -->
      <app-navbar (openAiTerminal)="showAi = true"></app-navbar>

      <!-- Main Layout matching Pinterest Reference Video -->
      <main>
        <app-hero (openAiTerminal)="showAi = true"></app-hero>
        <app-ticker></app-ticker>
        <app-services></app-services>
        <app-about></app-about>
        <app-tools></app-tools>
        <app-projects></app-projects>
        <app-journey></app-journey>
        <app-pricing></app-pricing>
        <app-contact></app-contact>
        <app-testimonials></app-testimonials>
      </main>

      <!-- Footer -->
      <footer class="bg-forest-950 text-slate-400 py-10 px-4 text-center text-xs font-mono border-t border-forest-900">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {{ personal.name }}. Built completely with Angular 19.
          </div>
          <div class="flex items-center gap-4 text-sun-400 font-semibold">
            <a [href]="personal.githubUrl" target="_blank" rel="noopener noreferrer" class="hover:underline">GitHub (25+ Repos)</a>
            <span>•</span>
            <a [href]="personal.linkedinUrl" target="_blank" rel="noopener noreferrer" class="hover:underline">LinkedIn</a>
            <span>•</span>
            <a [href]="personal.whatsAppUrl" target="_blank" rel="noopener noreferrer" class="hover:underline">WhatsApp</a>
          </div>
        </div>
      </footer>

      <!-- AI Assistant Modal -->
      <app-ai-terminal *ngIf="showAi" (close)="showAi = false"></app-ai-terminal>

    </div>
  `
})
export class AppComponent {
  public personal = PERSONAL_INFO;
  public showAi = false;
}
