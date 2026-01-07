"use client";

import { useState } from "react";

export default function ReservePage() {
  const [formData, setFormData] = useState({
    hunters: 1,
    observers: 0,
    days: 5,
    dailyRate: 500,
    speciesFees: 0,
    levy: 50,
  });

  const calculateTotal = () => {
    const dailyCost =
      formData.days *
      formData.dailyRate *
      (formData.hunters + formData.observers);
    const conservationContribution =
      formData.levy *
      (formData.hunters + formData.observers) *
      formData.days;
    const total = dailyCost + formData.speciesFees + conservationContribution;
    return {
      dailyCost,
      conservationContribution,
      total,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="min-h-screen page-container">
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-4xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light">
            Reserve Your
            <br />
            Journey
          </h1>
          <p className="text-silver/70 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-light px-4">
            Conservation Investment Calculator
          </p>
          <p className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light px-4 mt-3">
            Reservations by application • Subject to availability
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 lg:py-32 max-w-6xl">
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Conservation Investment
              <br />
              Calculator
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl font-light">
              This is not a transaction—it is a legacy. Every contribution goes directly to measurable conservation outcomes in the Waterberg Biosphere. We curate each guest experience to ensure the highest standards of conservation and ethical practice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Inputs */}
            <div className="border border-clay/20 p-12 space-y-8">
              <h3 className="text-2xl font-heading text-cream mb-8 font-light">
                Your Journey Details
              </h3>

              {[
                { label: "Number of Hunters", key: "hunters", min: 1 },
                { label: "Number of Observers", key: "observers", min: 0 },
                { label: "Number of Days", key: "days", min: 1 },
                {
                  label: "Species Investment (USD)",
                  key: "speciesFees",
                  min: 0,
                  type: "float",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-silver/60 font-body text-xs uppercase tracking-[0.1em] mb-3 font-light">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    min={field.min}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.key]:
                          field.type === "float"
                            ? parseFloat(e.target.value) || 0
                            : parseInt(e.target.value) || field.min || 0,
                      })
                    }
                    className="w-full bg-charcoal border border-clay/20 px-6 py-4 text-cream font-body focus:outline-none focus:border-clay transition-all duration-300 font-light"
                  />
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="border border-clay/20 p-12">
              <h3 className="text-2xl font-heading text-cream mb-8 font-light">
                Investment Breakdown
              </h3>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center pb-6 border-b border-clay/10">
                  <span className="text-silver/60 font-body text-sm tracking-[0.05em] font-light">
                    Daily Rate
                  </span>
                  <span className="text-cream font-heading text-xl font-light">
                    ${totals.dailyCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-clay/10">
                  <span className="text-silver/60 font-body text-sm tracking-[0.05em] font-light">
                    Species Investment
                  </span>
                  <span className="text-cream font-heading text-xl font-light">
                    ${formData.speciesFees.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-clay/10">
                  <span className="text-clay font-body text-sm tracking-[0.05em] font-light">
                    Conservation Contribution
                  </span>
                  <span className="text-clay font-heading text-xl font-light">
                    ${totals.conservationContribution.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-6">
                  <span className="text-cream font-heading text-2xl font-light">
                    Total Investment
                  </span>
                  <span className="text-clay font-heading text-3xl font-light">
                    ${totals.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-silver/40 font-body text-xs mb-4 tracking-[0.05em] font-light">
                  Investment Breakdown
                </p>
                <div className="h-32 bg-clay/5 border border-clay/10 flex items-center justify-center">
                  <p className="text-silver/30 font-body text-xs tracking-[0.1em] font-light">
                    [Chart showing "Hunting Experience" vs "Conservation Contribution" split]
                  </p>
                </div>
              </div>

              <div className="mb-6 p-4 rounded" style={{ background: "rgba(184, 115, 51, 0.1)", border: "1px solid rgba(184, 115, 51, 0.2)" }}>
                <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                  <span className="text-clay font-semibold">Minimum Stay:</span> We recommend a 3-4 night stay for the full experience. Exclusive use of the lodge available.
                </p>
              </div>

              <button className="w-full px-10 py-4 border border-clay/50 text-clay font-body text-xs uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light">
                Calculate My Contribution
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
