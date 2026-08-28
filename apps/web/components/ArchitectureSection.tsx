'use client';

import React from 'react';
import { Server, Zap, ShieldAlert, Activity, Cpu, Code2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const awsServices = [
    {
      name: 'Amazon Bedrock',
      role: 'Generative AI Platform',
      description: 'Provides secure runtime integration using official AWS SDK v3 Bedrock Runtime Converse API.',
      icon: Cpu,
      color: 'border-cyan-500/30 text-cyan-400'
    },
    {
      name: 'Amazon Nova',
      role: 'Language & Style Understanding',
      description: 'Understands natural language fashion requests, intent, and occasion context with multi-turn conversation support.',
      icon: Zap,
      color: 'border-purple-500/30 text-purple-400'
    },
    {
      name: 'AWS Lambda',
      role: 'Serverless NestJS Execution',
      description: 'Runs the NestJS backend as a serverless Lambda handler using @codegenie/serverless-express.',
      icon: Server,
      color: 'border-amber-500/30 text-amber-400'
    },
    {
      name: 'Amazon API Gateway',
      role: 'Managed HTTPS Gateway & Throttling',
      description: 'Exposes HTTP API endpoints with route-level rate (2/s) and burst (5) throttling.',
      icon: ShieldAlert,
      color: 'border-blue-500/30 text-blue-400'
    },
    {
      name: 'Amazon CloudWatch',
      role: 'Telemetry & Log Retention',
      description: 'Captures logs, request IDs, processing metrics, and safe error tracebacks with a 14-day log retention policy.',
      icon: Activity,
      color: 'border-emerald-500/30 text-emerald-400'
    }
  ];

  return (
    <section id="architecture" className="py-20 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-bold text-cyan-300 border border-cyan-500/30 mb-3 shadow-md">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>Serverless & AI Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono mb-3">
          AWS Cloud Serverless Infrastructure
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          StyleSeek AI is built on serverless AWS cloud services following least-privilege security standards.
        </p>
      </div>

      {/* Visual Flow Diagram HUD Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-300 mb-8 text-center font-bold">
          ⚡ End-to-End Request Pipeline
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200">
          <div className="px-4 py-2.5 rounded-2xl bg-gray-900 border border-gray-700 font-bold flex items-center gap-2 shadow-md">
            <span>Next.js Web UI</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 font-bold flex items-center gap-2 shadow-md">
            <span>API Gateway (Throttled)</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-200 font-bold flex items-center gap-2 shadow-md">
            <span>AWS Lambda (NestJS)</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 font-bold flex items-center gap-2 shadow-md">
            <span>Deterministic Filter</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-200 font-bold flex items-center gap-2 shadow-md">
            <span>Bedrock (Converse API)</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-pink-950/80 border border-pink-500/40 text-pink-200 font-bold flex items-center gap-2 shadow-md">
            <span>Amazon Nova</span>
          </div>
          <span className="text-cyan-400 font-black text-sm">➔</span>

          <div className="px-4 py-2.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 font-bold flex items-center gap-2 shadow-md">
            <span>Strict Validation</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awsServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className={`glass-card rounded-3xl p-6 border ${service.color} hover:shadow-xl transition-all`}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-2xl bg-gray-900 border border-gray-800 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base font-mono">{service.name}</h4>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{service.role}</span>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
