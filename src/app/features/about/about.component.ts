import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 px-4 sm:px-8 bg-forest-850 text-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Side: Circular Avatar with User Photo & Floating Skill Tags -->
        <div class="lg:col-span-5 flex justify-center relative">
          
          <div class="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
            
            <!-- Circular Backdrop in Warm Sun Yellow -->
            <div class="absolute inset-0 bg-sun-400 rounded-full shadow-2xl"></div>

            <!-- Profile image container with user photo -->
            <div class="relative z-10 w-64 h-64 rounded-full overflow-hidden bg-forest-900 border-4 border-white shadow-inner">
              <img src="assets/profile.jpg" 
                   alt="Kaleeswaran Irulaiya" 
                   class="w-full h-full object-cover object-top" />
            </div>

            <!-- Floating Skill Chips around circle -->
            <div class="absolute top-2 -left-2 z-20 px-3 py-1 rounded-full bg-white text-forest-900 font-bold text-[11px] shadow-md">
              Java 21
            </div>
            <div class="absolute -top-2 right-6 z-20 px-3 py-1 rounded-full bg-sun-400 text-forest-900 font-bold text-[11px] shadow-md">
              Spring Boot 3
            </div>
            <div class="absolute top-24 -right-4 z-20 px-3 py-1 rounded-full bg-white text-forest-900 font-bold text-[11px] shadow-md">
              Angular 19
            </div>
            <div class="absolute bottom-16 -left-4 z-20 px-3 py-1 rounded-full bg-forest-900 text-white font-bold text-[11px] shadow-md border border-forest-700">
              REST APIs
            </div>
            <div class="absolute -bottom-2 left-10 z-20 px-3 py-1 rounded-full bg-sun-400 text-forest-900 font-bold text-[11px] shadow-md">
              SQL Databases
            </div>
            <div class="absolute bottom-4 -right-2 z-20 px-3 py-1 rounded-full bg-white text-forest-900 font-bold text-[11px] shadow-md">
              Postman
            </div>

          </div>

        </div>

        <!-- Right Side: About Me Narrative, Big Metrics, Download CV & Stylized Signature -->
        <div class="lg:col-span-7 space-y-6">
          
          <div>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">— About Me</span>
            <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mt-1">
              Who is <span class="text-sun-400">Kaleeswaran Irulaiya?</span>
            </h2>
          </div>

          <p class="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {{ personal.summary }}
          </p>

          <!-- Key Metrics -->
          <div class="grid grid-cols-3 gap-6 pt-4 border-t border-forest-700/60 max-w-lg">
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-sun-400">{{ personal.metrics.projects }}</div>
              <div class="text-slate-300 text-xs mt-1">Projects Completed</div>
            </div>
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-sun-400">{{ personal.metrics.satisfaction }}</div>
              <div class="text-slate-300 text-xs mt-1">REST CRUD API Accuracy</div>
            </div>
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-sun-400">1+</div>
              <div class="text-slate-300 text-xs mt-1">Years Production Trainee</div>
            </div>
          </div>

          <!-- Download CV Button & Stylized Signature -->
          <div class="flex items-center gap-6 pt-4">
            <a href="mailto:kaleeswaranirulaiya@gmail.com?subject=Resume%20Request%20for%20Kaleeswaran" 
               class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sun-400 text-forest-900 font-bold text-xs uppercase tracking-wider hover:bg-sun-500 transition-all shadow-md group">
              <span>Download CV</span>
              <span class="w-6 h-6 rounded-full bg-forest-900 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                ↓
              </span>
            </a>

            <!-- Stylized Signature -->
            <div class="font-signature text-3xl sm:text-4xl text-sun-400 tracking-wider">
              Kaleeswaran Irulaiya
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  public personal = PERSONAL_INFO;
}
