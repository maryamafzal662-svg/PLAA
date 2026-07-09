import { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  MessageSquare, 
  BookOpen,
  ShieldAlert,
  ChevronRight,
  ArrowRight,
  Search,
  Gavel,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [externalTriggerText, setExternalTriggerText] = useState("");
  const [heroQuery, setHeroQuery] = useState("");

  const handleCardClick = (query) => {
    setExternalTriggerText(query);
    setIsChatOpen(true);
  };

  const handleClearTrigger = () => {
    setExternalTriggerText("");
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const query = heroQuery.trim();
    if (!query) return;
    handleCardClick(query);
    setHeroQuery("");
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#020704] via-[#05110a] to-[#091b11] relative overflow-x-hidden text-slate-100">
      
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-emerald-600/[0.04] rounded-full blur-[90px] sm:blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-[500px] h-60 sm:h-[500px] bg-amber-500/[0.02] rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[800px] h-80 sm:h-[800px] bg-emerald-500/[0.02] rounded-full blur-[110px] sm:blur-[160px]" />
        
        {/* Subtle grid pattern for administrative styling */}
        <div className="absolute inset-0 opacity-[0.015] hidden sm:block"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Top Navbar */}
      <header className="absolute top-0 inset-x-0 z-30 px-6 py-5 sm:px-12 flex items-center justify-between border-b border-emerald-500/[0.05] backdrop-blur-md bg-[#030a05]/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/25 ring-1 ring-emerald-400/20">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white text-sm sm:text-base font-bold tracking-tight font-sans">Pakistan Legal Assistant</h1>
            <p className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">AI Powered • Judicial Data</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-3 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">System Live</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        
        {/* Hero & practice cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full my-auto">
          
          {/* Left Column: Hero Description & Input Bar */}
          <div className="lg:col-span-6 flex flex-col text-left items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
              text-[10px] font-bold tracking-wider uppercase
              bg-emerald-500/5 border border-emerald-500/10 text-emerald-400
              shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Legal Assistant v1.0
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight">
              Understand <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                Pakistani Law,
              </span>
              <br />
              <span className="text-slate-400 font-light italic">in seconds.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Get immediate, structured guidance on the <strong className="text-slate-200 font-medium">Pakistan Penal Code (PPC)</strong>, <strong className="text-slate-200 font-medium">Civil Rights</strong>, <strong className="text-slate-200 font-medium">Cyber laws (PECA)</strong>, and court procedures. Completely free and anonymous.
            </p>

            {/* Premium Consultation Input Box */}
            <form onSubmit={handleHeroSubmit} className="w-full max-w-xl mt-2">
              <div className="flex items-center gap-3 glass-input rounded-xl p-2.5 pl-4 sm:pl-5 border border-emerald-500/15 focus-within:border-emerald-500/40 transition-all shadow-xl">
                <Gavel className="w-5 h-5 text-emerald-500 flex-shrink-0 opacity-80" />
                <input
                  type="text"
                  value={heroQuery}
                  onChange={(e) => setHeroQuery(e.target.value)}
                  placeholder="Describe your case or ask a legal question..."
                  className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none py-1.5 min-w-0"
                />
                <button
                  type="submit"
                  disabled={!heroQuery.trim()}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:scale-[0.98] text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/15 transition-all select-none disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  <span>Ask AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg pt-6 border-t border-emerald-500/[0.08]">
              <div className="relative overflow-hidden p-4 rounded-xl bg-emerald-950/[0.05] border border-emerald-500/[0.05] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 select-none">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Core Datasets</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-1.5 block">PPC & PECA</span>
              </div>
              <div className="relative overflow-hidden p-4 rounded-xl bg-emerald-950/[0.05] border border-emerald-500/[0.05] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 select-none">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Privacy</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-1.5 block">100% Anonymous</span>
              </div>
              <div className="relative overflow-hidden p-4 rounded-xl bg-emerald-950/[0.05] border border-emerald-500/[0.05] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 select-none">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Average Latency</span>
                <span className="text-xs sm:text-sm font-bold text-amber-400 mt-1.5 block">&lt; 3s Reply</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="relative group overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                  text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600
                  hover:from-emerald-600 hover:to-emerald-700 active:scale-[0.98]
                  shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer text-center uppercase tracking-wider"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <MessageSquare className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" />
                <span>Open Direct Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Practice Cards Grid */}
          <div className="lg:col-span-6 w-full mt-6 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Criminal Law */}
              <div 
                onClick={() => handleCardClick("Explain PPC section 302 or theft punishment")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-emerald-950/[0.03] border border-emerald-500/[0.04] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">Criminal Law (PPC)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Get guidance on PPC codes, FIR filing procedures, criminal offences, and bail guidelines.
                  </p>
                </div>
              </div>

              {/* Card 2: Civil Law */}
              <div 
                onClick={() => handleCardClick("How do property inheritance laws work in Pakistan?")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-emerald-950/[0.03] border border-emerald-500/[0.04] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">Civil & Family Law</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Understand land property disputes, contract agreements, marriage/divorce, and inheritance codes.
                  </p>
                </div>
              </div>

              {/* Card 3: CyberPECA Act */}
              <div 
                onClick={() => handleCardClick("Cybercrime laws in Pakistan and how to report harassment")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-emerald-950/[0.03] border border-emerald-500/[0.04] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">Cyber & Digital Rights</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Learn about online blackmail guidelines, cyber fraud protection, and FIA complaint filing.
                  </p>
                </div>
              </div>

              {/* Card 4: Constitutional Rights */}
              <div 
                onClick={() => handleCardClick("What are my fundamental rights under the Constitution of Pakistan?")}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-emerald-950/[0.03] border border-emerald-500/[0.04] hover:bg-emerald-950/[0.1] hover:border-emerald-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/[0.02] select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">Constitutional Rights</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Explore fundamental human rights, high court structures, writ petitions, and case pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Authority Section (Scope of Coverage) */}
        <section className="mt-16 md:mt-24 bg-[#05110a]/50 border border-emerald-500/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Gavel className="w-6 h-6" />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-white font-sans">Coverage Scope & Guidance Capabilities</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                This legal engine is trained on primary legal datasets from Pakistan's statutes. It parses statutory language to provide structured breakdowns, sections, and legal definitions including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2 text-xs font-sans text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pakistan Penal Code (PPC) 1860 offences</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Prevention of Electronic Crimes Act (PECA) 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Code of Civil Procedure (CPC) structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Family Laws & Inheritance frameworks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer & Footer */}
        <footer className="w-full mt-16 md:mt-24 border-t border-emerald-500/[0.05] pt-8 flex flex-col gap-6">
          <div className="bg-[#0e0705]/20 border border-amber-500/10 rounded-xl p-4 flex gap-3.5 items-start max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block">General Legal Disclaimer</span>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                The Pakistan Legal Assistant provides artificial intelligence-generated informational analysis based on statutory texts. It is <strong>not</strong> a law firm and does <strong>not</strong> provide formal legal counsel or represent clients. Use of this application does not establish an attorney-client relationship. Please verify all guidance with qualified advocates registered with the Bar Council before taking legal action.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-500/[0.03]">
            <p className="text-[10px] sm:text-xs text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Pakistan Legal Assistant. Created for academic and educational guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[10px] sm:text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Secure SSL Encryption</span>
              </div>
              <div className="text-slate-800">|</div>
              <div>Statutes Reference Model</div>
              <div className="text-slate-800">|</div>
              <div>Free & Anonymous Consultation</div>
            </div>
          </div>
        </footer>
      </main>

      {/* Chatbot Widget Component */}
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