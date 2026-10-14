import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="pt-36 pb-20 px-4 sm:px-8 relative overflow-hidden">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Copy -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Dashed Tag with Crosshairs (Exact reference from video) -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-dashed border-slate-400 bg-white/60 text-slate-700 text-xs font-mono font-medium relative">
            <span class="text-sun-500 font-bold">⌖</span>
            <span>Hello There!</span>
            <span class="text-sun-500 font-bold">⌖</span>
          </div>

          <!-- Main Headline with Golden Highlight -->
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight">
            I'm <span class="text-sun-500 underline decoration-sun-400 decoration-4 underline-offset-8">Kaleeswaran Irulaiya</span>, <br>
            Java Full Stack & Angular Developer.
          </h1>

          <!-- Subtitle / Bio -->
          <p class="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            M.Sc. Information Technology graduate with hands-on software development training at 
            <strong class="text-forest-850 font-semibold">Lissomsoft Technologies</strong>.
            Skilled in Java, Spring Boot, REST APIs, SQL, and modern Angular 19. Creator of 
            <strong class="text-forest-850 font-semibold">25+ GitHub repositories</strong>.
          </p>

          <!-- Action Buttons from Video: View My Portfolio + Hire Me -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" 
               class="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-forest-850 text-white font-semibold text-sm hover:bg-forest-900 transition-all shadow-md group">
              <span>View My Portfolio</span>
              <div class="w-6 h-6 rounded-full bg-sun-400 text-forest-900 flex items-center justify-center text-[10px] font-bold group-hover:translate-x-0.5 transition-transform">
                ▶
              </div>
            </a>

            <a href="#contact" 
               class="px-7 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:border-forest-850 hover:text-forest-850 transition-all shadow-sm">
              Hire Me
            </a>

            <button (click)="openAiTerminal.emit()"
                    class="px-5 py-3.5 rounded-full bg-sun-400 text-forest-900 font-bold text-sm hover:bg-sun-500 transition-all shadow-sm flex items-center gap-2">
              <span>✨</span> Ask AI Assistant
            </button>
          </div>

        </div>

        <!-- Right Hero Visual Graphic with User's Photo, Organic Yellow Backdrop, Rotating Badge & Floating Tags -->
        <div class="lg:col-span-5 flex justify-center relative">
          
          <div class="relative w-80 sm:w-96 h-96 sm:h-[420px] flex items-center justify-center">
            
            <!-- Curved Organic Yellow Shape Backdrop -->
            <div class="absolute inset-0 bg-sun-400 rounded-[50px] rotate-[-6deg] opacity-95 transform translate-x-2 translate-y-2"></div>
            
            <!-- White Framed Portrait Container with User's Actual Photo -->
            <div class="relative z-10 w-full h-full rounded-[48px] overflow-hidden bg-white border-4 border-white shadow-2xl flex items-center justify-center">
              <img src="assets/profile.jpg" 
                   alt="Kaleeswaran Irulaiya" 
                   class="w-full h-full object-cover object-top filter brightness-105 contrast-105" />
            </div>

            <!-- Rotating Circular Sticker Badge: "HIRE ME • HIRE ME •" -->
            <div class="absolute -top-4 -right-4 z-20 w-24 h-24 rounded-full bg-forest-850 text-white flex items-center justify-center shadow-xl border-2 border-white">
              <svg class="w-full h-full rotating-badge" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none"/>
                <text font-size="9" font-weight="bold" fill="#FBBF24" letter-spacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    Angular • JAVA • SpringBoot •
                  </textPath>
                </text>
              </svg>
              <!-- Center Arrow -->
              <div class="absolute inset-0 flex items-center justify-center text-sun-400 font-bold text-lg">
                ↗
              </div>
            </div>

            <!-- Floating Skill Pill: Java Full Stack (Bottom left) -->
            <div class="absolute -bottom-3 -left-5 z-20 px-4 py-2 rounded-full bg-forest-850 text-white text-xs font-semibold shadow-lg border-2 border-white flex items-center gap-1.5">
              <span>☕</span> Java & Spring Boot
            </div>

            <!-- Floating Skill Pill: Angular 19 (Right) -->
            <div class="absolute bottom-16 -right-6 z-20 px-4 py-2 rounded-full bg-sun-400 text-forest-900 text-xs font-bold shadow-lg border-2 border-white flex items-center gap-1.5">
              <span>🅰️</span> Angular 19
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  public personal = PERSONAL_INFO;
  @Output() openAiTerminal = new EventEmitter<void>();
}
