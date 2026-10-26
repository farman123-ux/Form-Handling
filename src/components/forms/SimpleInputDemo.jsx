import React, { useState } from 'react';

export default function SimpleInputDemo() {
  // Simple state for name
  const [name, setName] = useState('');

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
      <h3 className="font-bold text-slate-800 text-lg">Example 1: Simple Input</h3>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Enter Your Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type name here..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
        />
      </div>

      {/* Output displayed instantly */}
      <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
        <p className="text-indigo-900 font-semibold">
          Output: {name ? `Hello, ${name}!` : 'Start typing above...'}
        </p>
      </div>

      {name && (
        <button
          onClick={() => setName('')}
          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-md transition"
        >
          Clear Name
        </button>
      )}
    </div>
  );
}
