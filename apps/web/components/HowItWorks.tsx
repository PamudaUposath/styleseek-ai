'use client';

import React from 'react';
import { MessageSquare, Filter, Cpu, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: '1. User Request',
      description: 'Describe clothing needs in natural language, specifying budget, colour, size, or occasion.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Filter,
      title: '2. Deterministic Backend Filtering',
      description: 'NestJS backend parses hard rules (e.g. max budget under LKR 3,000) and filters available candidates first.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Cpu,
      title: '3. Amazon Bedrock & Nova Inference',
      description: 'Amazon Nova analyzes style intent and matches candidates securely via Converse API.',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: '4. Catalogue Validation',
      description: 'Backend validates every returned product ID, purges out-of-stock items, and returns real products.',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
          How StyleSeek AI Works
        </h2>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Combining deterministic backend safeguards with Amazon Bedrock generative AI for accurate fashion recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-gray-800 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/30 transition-all"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
