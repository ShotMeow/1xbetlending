import PrimarySection from "@/src/templates/PrimarySection";
import PartnersSection from "@/src/templates/PartnersSection";
import LookingSection from "@/src/templates/LookingSection";
import SliderSection from "@/src/templates/SliderSection";
import WaySection from "@/src/templates/WaySection";
import SupportSection from "@/src/templates/SupportSection";
import FormSection from "@/src/templates/FormSection";

export default function Home() {
  return (
    <main>
      <PrimarySection />
      <PartnersSection />
      <SliderSection />
      <WaySection />
      <SupportSection />
      <LookingSection />
      <FormSection />
    </main>
  );
}
