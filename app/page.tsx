import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Companion One"
          topic="Topic One"
          subject="Subject One"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
        <CompanionCard
          id="1"
          name="Companion One"
          topic="Topic One"
          subject="Subject One"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
        <CompanionCard
          id="1"
          name="Companion One"
          topic="Topic One"
          subject="Subject One"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
