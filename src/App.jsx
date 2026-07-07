import { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  MessageSquare, 
  BookOpen,
  ArrowUpRight,
  ShieldAlert,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [externalTriggerText, setExternalTriggerText] = useState("");

  const handleCardClick = (query) => {
    setExternalTriggerText(query);
    setIsChatOpen(true);
  };

  const handleClearTrigger = () => {
    setExternalTriggerText("");
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#0f0825] relative overflow-x-hidden">
      {/* Ambient Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-indigo-600/[0.04] rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-[400px] h-52 sm:h-[400px] bg-purple-600/[0.04] rounded-full blur-[60px] sm:blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[700px] h-80 sm:h-[700px] bg-indigo-500/[0.02] rounded-full blur-[100px] sm:blur-[150px]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] hidden sm:block"
          style={{
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Top Navbar */}
      <header className="absolute top-0 inset-x-0 z-30 px-6 py-5 sm:px-12 flex items-center justify-between border-b border-white/[0.03] backdrop-blur-md bg-[#050510]/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400/20">
            <Scale className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <h1 className="text-white text-sm sm:text-base font-bold tracking-tight">Pakistan Legal Assistant</h1>
            <p className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">AI Powered</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">System Live</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full my-auto">
          
          {/* Left Column: Hero Description */}
          <div className="lg:col-span-6 flex flex-col text-left items-start space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
              text-[10px] sm:text-xs font-semibold tracking-wider uppercase
              bg-gradient-to-r from-indigo-500/[0.08] to-purple-500/[0.08] 
              text-indigo-200 border border-indigo-500/20 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AI-Powered Legal Intelligence
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-black text-white leading-[1.15] tracking-tight">
              Understand <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Pakistani Law,
              </span>
              <br />
              Instantly.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Get immediate, direct guidance on the Pakistan Penal Code (PPC), Civil Rights, Cyber laws (PECA), and court procedures. Completely free and anonymous.
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-4 border-t border-white/[0.05]">
              <div className="flex flex-col p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-sm hover:border-indigo-500/10 transition-colors duration-300">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Trained Base</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-1">PPC & PECA</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-sm hover:border-indigo-500/10 transition-colors duration-300">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Privacy</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">100% Anon</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-sm hover:border-indigo-500/10 transition-colors duration-300">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Speed</span>
                <span className="text-xs sm:text-sm font-bold text-indigo-400 mt-1">&lt; 3s Reply</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-4">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="relative group overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl
                  text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600
                  hover:from-indigo-600 hover:to-purple-700 active:scale-[0.98]
                  shadow-xl shadow-indigo-500/20 transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <MessageSquare className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                <span>Consult Assistant Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Practice Cards Grid */}
          <div className="lg:col-span-6 w-full mt-6 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Criminal Law */}
              <div 
                onClick={() => handleCardClick("Explain PPC section 302 or theft punishment")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-indigo-500/[0.03] hover:border-indigo-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">Criminal Law (PPC)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get references for PPC codes, FIR filing procedures, bail guidelines, and crimes.
                  </p>
                </div>
              </div>

              {/* Card 2: Civil Law */}
              <div 
                onClick={() => handleCardClick("How do property inheritance laws work in Pakistan?")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-indigo-500/[0.03] hover:border-indigo-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">Civil & Family Law</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Understand land property disputes, contract agreements, marriage/divorce, and inheritance.
                  </p>
                </div>
              </div>

              {/* Card 3: CyberPECA Act */}
              <div 
                onClick={() => handleCardClick("Cybercrime laws in Pakistan and how to report harassment")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-indigo-500/[0.03] hover:border-indigo-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">Cyber & Digital Rights</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Find out how to handle online blackmail, financial cyber fraud, and file FIA complaints.
                  </p>
                </div>
              </div>

              {/* Card 4: Constitutional Rights */}
              <div 
                onClick={() => handleCardClick("What are my fundamental rights under the Constitution of Pakistan?")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-indigo-500/[0.03] hover:border-indigo-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">Constitutional Rights</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Learn about writ petitions, high court procedures, and fundamental human rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer info: Refined & Responsive */}
        <footer className="w-full mt-16 md:mt-24 border-t border-white/[0.03] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Pakistan Legal Assistant. Disclaimer: AI responses are for informational purposes and not formal legal counsel.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[10px] sm:text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Online AI</span>
            </div>
            <div className="text-slate-800">|</div>
            <div>Powered by PECA & PPC</div>
            <div className="text-slate-800">|</div>
            <div>Free to Use</div>
          </div>
        </footer>
      </main>

      {/* Chatbot Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        externalTriggerText={externalTriggerText}
        clearExternalTrigger={handleClearTrigger}
      />
    </div>
  );
}

export default App;