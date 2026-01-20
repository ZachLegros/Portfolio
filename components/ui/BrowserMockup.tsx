import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  href?: string;
  priority?: boolean;
}

export default function BrowserMockup({
  src,
  alt,
  url,
  href,
  priority = false,
}: BrowserMockupProps) {
  const content = (
    <div className={`browser-mockup${href ? " cursor-pointer" : ""}`}>
      {/* Browser header */}
      <div className="browser-header">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        {url && <div className="browser-url">{url}</div>}
      </div>

      {/* Browser content */}
      <div className="browser-content">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="aspect-video w-full object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
