export type Platform = "macos-arm64" | "macos-x86_64" | "linux-x86_64" | "windows-x86_64";

export interface ReleaseArtifact {
  platform: Platform;
  label: string;
  detail: string;
  format: string;
  href: string;
}

const base = "https://github.com/SY-Technologies/lumiere/releases/download/v0.1.6";

export const artifacts: readonly ReleaseArtifact[] = [
  { platform: "macos-arm64", label: "macOS", detail: "Apple silicon", format: ".pkg", href: `${base}/lumiere-v0.1.6-macos-arm64.pkg` },
  { platform: "macos-x86_64", label: "macOS", detail: "Intel", format: ".pkg", href: `${base}/lumiere-v0.1.6-macos-x86_64.pkg` },
  { platform: "linux-x86_64", label: "Linux", detail: "x86-64", format: ".deb", href: `${base}/lumiere-v0.1.6-linux-x86_64.deb` },
  { platform: "windows-x86_64", label: "Windows", detail: "x86-64", format: ".msi", href: `${base}/lumiere-v0.1.6-windows-x86_64.msi` },
] as const;
