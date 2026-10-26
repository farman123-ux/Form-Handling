import React, { useState } from 'react';

export default function ConceptMiniDemo({ conceptId }) {
  const [val, setVal] = useState('');
  const [submitMsg, setSubmitMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });
  const [pass, setPass] = useState('');

  if (conceptId === 'useState' || conceptId === 'onChange') {
    return (
      <div className="bg-slate-900 rounded-lg p-3 text-white text-xs space-y-2">
        <label className="text-slate-300">Type to update state:</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Type here..."
          className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100"
        />
        <p className="text-emerald-400 font-mono">Current State: "{val}"</p>
      </div>
    );
  }

  if (conceptId === 'onSubmit' || conceptId === 'eventPreventDefault') {
    return (
      <div className="bg-slate-900 rounded-lg p-3 text-white text-xs space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitMsg('Form submitted! No page reload.');
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            placeholder="Type and click submit"
            className="flex-1 px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-slate-100"
          />
          <button type="submit" className="px-3 py-1 bg-indigo-600 rounded text-white font-medium">
            Submit
          </button>
        </form>
        {submitMsg && <p className="text-emerald-400 font-mono">{submitMsg}</p>}
      </div>
    );
  }

  if (conceptId === 'managingFormData') {
    return (
      <div className="bg-slate-900 rounded-lg p-3 text-white text-xs space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <input
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-100"
          />
          <input
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-100"
          />
        </div>
        <p className="text-emerald-400 font-mono">{JSON.stringify(form)}</p>
      </div>
    );
  }

  if (conceptId === 'formValidation') {
    return (
      <div className="bg-slate-900 rounded-lg p-3 text-white text-xs space-y-2">
        <label className="text-slate-300">Password (min 6 characters):</label>
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password..."
          className="w-full px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-100"
        />
        <p className={pass.length >= 6 ? 'text-emerald-400 font-mono' : 'text-rose-400 font-mono'}>
          {pass.length >= 6 ? '✓ Valid (6+ characters)' : `✗ Invalid (${pass.length}/6 characters)`}
        </p>
      </div>
    );
  }

  return null;
}
