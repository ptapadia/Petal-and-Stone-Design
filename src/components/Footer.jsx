import { siteContent } from '../content/siteContent';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-6 border-t border-light-taupe">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm text-charcoal/50">
          {siteContent.copyright}
        </p>
        <a
          href={`mailto:${siteContent.contactEmail}`}
          className="font-sans text-sm text-charcoal/50 hover:text-charcoal/70 transition-colors"
        >
          {siteContent.contactEmail}
        </a>
      </div>
    </footer>
  );
}
