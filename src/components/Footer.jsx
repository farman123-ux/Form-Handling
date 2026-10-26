import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const techStack = [
    'React.js 19',
    'JavaScript',
    'Tailwind CSS',
    'React Router DOM',
    'useState Hook',
    'Lucide React',
  ];

  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm">
                <Atom className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                React Form Learn
              </span>
            </div>
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              A modern, beginner-friendly educational website dedicated to teaching form handling
              in React. Master controlled inputs, event listeners, state updates, and client validation with live, interactive working forms.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Client-Side Interactive Playground & Tutorial</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-indigo-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-slate-600 hover:text-indigo-600 transition">
                  Core Concepts
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-slate-600 hover:text-indigo-600 transition">
                  Interactive Examples
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition">
                  Login Demo
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-slate-600 hover:text-indigo-600 transition">
                  Register Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        
      </div>
    </footer>
  );
}
