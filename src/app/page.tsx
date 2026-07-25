import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, FileSpreadsheet, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const tools = [
    {
      title: 'ATS Resume Scanner',
      description: 'Scan PDF/DOCX resumes against Job Descriptions with 100% offline security.',
      icon: FileText,
      href: '/ats-checker',
      badge: '100% Offline'
    },
    {
      title: 'PDF Utilities Suite',
      description: 'Merge, split, reorder, and convert images to PDF directly in your browser memory.',
      icon: FileSpreadsheet,
      href: '/pdf-tools',
      badge: 'pdf-lib Core'
    },
    {
      title: 'SSL & DNS Security Inspector',
      description: 'Audit certificate chains, SAN names, DNS SPF/DMARC records & security headers.',
      icon: ShieldCheck,
      href: '/ssl-inspector',
      badge: 'SecOps Diagnostics'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1 text-xs font-mono text-cyan-400 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Zero-Server Uploads • 100% Browser-Based Security
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Client-Side PDF & Tech Toolbox
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            High-performance browser tools for IT Administrators, SecOps Engineers, and Job Seekers.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">{tool.title}</h2>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{tool.description}</p>
                </div>

                <Link href={tool.href} className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                  Launch Tool <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
