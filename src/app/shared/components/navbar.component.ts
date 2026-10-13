import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-5 inset-x-0 z-50 px-4 sm:px-8 flex justify-center">
      <nav class="w-full max-w-5xl bg-forest-850 text-white rounded-full px-5 py-2.5 flex items-center justify-between shadow-xl border border-forest-700/40">
        
        <!-- Logo: Circular yellow icon + Name -->
        <a href="#hero" class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-sun-400 text-forest-900 font-bold flex items-center justify-center text-sm shadow-sm font-display">
            K
          </div>
          <span class="font-display font-bold text-base tracking-tight text-white">Kaleeswaran.</span>
        </a>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <a href="#hero" class="text-sun-400 font-semibold transition-colors">Home</a>
          <a href="#services" class="hover:text-sun-400 transition-colors">Services</a>
          <a href="#about" class="hover:text-sun-400 transition-colors">About</a>
          <a href="#projects" class="hover:text-sun-400 transition-colors">Projects</a>
          <a href="#tools" class="hover:text-sun-400 transition-colors">Tools</a>
          <a href="#journey" class="hover:text-sun-400 transition-colors">Journey</a>
          <a href="#pricing" class="hover:text-sun-400 transition-colors">Pricing</a>
        </div>

        <!-- Right Buttons: AI Assistant + Contact Me -->
        <div class="flex items-center gap-2.5">
          <button (click)="openAiTerminal.emit()" 
                  class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-900 border border-sun-400/40 text-sun-400 text-xs font-semibold hover:bg-forest-950 transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-sun-400 animate-ping"></span>
            <span>AI Bot</span>
          </button>

          <a href="#contact" 
             class="px-5 py-1.5 rounded-full bg-white text-forest-900 text-xs font-bold hover:bg-sun-400 transition-all shadow-sm">
            Contact Me
          </a>
        </div>

      </nav>
    </header>
  `
})
export class NavbarComponent {
  @Output() openAiTerminal = new EventEmitter<void>();
}
