import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            Informasi & Pertanyaan Umum
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Pertanyaan Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Informasi lengkap seputar prosedur booking, fasilitas armada, serta syarat dan ketentuan sewa di CV. FUSENA JAYA.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-slate-100 hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-900 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3">
          <h3 className="font-bold text-sm text-white">Punya Pertanyaan Lain Yang Belum Terjawab?</h3>
          <p className="text-xs text-slate-300">
            Tim Customer Service kami siap melayani dan menjelaskan rincian jadwal Anda secara langsung.
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20punya%20pertanyaan%20mengenai%20sewa%20armada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanyakan Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
