import { useState } from 'react';
import { siteContent } from '../content/siteContent';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(siteContent.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = siteContent.contactEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-warm-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
          {siteContent.contactTitle}
        </h2>
        <p className="font-sans text-base md:text-lg text-charcoal/60 mb-12">
          {siteContent.contactCTA}
        </p>

        <div className="inline-flex items-center gap-1">
          <a
            href={`mailto:${siteContent.contactEmail}`}
            className="font-sans text-lg text-charcoal/80 hover:text-charcoal transition-colors duration-200"
          >
            {siteContent.contactEmail}
          </a>
          <button
            onClick={copyEmail}
            className="p-1.5 text-charcoal/40 hover:text-charcoal/70 transition-colors duration-200"
            aria-label={copied ? "Copied!" : "Copy email to clipboard"}
            title={copied ? "Copied!" : "Copy email"}
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
