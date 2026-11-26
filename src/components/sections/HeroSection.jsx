/**
 * HeroSection — name, title, CTAs and a portrait with a 3D mouse-tilt frame
 * + floating stat badges, closed by a scrolling concepts strip.
 */
import HeroIntro from './hero/HeroIntro';
import HeroVisual from './hero/HeroVisual';
import HeroRibbon from './hero/HeroRibbon';
import s from './hero/Hero.module.css';

export default function HeroSection() {
  return (
    <section id="top" className={`${s.hero} section`}>
      <div className={`container ${s.heroGrid}`}>
        <HeroIntro />
        <HeroVisual />
      </div>
      <HeroRibbon />
    </section>
  );
}
