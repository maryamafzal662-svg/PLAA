import { useState, useCallback } from 'react';
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  BookOpen,
  ShieldAlert,
  ChevronRight,
  Plus,
  Info,
  X,
  MessageSquare,
  Lock
} from 'lucide-react';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

let messageId = 0;
const createMessage = (role, content) => ({
    id: ++messageId,
    role,
    content,
    timestamp: new Date(),
});

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = createMessage('user', trimmed);
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setIsSidebarOpen(false); // Auto-close sidebar drawer on mobile

    try {
      const res = await fetch("https://n8n.botpos.net/webhook/cb205663-ca47-441a-be6e-67817c4908ea", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: trimmed
        }),
      });

      const data = await res.json();
      const reply = data.output || data.text || data.reply || data.message || "No response received";
      const aiMsg = createMessage('ai', reply);
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error("Webhook error:", err);
      const errMsg = createMessage('ai', 'Connection failed. Check webhook or n8n workflow.');
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const handleNewChat = () => {
    setMessages([]);
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050510] text-slate-100 flex relative font-sans">
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Sidebar mobile backdrop */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* Sidebar Panel - Persistent on Desktop, Drawer on Mobile */}
      <aside className={`fixed inset-y-0 left-0 w-[300px] sm:w-[320px] bg-[#070712] border-r border-white/[0.04] z-40 transition-transform duration-300 lg:static lg:translate-x-0 flex flex-col justify-between 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Sidebar Header */}
          <div className="p-5 flex items-center justify-between border-b border-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/25 ring-1 ring-indigo-400/20">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-white text-sm font-bold tracking-tight">Pakistan Legal</h1>
                <p className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">AI Assistant</p>
              </div>
            </div>
            {/* Close button on mobile */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* New consultation button */}
          <div className="px-4 py-4">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-sm font-semibold text-white transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-indigo-400" />
              New Consultation
            </button>
          </div>

          {/* Guides / Quick Topics Scrollable Area */}
          <div className="flex-1 overflow-y-auto chat-scrollbar px-4 pb-4 space-y-5">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                Legal Guide Modules
              </span>
              <div className="mt-2.5 space-y-2">
                {/* Criminal Card */}
                <button
                  onClick={() => sendMessage("Explain PPC section 302 or theft punishment")}
                  className="w-full text-left group flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-indigo-500/[0.03] border border-white/[0.03] hover:border-indigo-500/15 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Criminal Code (PPC)</h3>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Penal codes, FIR filing, bail guides</p>
                  </div>
                </button>

                {/* Civil Card */}
                <button
                  onClick={() => sendMessage("How do property inheritance laws work in Pakistan?")}
                  className="w-full text-left group flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-indigo-500/[0.03] border border-white/[0.03] hover:border-indigo-500/15 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Civil & Family Law</h3>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Property, contracts, inheritance</p>
                  </div>
                </button>

                {/* Cyber Card */}
                <button
                  onClick={() => sendMessage("Cybercrime laws in Pakistan and how to report harassment")}
                  className="w-full text-left group flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-indigo-500/[0.03] border border-white/[0.03] hover:border-indigo-500/15 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Cyber & Digital Rights</h3>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Online safety, PECA rules, harassment</p>
                  </div>
                </button>

                {/* Constitutional Card */}
                <button
                  onClick={() => sendMessage("What are my fundamental rights under the Constitution of Pakistan?")}
                  className="w-full text-left group flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-indigo-500/[0.03] border border-white/[0.03] hover:border-indigo-500/15 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Constitutional Rights</h3>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Writ petitions, human rights, court systems</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info/Disclaimer Footer */}
        <div className="p-4 border-t border-white/[0.03] bg-black/[0.08] space-y-4">
          <div className="flex gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.03]">
            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-slate-200 leading-none">Private & Secure</h4>
              <p className="text-[10px] text-slate-500 leading-normal mt-1">Consultation is completely anonymous. We do not store log data.</p>
            </div>
          </div>
          <p className="text-[9px] text-slate-600 text-center leading-normal">
            © {new Date().getFullYear()} Pakistan Legal Assistant. Responses are for informative purposes.
          </p>
        </div>
      </aside>

      {/* Main Chat Panel */}
      <section className="flex-1 flex flex-col h-full bg-[#050510]/50 relative z-10 min-w-0">
        <ChatHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {messages.length === 0 ? (
          /* Empty Splash state */
          <div className="flex-1 overflow-y-auto chat-scrollbar flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-lg w-full flex flex-col items-center text-center space-y-6 sm:space-y-7">
              {/* Floating icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/20 ring-1 ring-indigo-400/20">
                <Scale className="w-7 h-7 text-white" />
              </div>

              <div>
                <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Pakistan Legal Assistant
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed max-w-sm mx-auto font-light">
                  Ask me anything about Pakistani law — criminal, civil, cyber, or constitutional.
                </p>
              </div>

              <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

              {/* Suggestions grid inside center area */}
              <div className="w-full space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Quick suggestions
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => sendMessage("Explain PPC section 302")}
                    className="p-3 text-xs text-left text-slate-300 hover:text-white bg-white/[0.01] hover:bg-indigo-500/[0.04] border border-white/[0.03] hover:border-indigo-500/15 rounded-xl transition-all cursor-pointer"
                  >
                    ⚖️ Explain PPC Section 302
                  </button>
                  <button
                    onClick={() => sendMessage("What is the punishment for theft in Pakistan?")}
                    className="p-3 text-xs text-left text-slate-300 hover:text-white bg-white/[0.01] hover:bg-indigo-500/[0.04] border border-white/[0.03] hover:border-indigo-500/15 rounded-xl transition-all cursor-pointer"
                  >
                    🔒 Punishment for theft
                  </button>
                  <button
                    onClick={() => sendMessage("How to file a cyber harassment complaint in Pakistan?")}
                    className="p-3 text-xs text-left text-slate-300 hover:text-white bg-white/[0.01] hover:bg-indigo-500/[0.04] border border-white/[0.03] hover:border-indigo-500/15 rounded-xl transition-all cursor-pointer"
                  >
                    💻 Cybercrime complaint
                  </button>
                  <button
                    onClick={() => sendMessage("How do Muslim family laws define child custody in Pakistan?")}
                    className="p-3 text-xs text-left text-slate-300 hover:text-white bg-white/[0.01] hover:bg-indigo-500/[0.04] border border-white/[0.03] hover:border-indigo-500/15 rounded-xl transition-all cursor-pointer"
                  >
                    📝 Muslim family / child custody law
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Conversation stream state */
          <ChatMessages 
            messages={messages} 
            isTyping={isTyping} 
            onSuggestionSelect={sendMessage} 
          />
        )}

        <ChatInput onSend={sendMessage} isLoading={isTyping} />
      </section>
    </div>
  );
}

export default App;