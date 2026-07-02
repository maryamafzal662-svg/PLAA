import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#0f0825] relative overflow-hidden">
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

      {/* Demo Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen min-h-[100dvh] px-5 sm:px-6 text-center">
        <div className="mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
            text-[11px] sm:text-xs font-semibold
            bg-indigo-500/[0.08] text-indigo-300 border border-indigo-500/15
            backdrop-blur-sm tracking-wide uppercase">
            ⚖️ AI-Powered Legal Assistant
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-5 leading-[1.15] sm:leading-[1.1] tracking-tight">
          Pakistani Legal
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            AI Assistant
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg mb-8 sm:mb-10 leading-relaxed font-light">
          Get instant answers about Pakistani law — PPC, CrPC, cybercrime, constitutional matters, and more.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 online-dot" />
            <span className="font-medium">Online</span>
          </div>
          <span className="text-slate-800">•</span>
          <span className="font-medium">Powered by AI</span>
          <span className="text-slate-800">•</span>
          <span className="font-medium">Free to use</span>
        </div>
      </div>

      {/* Chatbot Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;