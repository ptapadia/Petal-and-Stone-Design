import { siteContent } from '../content/siteContent';

export default function About() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-light-taupe/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-10">
          {siteContent.aboutTitle}
        </h2>
        <p className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed">
          {siteContent.aboutText}
        </p>
      </div>
    </section>
  );
}
