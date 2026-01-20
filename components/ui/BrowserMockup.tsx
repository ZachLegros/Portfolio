import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
}

export default function BrowserMockup({
  src,
  alt,
  url,
  priority = false,
}: BrowserMockupProps) {
  return (
    <div className="browser-mockup">
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
}
