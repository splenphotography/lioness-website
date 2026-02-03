import { Facebook, Instagram } from 'lucide-react';

type SocialLinksProps = {
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  className?: string;
};

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  // Simple, clean TikTok glyph (inline SVG) to avoid adding extra icon libraries.
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.6 3c.4 2.7 2.2 4.9 4.8 5.4v3.2c-1.9.1-3.7-.5-5.2-1.6v6.5c0 3.2-2.6 5.8-5.8 5.8S4.6 19.7 4.6 16.5c0-3.2 2.6-5.8 5.8-5.8.6 0 1.1.1 1.6.2v3.5c-.5-.2-1-.4-1.6-.4-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.4 0 2.6-1.1 2.6-3V3h3z"
      />
    </svg>
  );
}

export function SocialLinks({
  facebookUrl = 'https://facebook.com',
  instagramUrl = 'https://instagram.com',
  tiktokUrl = 'https://tiktok.com',
  className,
}: SocialLinksProps) {
  return (
    <div className={className ?? ''}>
      <div className="flex items-center gap-3">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-900/40 bg-slate-950/30 hover:bg-amber-500/10 hover:border-amber-600/70 transition-colors"
          aria-label="Facebook"
          title="Facebook"
        >
          <Facebook className="w-5 h-5 text-amber-300" />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-900/40 bg-slate-950/30 hover:bg-amber-500/10 hover:border-amber-600/70 transition-colors"
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram className="w-5 h-5 text-amber-300" />
        </a>
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-900/40 bg-slate-950/30 hover:bg-amber-500/10 hover:border-amber-600/70 transition-colors"
          aria-label="TikTok"
          title="TikTok"
        >
          <TikTokIcon className="w-5 h-5 text-amber-300" />
        </a>
      </div>
    </div>
  );
}
