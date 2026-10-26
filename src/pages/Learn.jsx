import React, { useState } from 'react';
import { coreConcepts } from '../data/conceptsData';
import ConceptCard from '../components/ConceptCard';
import ConceptModal from '../components/ConceptModal';

export default function Learn() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Core Concepts of Form Handling
        </h1>
        <p className="text-slate-600 text-sm">
          Click "Learn More" on any card to see simple definitions, code snippets, and line-by-line explanations.
        </p>
      </div>

      {/* 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreConcepts.map((concept, index) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            index={index}
            onSelect={(item) => setSelectedConcept(item)}
          />
        ))}
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-800">Quick Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                <th className="py-2.5 px-4">Concept</th>
                <th className="py-2.5 px-4">Description</th>
                <th className="py-2.5 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {coreConcepts.map((c) => (
                <tr key={c.id}>
                  <td className="py-2.5 px-4 font-mono font-bold text-indigo-600">{c.title}</td>
                  <td className="py-2.5 px-4 text-slate-700">{c.shortDesc}</td>
                  <td className="py-2.5 px-4">
                    <button
                      onClick={() => setSelectedConcept(c)}
                      className="text-xs text-indigo-600 font-semibold hover:underline"
                    >
                      Learn More →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedConcept && (
        <ConceptModal
          concept={selectedConcept}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </div>
  );
}
