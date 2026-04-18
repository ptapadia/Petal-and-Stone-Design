import { siteContent } from '../content/siteContent';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteContent.heroImage})` }}
      />
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered content */}
      <div className="relative text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-wide mb-6">
          {siteContent.businessName}
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 font-light tracking-wide">
          {siteContent.headline}
        </p>
      </div>
    </section>
  );
}
