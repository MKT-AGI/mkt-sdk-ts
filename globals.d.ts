declare var Buffer: { from(data: string, encoding: string): { toString(encoding: string): string }; };
declare var process: {
  env: Record<string, string | undefined>;
  platform: string;
  arch: string;
  versions: Record<string, string>;
};
declare var TextEncoder: { new(): { encode(s: string): Uint8Array } };
declare var TextDecoder: { new(encoding?: string): { decode(b: Uint8Array): string } };
declare var btoa: (s: string) => string;
declare var atob: (s: string) => string;
interface ErrorConstructor { captureStackTrace(err: Error, fn?: Function): void; }
