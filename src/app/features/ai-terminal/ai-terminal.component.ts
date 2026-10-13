import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PERSONAL_INFO } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-ai-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col h-[580px] overflow-hidden">
        
        <!-- Header -->
        <div class="px-6 py-4 bg-forest-850 text-white flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-3 h-3 rounded-full bg-sun-400 animate-pulse"></div>
            <div>
              <div class="font-display font-bold text-sm">Kaleeswaran AI Agent</div>
              <div class="text-[10px] text-sun-300 font-mono">100% Free • In-Browser Assistant</div>
            </div>
          </div>
          <button (click)="close.emit()" class="p-1.5 rounded-full hover:bg-forest-900 text-white text-xs">✕</button>
        </div>

        <!-- Chat messages -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4 text-xs font-sans bg-[#FAF9F6]">
          <div *ngFor="let msg of messages" 
               [class.items-end]="msg.sender === 'user'"
               [class.items-start]="msg.sender === 'bot'"
               class="flex flex-col">
            <div [class.bg-forest-850]="msg.sender === 'user'"
                 [class.text-white]="msg.sender === 'user'"
                 [class.bg-white]="msg.sender === 'bot'"
                 [class.text-slate-800]="msg.sender === 'bot'"
                 [class.border]="msg.sender === 'bot'"
                 class="max-w-[85%] p-3.5 rounded-2xl shadow-sm leading-relaxed whitespace-pre-line">
              {{ msg.text }}
            </div>
          </div>
        </div>

        <!-- Input -->
        <form (ngSubmit)="send()" class="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input [(ngModel)]="inputQuery" name="query" type="text" placeholder="Ask about Java, Angular, 25+ GitHub repos..."
                 class="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-forest-850">
          <button type="submit" class="px-5 py-2.5 rounded-full bg-forest-850 text-white font-bold text-xs hover:bg-forest-900">
            Send ↵
          </button>
        </form>

      </div>
    </div>
  `
})
export class AiTerminalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  public inputQuery = '';
  public messages: { sender: 'user' | 'bot'; text: string }[] = [];

  ngOnInit(): void {
    this.messages.push({
      sender: 'bot',
      text: "Hello! I am Kaleeswaran's free AI portfolio assistant. Ask me anything about his Java Full Stack mastery, Angular 19 skills, training at Lissomsoft, or 25+ GitHub projects!"
    });
  }

  send(): void {
    const q = this.inputQuery.trim();
    if (!q) return;
    this.messages.push({ sender: 'user', text: q });
    this.inputQuery = '';

    const lower = q.toLowerCase();
    let reply = "Kaleeswaran Irulaiya is a Java Full Stack & Angular Developer with 25+ software repositories on GitHub (https://github.com/kaleez17).";
    if (lower.includes('project') || lower.includes('github')) {
      reply = "Kaleeswaran has built 25+ repositories on GitHub! Key highlights include CloudVault (Spring Boot 3 Microservices), NexusOS (Angular 19 3D Workspace), and ApexCommerce. Check them all at https://github.com/kaleez17.";
    } else if (lower.includes('java') || lower.includes('spring') || lower.includes('backend')) {
      reply = "He specializes in Java 21, Spring Boot 3, RESTful APIs, Spring Security with JWT, and SQL relational databases (MySQL/PostgreSQL).";
    } else if (lower.includes('angular') || lower.includes('front')) {
      reply = "On the frontend, he builds reactive applications using Angular 19 standalone components, signals, RxJS, and Tailwind CSS.";
    } else if (lower.includes('experience') || lower.includes('lissomsoft')) {
      reply = "He completed comprehensive software developer training at Lissomsoft Technologies in Guindy, Chennai, building enterprise Java backends and Angular interfaces.";
    } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone')) {
      reply = `You can reach Kaleeswaran directly at ${PERSONAL_INFO.email} or WhatsApp at ${PERSONAL_INFO.phone}.`;
    }

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: reply });
    }, 400);
  }
}
