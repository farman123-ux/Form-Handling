import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code2 } from 'lucide-react';
import { coreConcepts } from '../data/conceptsData';
import ConceptCard from '../components/ConceptCard';
import ConceptModal from '../components/ConceptModal';

export default function Home() {
  const [name, setName] = useState('');
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* 3. Hero Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Master Form Handling in <span className="text-indigo-600">React</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Learn how to manage form inputs, handle events, validate user data, and build interactive forms using React Hooks.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            to="/learn"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm flex items-center gap-2 transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>Start Learning</span>
          </Link>
          <Link
            to="/examples"
            className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl text-sm flex items-center gap-2 transition"
          >
            <Code2 className="w-4 h-4 text-indigo-600" />
            <span>Explore Examples</span>
          </Link>
        </div>
      </section>

      {/* 4. What Is Form Handling? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">What Is Form Handling?</h2>
          <p className="mt-2 text-slate-700 text-base">
            "Form handling in React means collecting, managing, and validating user input using React components and state."
          </p>
        </div>

        {/* Simple live example */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
          <label className="block text-xs font-semibold text-slate-700">
            Type your name below:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
          />
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-sm text-indigo-900 font-medium">
            Live Display: {name ? `Hello, ${name}!` : 'Start typing above...'}
          </div>
        </div>
      </section>

      {/* 5. Core Concepts Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Core Concepts</h2>
            <p className="text-slate-600 text-sm">
              The 6 fundamental concepts of form handling in React.
            </p>
          </div>
          <Link to="/learn" className="text-indigo-600 font-semibold text-sm hover:underline">
            View All →
          </Link>
        </div>

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
      </section>

      {/* Modal for Learn More */}
      {selectedConcept && (
        <ConceptModal
          concept={selectedConcept}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </div>
  );
}
