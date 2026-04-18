import Hero from "@/components/sections/Hero";
import Approach from "@/components/sections/Approach";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import ExploreTreatments from "@/components/sections/ExploreTreatments";
import OptimizationPillars from "@/components/sections/OptimizationPillars";
import WhyEterna from "@/components/sections/WhyEterna";
import Outcomes from "@/components/sections/Outcomes";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";
import FAQ from "@/components/sections/FAQ";
import BottomCTA from "@/components/sections/BottomCTA";
import EmailSignup from "@/components/sections/EmailSignup";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Approach />
      <AssessmentCTA />
      <ExploreTreatments />
      <OptimizationPillars />
      <WhyEterna />
      <Outcomes />
      <About />
      <Leadership />
      <FAQ />
      <BottomCTA />
    </main>
  );
}
