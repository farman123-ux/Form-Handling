import React from 'react';
import {Database,Edit3,Send,Layers,CheckCircle2,ShieldAlert,ArrowRight,Code2,} from 'lucide-react';

const iconMap = {
  Database: Database,
  Edit3: Edit3,
  Send: Send,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  ShieldAlert: ShieldAlert,
};

export default function ConceptCard({ concept, onSelect, index }) {
  const IconComponent = iconMap[concept.iconName] || Code2;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group">
      <div>
        {/* Top bar with icon and number */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-50 to-violet-100 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-indigo-400 transition">
            0{index + 1}
          </span>
        </div>

        {/* Badge & Title */}
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-2">
          {concept.badge}
        </span>
        <h3 className="text-lg font-bold text-slate-800 font-mono mb-2 group-hover:text-indigo-600 transition">
          {concept.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {concept.shortDesc}
        </p>

        {/* Mini Preview Box */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-5 text-xs text-slate-500 font-mono overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-indigo-500 font-semibold">// Snippet:</span> {concept.codeSnippet.split('\n')[3] || '...'}
        </div>
      </div>

      {/* Learn More Button */}
      <button
        onClick={() => onSelect(concept)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 text-slate-700 hover:text-white font-semibold text-xs transition duration-200 cursor-pointer border border-slate-200 hover:border-indigo-600 group/btn"
      >
        <span>Learn More & Example</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
