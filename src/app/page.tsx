'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Server, 
  Cloud, 
  Lock, 
  Search, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Cpu, 
  FileText,
  Mail,
  Network
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'ENDPOINT' | 'CLOUD' | 'SECOPS' | 'NETWORK' | 'AI & TOOLS';
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: number;
  highlight?: boolean;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects: Project[] = [
    // PHISHING & SECOPS
    {
      id: 'phishing-risk-analyzer',
      title: 'Phishing Risk & Susceptibility Analyzer',
      category: 'SECOPS',
      description: 'Open-source Phishing Threat & Human Susceptibility Analysis Engine. Parses email headers for SPF/DKIM/DMARC alignment, typosquatting domains, urgency triggers, and outputs risk scores + coaching tips.',
      tags: ['Python', 'Email Triage', 'SPF/DKIM/DMARC', 'Security Awareness', 'Typosquatting'],
      githubUrl: 'https://github.com/hrana36/phishing-risk-analyzer',
      highlight: true
    },
    {
      id: 'vulnerability-scanning-pipeline',
      title: 'Vulnerability Scanning & Remediation Pipeline',
      category: 'SECOPS',
      description: 'Automated vulnerability management pipeline parsing Nessus/OpenVAS scan exports, extracting CVE severity scores, and triggering automated Ansible patch remediation.',
      tags: ['Nessus', 'OpenVAS', 'CVSS 3.1', 'Ansible', 'Vulnerability Management'],
      githubUrl: 'https://github.com/hrana36/vulnerability-scanning-pipeline'
    },
    {
      id: 'siem-log-management',
      title: 'SIEM Implementation & Log Management Lab',
      category: 'SECOPS',
      description: 'Centralized SIEM and Log Management lab deploying Logstash GROK ingest pipelines, Syslog TLS forwarding, and Wazuh security alerting rules.',
      tags: ['Logstash', 'Wazuh SIEM', 'Elasticsearch', 'Syslog TLS', 'GROK Parsing'],
      githubUrl: 'https://github.com/hrana36/siem-log-management'
    },

    // ENDPOINT
    {
      id: 'server-hardening-baseline',
      title: 'Server Hardening & Baseline Configuration',
      category: 'ENDPOINT',
      description: 'Production server hardening lab implementing Center for Internet Security (CIS) Benchmarks for Windows Server 2022 and Ubuntu Linux 22.04 LTS.',
      tags: ['CIS Benchmarks', 'Group Policy (GPO)', 'Linux Hardening', 'LAPS', 'Audit Policy'],
      githubUrl: 'https://github.com/hrana36/server-hardening-baseline'
    },
    {
      id: 'endpoint-monitoring-edr',
      title: 'Endpoint Monitoring & EDR Deployment',
      category: 'ENDPOINT',
      description: 'Open-source EDR and threat detection lab deploying Wazuh Agent, Sysmon process auditing, and custom threat detection rules for encoded PowerShell.',
      tags: ['Wazuh EDR', 'Sysmon', 'Process Auditing', 'Threat Detection', 'MITRE ATT&CK'],
      githubUrl: 'https://github.com/hrana36/endpoint-monitoring-edr'
    },
    {
      id: 'automated-patching-config',
      title: 'Automated Patching & Configuration Management',
      category: 'ENDPOINT',
      description: 'Automated OS patch enforcement and compliance monitoring using Ansible playbooks, PowerShell PSWindowsUpdate, and Datto/Ninja RMM scripts.',
      tags: ['Ansible', 'Datto RMM', 'NinjaRMM', 'PowerShell', 'Patch Compliance'],
      githubUrl: 'https://github.com/hrana36/automated-patching-config'
    },
    {
      id: 'active-directory-security-lab',
      title: 'Active Directory Security & Hardening Lab',
      category: 'ENDPOINT',
      description: 'Active Directory security lab covering Domain Controller security, GPO hardening, Kerberos pre-authentication enforcement, LDAP signing, and AD health audits.',
      tags: ['Active Directory', 'GPO Hardening', 'Kerberos AES', 'LDAP Signing', 'PowerShell Audit'],
      githubUrl: 'https://github.com/hrana36/active-directory-security-lab'
    },

    // CLOUD
    {
      id: 'cloud-hardening-monitoring',
      title: 'Cloud Environment Hardening & Monitoring',
      category: 'CLOUD',
      description: 'Cloud security baseline IaC module in Terraform deploying AWS GuardDuty, Security Hub, CloudTrail audit logging, and IAM password policies.',
      tags: ['Terraform', 'AWS GuardDuty', 'AWS Security Hub', 'CloudTrail', 'IAM Security'],
      githubUrl: 'https://github.com/hrana36/cloud-hardening-monitoring'
    },
    {
      id: 'container-security-hardening',
      title: 'Container Security: Image Scanning & Hardening',
      category: 'CLOUD',
      description: 'Container DevSecOps lab with multi-stage hardened Alpine Dockerfiles, unprivileged non-root execution, and Trivy vulnerability CI/CD pipelines.',
      tags: ['Docker', 'Trivy Scanner', 'Multi-Stage Build', 'Non-Root User', 'DevSecOps'],
      githubUrl: 'https://github.com/hrana36/container-security-hardening'
    },

    // NETWORK
    {
      id: 'secure-network-segmentation',
      title: 'Secure Network Segmentation & Firewall Lab',
      category: 'NETWORK',
      description: 'Zero Trust network segmentation architecture featuring pfSense / OPNsense firewall configurations, 802.1Q VLANs, strict inter-VLAN ACLs, and automated verification scripts.',
      tags: ['pfSense', 'OPNsense', 'Zero Trust', 'VLAN 802.1Q', 'Firewall Rules'],
      githubUrl: 'https://github.com/hrana36/secure-network-segmentation',
      highlight: true
    },
    {
      id: 'network-ids-ips',
      title: 'Network IDS/IPS Deployment & Rule Tuning',
      category: 'NETWORK',
      description: 'Enterprise intrusion detection lab with custom Suricata & Snort rules detecting SQL injection, reverse shells, ICMP recon probes, and pcap packet analysis.',
      tags: ['Suricata', 'Snort', 'IDS/IPS Rules', 'Packet Analysis', 'Attack Simulation'],
      githubUrl: 'https://github.com/hrana36/network-ids-ips'
    },

    // AI & TOOLS
    {
      id: 'claude-os',
      title: 'ClaudeOS: 33 Production AI Skills Toolkit',
      category: 'AI & TOOLS',
      description: 'Open-source toolkit bundling 33 production-ready Claude Skills, domain knowledge graphs, ITOC operations runbooks, and automated ZIP packaging scripts.',
      tags: ['Claude AI', 'Claude Skills', 'ITOC Ops', 'SecOps', 'PowerShell Automation'],
      githubUrl: 'https://github.com/hrana36/ClaudeOS',
      highlight: true
    },
    {
      id: 'client-side-toolbox',
      title: 'Client-Side Web Utility & Security Suite',
      category: 'AI & TOOLS',
      description: '100% offline browser-based web utility suite built with Next.js 14, TypeScript, and pdf-lib. Features ATS Resume Scanner, PDF Manipulator, and SSL/DNS Inspector.',
      tags: ['Next.js 14', 'TypeScript', 'pdf-lib', 'ATS Scanner', 'SSL Inspector'],
      githubUrl: 'https://github.com/hrana36/client-side-toolbox'
    }
  ];

  const categories = ['ALL', 'ENDPOINT', 'CLOUD', 'SECOPS', 'NETWORK', 'AI & TOOLS'];

  const filteredProjects = projects.filter((project) => {
    const matchesTab = activeTab === 'ALL' || project.category === activeTab;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs font-mono text-cyan-400 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Md Habibur Rahaman Rana • Systems Operations & Cloud Security Specialist
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            SecOps & Engineering Labs
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Production-focused hands-on security labs, infrastructure-as-code baselines, network segmentation topologies, and open-source tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a 
              href="https://github.com/hrana36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 text-xs font-mono px-4 py-2 rounded-lg transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              GitHub Profile (hrana36)
            </a>
            <a 
              href="https://www.linkedin.com/in/hrana36/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-all"
            >
              LinkedIn Profile →
            </a>
          </div>
        </header>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* TABS */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeTab === tab 
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search labs, tools, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-slate-900/60 border ${
                project.highlight ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/5' : 'border-slate-800'
              } rounded-xl p-6 hover:border-cyan-400/60 transition-all flex flex-col justify-between group`}
            >
              <div>
                {/* CARD HEADER */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono font-bold bg-slate-950 border border-cyan-500/30 text-cyan-400 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                {/* CARD TITLE */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD FOOTER: DIRECT GITHUB REPOSITORY LINK */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 font-mono font-bold text-xs py-2 px-4 rounded-lg transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  View GitHub Repository →
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-xs text-slate-500 border-t border-slate-800/80 pt-8">
          <p>© 2026 Md Habibur Rahaman Rana • Systems Operations & Cloud Security Specialist</p>
          <p className="mt-1">
            Portfolio hosted on Vercel • All projects open-source under MIT License
          </p>
        </footer>

      </div>
    </main>
  );
}
