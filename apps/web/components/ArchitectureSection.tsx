'use client';

import React from 'react';
import { Server, Zap, ShieldAlert, Activity, Cpu, Code2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const awsServices = [
    {
      name: 'Amazon Bedrock',
      role: 'Generative AI Platform',
      description: 'Provides secure, managed access to Amazon Nova foundation models via official AWS SDK v3 Bedrock Runtime Converse API.',
      icon: Cpu,
      color: 'border-indigo-500/30 text-indigo-400'
    },
    {
      name: 'Amazon Nova',
      role: 'Language & Style Understanding',
      description: 'Understands natural language fashion requests, intent, occasion, and ranks candidate products dynamically.',
      icon: Zap,
      color: 'border-purple-500/30 text-purple-400'
    },
    {
      name: 'AWS Lambda',
      role: 'Serverless NestJS Execution',
      description: 'Runs the NestJS backend as a serverless Lambda handler using @codegenie/serverless-express with zero static server management.',
      icon: Server,
      color: 'border-amber-500/30 text-amber-400'
    },
    {
      name: 'Amazon API Gateway',
      role: 'Managed HTTPS Gateway & Throttling',
      description: 'Exposes HTTP API endpoints with route-level rate and burst throttling to prevent abuse.',
      icon: ShieldAlert,
      color: 'border-cyan-500/30 text-cyan-400'
    },
    {
      name: 'Amazon CloudWatch',
      role: 'Logging & Telemetry',
      description: 'Monitors application execution, request IDs, processing duration, and safe error tracebacks with defined log retention.',
      icon: Activity,
      color: 'border-emerald-500/30 text-emerald-400'
    }
  ];

  return (
    <section id="architecture" className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-3">
          <Code2 className="w-3.5 h-3.5" />
          Serverless & AI Architecture
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
          AWS Cloud Architecture
        </h2>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          StyleSeek AI is built on modern AWS cloud services following least-privilege security and serverless best practices.
        </p>
      </div>

      {/* Visual Flow Diagram Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-12 border border-gray-800 shadow-xl">
        <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-6 text-center">
          End-to-End System Request Flow
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-300">
          <div className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 font-semibold flex items-center gap-2">
            <span>Next.js Web UI</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-700/50 text-cyan-200 font-semibold flex items-center gap-2">
            <span>API Gateway (Throttled)</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-amber-950/60 border border-amber-700/50 text-amber-200 font-semibold flex items-center gap-2">
            <span>AWS Lambda (NestJS)</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-indigo-950/60 border border-indigo-700/50 text-indigo-200 font-semibold flex items-center gap-2">
            <span>Deterministic Filter</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-700/50 text-purple-200 font-semibold flex items-center gap-2">
            <span>Bedrock (Converse API)</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-pink-950/60 border border-pink-700/50 text-pink-200 font-semibold flex items-center gap-2">
            <span>Amazon Nova</span>
          </div>
          <span className="text-indigo-400 font-bold">➔</span>

          <div className="px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 font-semibold flex items-center gap-2">
            <span>Strict Validation</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awsServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className={`glass-card rounded-2xl p-6 border ${service.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{service.name}</h4>
                  <span className="text-[11px] text-gray-400 font-medium">{service.role}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
