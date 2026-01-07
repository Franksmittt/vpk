"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ImpactPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const scrollFadeElements = document.querySelectorAll(".scroll-fade");
    scrollFadeElements.forEach((el) => observer.observe(el));

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      scrollFadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [isMounted]);

  const metrics = {
    snaresRemoved: 12,
    meatDonated: 320,
    kmPatrolled: 1450,
    communityMeals: 640,
    waterholesMaintained: 8,
    habitatAcresManaged: 12500,
    antiPoachingPatrols: 156,
    speciesMonitored: 12,
  };

  const conservationInitiatives = [
    {
      title: "Anti-Poaching Operations",
      description: "Regular patrols remove snares, monitor boundaries, and deter illegal activity.",
      metrics: {
        patrols: 156,
        kmPatrolled: 1450,
        snaresRemoved: 12,
      },
      impact: "Zero poaching incidents in the past 12 months.",
    },
    {
      title: "Community Meat Distribution",
      description: "Excess meat from sustainable harvests is distributed to local communities and schools.",
      metrics: {
        kgDonated: 320,
        mealsProvided: 640,
        communitiesServed: 3,
      },
      impact: "Direct nutritional support to 640+ individuals monthly.",
    },
    {
      title: "Habitat Management",
      description: "Active management of waterholes, controlled burns, and vegetation management.",
      metrics: {
        waterholesMaintained: 8,
        acresManaged: 12500,
        controlledBurns: 4,
      },
      impact: "Optimal habitat conditions for all species year-round.",
    },
    {
      title: "Species Monitoring",
      description: "Regular population surveys, health assessments, and genetic diversity tracking.",
      metrics: {
        speciesMonitored: 12,
        healthAssessments: 48,
        populationSurveys: 6,
      },
      impact: "Data-driven management decisions ensure sustainable populations.",
    },
  ];

  const fundAllocation = [
    { category: "Anti-Poaching", percentage: 35, amount: "ZAR 175-250 per day" },
    { category: "Community Programs", percentage: 25, amount: "ZAR 125-175 per day" },
    { category: "Habitat Management", percentage: 20, amount: "ZAR 100-140 per day" },
    { category: "Species Monitoring", percentage: 15, amount: "ZAR 75-105 per day" },
    { category: "Research & Development", percentage: 5, amount: "ZAR 25-35 per day" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-soil/20 via-clay/10 to-charcoal z-0"></div>
        <div className="relative z-20 text-center max-w-5xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-6 md:mb-8 scroll-fade"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light leading-tight scroll-fade">
            Real Impact.
            <br />
            <span className="text-clay">Measurable Results.</span>
          </h1>
          <p className="text-silver/70 font-body text-sm md:text-base uppercase tracking-[0.2em] font-light px-4 max-w-2xl mx-auto scroll-fade mb-3">
            Radical Transparency. Every Rand Accounted For.
          </p>
          <p className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light px-4 max-w-2xl mx-auto scroll-fade">
            CONSERVATION INVESTMENT • MEASURABLE OUTCOMES • EXCLUSIVE ACCESS
          </p>
        </div>
      </section>

      {/* Live Dashboard */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
              Live Conservation
              <br />
              <span className="text-clay">Dashboard</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
              These metrics are updated monthly. Every conservation levy (ZAR 350-500 per person per day) goes directly to these outcomes. This is radical transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
            {[
              { value: metrics.snaresRemoved, label: "Snares Removed", icon: "🔗", color: "text-clay" },
              { value: `${metrics.meatDonated}kg`, label: "Meat Donated", icon: "🥩", color: "text-clay" },
              { value: `${metrics.kmPatrolled}km`, label: "Km Patrolled", icon: "🗺️", color: "text-clay" },
              { value: metrics.communityMeals, label: "Community Meals", icon: "🍽️", color: "text-clay" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="border border-clay/20 p-8 md:p-10 text-center hover:border-clay/40 transition-all duration-500 scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className={`text-4xl md:text-5xl font-heading mb-4 font-light ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-silver/50 font-body uppercase tracking-[0.15em] text-xs font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
            {[
              { value: metrics.waterholesMaintained, label: "Waterholes Maintained", icon: "💧" },
              { value: `${metrics.habitatAcresManaged.toLocaleString()}`, label: "Acres Managed", icon: "🌿" },
              { value: metrics.antiPoachingPatrols, label: "Anti-Poaching Patrols", icon: "🛡️" },
              { value: metrics.speciesMonitored, label: "Species Monitored", icon: "🔬" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="border border-clay/20 p-8 md:p-10 text-center hover:border-clay/40 transition-all duration-500 scroll-fade"
                style={{ transitionDelay: `${(idx + 4) * 150}ms` }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-4xl md:text-5xl font-heading text-clay mb-4 font-light">
                  {metric.value}
                </div>
                <div className="text-silver/50 font-body uppercase tracking-[0.15em] text-xs font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Data Visualization Placeholder */}
          <div className="scroll-fade">
            <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Conservation Impact Breakdown
              </h3>
              <div className="h-64 bg-clay/5 border border-clay/10 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                    Data Visualization
                  </p>
                  <p className="text-silver/30 font-body text-xs tracking-[0.1em] font-light mt-2">
                    Chart.js visualization would render here
                  </p>
                </div>
              </div>
              <p className="text-silver/40 font-body text-xs tracking-[0.05em] font-light italic text-center">
                Monthly breakdown of conservation efforts, species-specific initiatives, and community impact metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
              Fund Allocation
              <br />
              <span className="text-clay">Transparency in Action</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
              Every conservation levy (ZAR 350-500 per person per day) is allocated with complete transparency. This breakdown shows exactly where your investment goes.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            {fundAllocation.map((item, idx) => (
              <div
                key={idx}
                className="scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="border border-clay/20 p-6 md:p-8 hover:border-clay/40 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading text-cream mb-2 font-light">
                        {item.category}
                      </h3>
                      <p className="text-clay font-heading text-lg md:text-xl font-light">
                        {item.amount}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl font-heading text-clay font-light">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-clay/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-clay transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-fade">
            <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                The Philanthropic Pivot
              </h3>
              <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                When you invest in a hunt, you're not just investing in an experience. You're funding anti-poaching patrols, snare removal operations, habitat management, and meat donation programs that feed local communities.
              </p>
              <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed">
                This is radical transparency. Every rand is accounted for. Every kilometer patrolled, every snare removed, every kilogram of meat donated. These are the tangible results of your investment in conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Initiatives */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
              Conservation
              <br />
              <span className="text-clay">Initiatives</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
              Our conservation strategy is multi-faceted, addressing anti-poaching, community support, habitat management, and species monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {conservationInitiatives.map((initiative, idx) => (
              <div
                key={idx}
                className="scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="border border-clay/20 p-8 md:p-10 h-full hover:border-clay/40 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                    {initiative.title}
                  </h3>
                  <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(initiative.metrics).map(([key, value], metricIdx) => (
                      <div key={metricIdx} className="text-center">
                        <div className="text-2xl md:text-3xl font-heading text-clay mb-2 font-light">
                          {typeof value === 'number' ? value.toLocaleString() : value}
                        </div>
                        <div className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-clay/20 pt-4">
                    <p className="text-clay/70 font-body text-sm font-light">
                      <strong className="text-cream">Impact:</strong> {initiative.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
              Community Impact
              <br />
              <span className="text-clay">Beyond Conservation</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
              Our conservation model extends beyond wildlife management to include direct community support and economic development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="scroll-fade">
              <div className="border border-clay/20 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                  Meat Distribution Program
                </h3>
                <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                  Excess meat from sustainable harvests is distributed to local communities, schools, and families in need. This program ensures that every animal harvested contributes to both conservation and community nutrition.
                </p>
                <ul className="space-y-3 text-silver/60 font-body text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">320kg</strong> donated monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">640+ meals</strong> provided to community members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">3 communities</strong> served regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Partnership with local schools for nutrition programs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scroll-fade">
              <div className="border border-clay/20 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                  Economic Development
                </h3>
                <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                  Our operations create employment opportunities, support local businesses, and contribute to the regional economy through sustainable tourism and conservation activities.
                </p>
                <ul className="space-y-3 text-silver/60 font-body text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Local employment in guiding, tracking, and hospitality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Support for local suppliers and service providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Skills development and training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Investment in local infrastructure and facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species-Specific Initiatives */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
              Species-Specific
              <br />
              <span className="text-clay">Conservation Programs</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
              Each species investment supports targeted conservation initiatives designed to maintain healthy populations and optimal habitat conditions.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                species: "Buffalo Stronghold Initiative",
                investment: "$12,000",
                description: "Funds the removal of one post-reproductive bull to sustain the breeding herd's winter feed. This selective harvest maintains optimal herd dynamics and prevents overgrazing during critical periods.",
                outcomes: [
                  "Maintains breeding herd health",
                  "Prevents habitat degradation",
                  "Supports genetic diversity",
                ],
              },
              {
                species: "Kudu Conservation Program",
                investment: "$3,500",
                description: "Supports habitat management and population control to maintain optimal herd dynamics. Funds vegetation management, waterhole maintenance, and population monitoring.",
                outcomes: [
                  "Sustainable population levels",
                  "Optimal habitat conditions",
                  "Trophy quality maintenance",
                ],
              },
              {
                species: "Plains Game Management",
                investment: "Varies by species",
                description: "Comprehensive management of plains game species including Impala, Blue Wildebeest, and Gemsbok. Focuses on sustainable harvest, habitat optimization, and community meat distribution.",
                outcomes: [
                  "Balanced ecosystem",
                  "Community nutrition support",
                  "Sustainable harvest practices",
                ],
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="border border-clay/20 p-8 md:p-10 hover:border-clay/40 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading text-cream mb-2 font-light">
                        {program.species}
                      </h3>
                      <p className="text-clay font-heading text-lg md:text-xl font-light">
                        {program.investment}
                      </p>
                    </div>
                  </div>
                  <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="border-t border-clay/20 pt-4">
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, outcomeIdx) => (
                        <li key={outcomeIdx} className="flex items-start gap-3 text-silver/60 font-body text-sm">
                          <span className="text-clay mt-1">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="border border-clay/20 p-12 md:p-16 bg-charcoal/50 backdrop-blur-sm scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-cream mb-6 md:mb-8 font-light">
              Make Your Impact
              <br />
              <span className="text-clay">Invest in Conservation</span>
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Every hunt is a conservation investment. Join us in creating measurable, transparent impact for wildlife, habitat, and communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/reserve"
                className="px-10 md:px-12 py-4 md:py-5 bg-clay text-charcoal font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/90 transition-all duration-500 font-light group"
              >
                <span className="flex items-center gap-3">
                  Request Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/hunt"
                className="px-10 md:px-12 py-4 md:py-5 border border-clay/50 text-clay font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
              >
                View Conservation Investments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
