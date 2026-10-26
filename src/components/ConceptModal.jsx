import React, { useEffect } from 'react';
import { X, BookOpen, Lightbulb, Code, Sparkles, CheckCircle } from 'lucide-react';
import CodeBlock from './CodeBlock';
import ConceptMiniDemo from './ConceptMiniDemo';

export default function ConceptModal({ concept, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!concept) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-indigo-50/30 to-white">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
              {concept.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-mono">
              {concept.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-thin">
          {/* Definition & Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5 mb-2">
                <BookOpen className="w-4 h-4" />
                Simple Definition
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                {concept.definition}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-700 flex items-center gap-1.5 mb-2">
                <Lightbulb className="w-4 h-4" />
                Why We Need It (Purpose)
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                {concept.purpose}
              </p>
            </div>
          </div>

          {/* Mini Interactive Sandbox */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Try It Live in the Browser
            </h4>
            <ConceptMiniDemo conceptId={concept.id} />
          </div>

          {/* Complete Code Example */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-indigo-500" />
              Complete React Code Example
            </h4>
            <CodeBlock
              code={concept.codeSnippet}
              title={`${concept.title} Example`}
            />
          </div>

          {/* Line-by-Line Beginner Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Line-by-Line Explanation for Beginners
            </h4>
            <div className="space-y-2.5">
              {concept.explanationLines.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 transition"
                >
                  <code className="text-xs font-mono text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded block w-fit mb-1.5 break-all">
                    {item.line}
                  </code>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold transition cursor-pointer"
          >
            Got it, Close
          </button>
        </div>
      </div>
    </div>
  );
}
