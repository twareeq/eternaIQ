import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTreatments, formatCategory } from "@/lib/cms-parser";

export default function ExploreTreatments() {
  const treatments = getTreatments();

  return (
    <section id="treatments" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column - Intro (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
            <span className="text-white/40 font-title font-medium tracking-wide text-sm mb-4 block">
              Explore Treatments
            </span>
            <h2 className="text-4xl md:text-5xl font-title font-medium text-white tracking-tight mb-8 leading-tight">
              Clinically guided protocols
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm font-body font-normal">
              Premium treatments prescribed by licensed providers and delivered to your door.
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-white/80 font-title font-medium hover:text-accent transition-colors group"
            >
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Treatments Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {treatments.map((item) => (
              <div key={item.slug} className="group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10 group-hover:border-accent/40 transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-1.5 rounded-full glass border border-white/20 text-[10px] font-title font-medium uppercase tracking-widest text-white/90">
                      {formatCategory(item.category)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-title font-medium text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div 
                    className="text-white/40 text-sm leading-relaxed line-clamp-2 font-body font-normal"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-title font-medium text-white/60 uppercase tracking-widest">
                      {item.price}
                    </span>
                    <Link 
                      href={`#`} 
                      className="inline-flex items-center gap-1.5 text-accent font-title font-medium text-sm hover:underline group/link"
                    >
                      Learn More <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
