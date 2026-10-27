'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { X, Send, Sparkles, RotateCcw, Compass, ExternalLink, ChevronDown } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  'How do I perform the Temizuya purification ritual?',
  'What is the best 7-day temple route between Tokyo & Kyoto?',
  'What should I explore in Hokkaido vs. Tohoku?',
  'How do luggage and reserved seats work on the Shinkansen?',
  'Tell me about the 88-Temple Pilgrimage in Shikoku',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '**Konbanwa (こんばんは). Welcome to Japan.**\n\nI am your **Japan Heritage Travel Concierge**. You can ask me any question regarding Japan’s 8 regions, 47 prefectures, shrine and temple etiquette, scenic trains, seasonal festivals, or how to navigate our regional guides.',
      timestamp: 'Now',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Send message function declared with useCallback to prevent stale references
  const handleSendMessage = useCallback(async (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const history = [...messages, userMessage].map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      const botReply = data.reply || "I am reflecting upon your query. Please ask again shortly.";

      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content:
          "I apologize, our travel guide connection is temporarily disrupted. Please explore our [Regional Atlas](/regions) or try asking again in a few moments.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  // Auto-scroll when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Listen for custom trigger events from anywhere in the app
  useEffect(() => {
    const handleCustomTrigger = (event: Event) => {
      const customEvent = event as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        handleSendMessage(customEvent.detail.prompt);
      }
    };

    window.addEventListener('open-japan-chat', handleCustomTrigger);
    return () => window.removeEventListener('open-japan-chat', handleCustomTrigger);
  }, [handleSendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          '**The path is reset.** How may I assist your voyage across Japan today? Ask about any province, temple custom, or travel route.',
        timestamp: 'Now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-[999]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-3 px-4 py-3 bg-[#0a0e12]/90 backdrop-blur-md border border-[#c83e2b]/50 hover:border-[#c83e2b] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(200,62,43,0.25)] text-[#dfe7e0] transition-all duration-300"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Open Japan Travel Concierge"
        >
          {/* Subtle pulsating ember ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#c83e2b] to-[#e8583c] opacity-30 blur-sm group-hover:opacity-60 transition duration-500 animate-pulse" />

          {/* Torii / Lantern Icon */}
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#c83e2b] text-white shadow-inner">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
              <path d="M3 6h18M5 10h14M8 6v14M16 6v14" />
            </svg>
          </span>

          <span className="relative flex flex-col text-left">
            <span className="text-xs font-medium tracking-widest uppercase text-[#dfe7e0]">
              Ask Concierge
            </span>
            <span className="text-[10px] tracking-wider text-[#aab4ad] font-light">
              AI Japan Travel Guide
            </span>
          </span>

          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-[#aab4ad] ml-1" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-[#e8583c] ml-1 animate-pulse" />
          )}
        </motion.button>
      </div>

      {/* Slide-up Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[440px] max-h-[78vh] h-[640px] z-[1000] flex flex-col bg-[#070b0f]/95 backdrop-blur-xl border border-[rgba(223,231,224,0.14)] rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.92),0_0_35px_rgba(200,62,43,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(223,231,224,0.08)] bg-[#05070a]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c83e2b]/20 border border-[#c83e2b]/40 flex items-center justify-center text-[#e8583c]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-wider uppercase text-[#dfe7e0] flex items-center gap-2">
                    Japan Concierge
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#c83e2b]/30 text-[#e8583c] tracking-normal font-mono">
                      AI 3.8
                    </span>
                  </h3>
                  <p className="text-[11px] text-[#78837c] tracking-widest font-serif italic">
                    神様 · National Tourism & Heritage Guide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[#aab4ad]">
                <button
                  onClick={handleResetChat}
                  title="Clear conversation"
                  className="p-1.5 hover:text-[#dfe7e0] hover:bg-white/5 rounded-lg transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 hover:text-[#dfe7e0] hover:bg-white/5 rounded-lg transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-4 py-2 border-b border-[rgba(223,231,224,0.06)] bg-[#040608]/60 overflow-x-auto no-scrollbar flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#78837c] shrink-0 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#c83e2b]" /> Prompts:
              </span>
              {STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="text-[11px] text-[#aab4ad] hover:text-[#dfe7e0] bg-white/[0.04] hover:bg-white/[0.08] border border-[rgba(223,231,224,0.08)] px-2.5 py-1 rounded-full whitespace-nowrap transition shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#c83e2b] text-white shadow-md rounded-br-none'
                        : 'bg-[#0f141a] text-[#dfe7e0] border border-[rgba(223,231,224,0.09)] rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-headings:text-[#dfe7e0] prose-headings:my-2 prose-a:text-[#e8583c] prose-a:underline hover:prose-a:text-white prose-ul:my-1.5 prose-li:my-0.5">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-[#5a6460] mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#aab4ad] p-2 bg-[#0f141a]/60 border border-[rgba(223,231,224,0.06)] rounded-xl w-fit">
                  <div className="flex gap-1 items-center px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c83e2b] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8583c] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfe7e0] animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span>Consulting Japan travel archives...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#05070a] border-t border-[rgba(223,231,224,0.08)]">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about provinces, temples, rail passes, or food..."
                  disabled={isLoading}
                  className="w-full bg-[#0a0f14] text-[#dfe7e0] placeholder-[#5a6460] text-xs sm:text-sm px-4 py-3 pr-12 rounded-xl border border-[rgba(223,231,224,0.12)] focus:outline-none focus:border-[#c83e2b] focus:ring-1 focus:ring-[#c83e2b] transition disabled:opacity-50"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 rounded-lg bg-[#c83e2b] hover:bg-[#e8583c] text-white disabled:opacity-40 disabled:hover:bg-[#c83e2b] transition"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-[#5a6460]">
                <span>Grounded in JNTO official tourism intelligence</span>
                <Link
                  href="/regions"
                  className="text-[#aab4ad] hover:text-[#dfe7e0] flex items-center gap-1 transition"
                >
                  <span>Regional Atlas</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
