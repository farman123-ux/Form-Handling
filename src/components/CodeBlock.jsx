import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export default function CodeBlock({ code, title = 'React Component Code' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl text-slate-100 font-mono text-sm my-4">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/80">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs text-slate-400 font-sans font-medium flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            {title}
          </span>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-300" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Line Numbers */}
      <div className="overflow-x-auto p-4 max-h-[460px] scrollbar-thin">
        <table className="w-full text-left border-collapse">
          <tbody>
            {lines.map((lineText, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40">
                <td className="pr-4 select-none text-right text-xs text-slate-500 font-sans w-8 align-top py-0.5">
                  {idx + 1}
                </td>
                <td className="whitespace-pre text-xs sm:text-sm text-slate-200 py-0.5 font-mono">
                  {lineText || ' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
