import type { ReactNode } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="ac-arrow">{diagonal ? "↗" : "→"}</span>; }
export function CareerTag({ children }: { children: ReactNode }) { return <span className="ac-tag">{children}</span>; }
export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "ac-demo-notice ac-demo-compact" : "ac-demo-notice"} role="note"><span className="ac-demo-pip" /><strong>Design preview — sample opportunities only.</strong><span> These positions are fictional examples and are not open for applications. Live recruitment will begin after HR approval and ERPNext integration.</span></div>;
}
