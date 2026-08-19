import { HeroCarousel } from "@/components/hero-carousel";
import { ClassificationPanel } from "@/components/classification-panel";
import AsideApprovedMovies from "./AsideApprovedMovies";

/**
 * Composed mobile-first: a single column is the base case, and the desktop
 * three-column grid is the enhancement. Previously this was
 * `lg:grid-cols-[5fr_3fr_2fr]`, which collapsed on mobile into three
 * unrelated stacked panels with no relationship to each other.
 *
 * `MagicParticles` — 18 infinite framer-motion loops running below the fold
 * forever — was removed along with the hero's other competing ambient
 * effects. See hero-carousel.tsx.
 */
export function HeroSection() {
  return (
    <section className="section pt-6 pb-(--space-block)" aria-label="Highlights">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,2fr)] lg:items-stretch">
        <HeroCarousel />
        <AsideApprovedMovies />
        <ClassificationPanel />
      </div>
    </section>
  );
}
