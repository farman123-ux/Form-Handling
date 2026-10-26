import React, { useState } from 'react';
import { interactiveExamples } from '../data/examplesData';
import SimpleInputDemo from '../components/forms/SimpleInputDemo';
import RegistrationFormDemo from '../components/forms/RegistrationFormDemo';
import LoginFormDemo from '../components/forms/LoginFormDemo';
import CodeBlock from '../components/CodeBlock';

export default function Examples() {
  const [selectedId, setSelectedId] = useState('simple-input');

  const example =
    interactiveExamples.find((ex) => ex.id === selectedId) ||
    interactiveExamples[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Interactive Form Examples
        </h1>
        <p className="text-slate-600 text-sm">
          Click an example to test the live form, inspect code, and read line-by-line explanations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {interactiveExamples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedId(ex.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selectedId === ex.id
                ? 'bg-indigo-600 text-white shadow'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {ex.shortTitle}
          </button>
        ))}
      </div>

      {/* Live Working Demo & Expected Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Live Working Demo */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            1. Live Working Demo
          </h2>
          {example.id === 'simple-input' && <SimpleInputDemo />}
          {example.id === 'registration-form' && <RegistrationFormDemo />}
          {example.id === 'login-form' && <LoginFormDemo />}
        </div>

        {/* Expected Output */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
            2. Expected Output
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-slate-50 rounded-lg">
              <strong>Initial State:</strong> {example.expectedOutput.initial}
            </div>
            {example.expectedOutput.duringTyping && (
              <div className="p-3 bg-indigo-50 text-indigo-900 rounded-lg">
                <strong>When Typing:</strong> {example.expectedOutput.duringTyping}
              </div>
            )}
            {example.expectedOutput.onInvalidSubmit && (
              <div className="p-3 bg-rose-50 text-rose-800 rounded-lg">
                <strong>Empty / Invalid:</strong> {example.expectedOutput.onInvalidSubmit}
              </div>
            )}
            {example.expectedOutput.onWeakPassword && (
              <div className="p-3 bg-amber-50 text-amber-800 rounded-lg">
                <strong>Weak Password:</strong> {example.expectedOutput.onWeakPassword}
              </div>
            )}
            {example.expectedOutput.onValidSubmit && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg">
                <strong>Success:</strong> {example.expectedOutput.onValidSubmit}
              </div>
            )}
            {example.expectedOutput.onValidLogin && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg">
                <strong>Success:</strong> {example.expectedOutput.onValidLogin}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code Explanation (Section 7) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          Code Explanation: {example.title}
        </h2>

        {/* Definition & Purpose */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg space-y-1">
            <h3 className="text-xs font-bold uppercase text-indigo-600">Definition</h3>
            <p className="text-sm text-slate-700">{example.definitionAndPurpose.definition}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg space-y-1">
            <h3 className="text-xs font-bold uppercase text-indigo-600">Purpose</h3>
            <p className="text-sm text-slate-700">{example.definitionAndPurpose.purpose}</p>
          </div>
        </div>

        {/* Complete React Code */}
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-500 mb-1">Complete React Code</h3>
          <CodeBlock code={example.code} title={`${example.shortTitle}.jsx`} />
        </div>

        {/* Simple, line-by-line explanation */}
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-500 mb-3">Line-by-Line Explanation</h3>
          <div className="space-y-2">
            {example.explanationLines.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-sm">
                <code className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                  {item.line}
                </code>
                <p className="text-slate-700 text-xs mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
