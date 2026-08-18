import benchmarkV0 from "@/data/benchmarks/v0-2026-07-10.json";

export type BenchmarkRow = {
  server: string;
  grade: string;
  score: number;
  tools: number;
  tokens: number;
};

export type BenchmarkSnapshot = {
  id: string;
  title: string;
  version: string;
  cliVersion: string;
  commit: string;
  observedAt: string;
  methodology: string;
  catalogSize: number;
  connectedCount: number;
  rows: BenchmarkRow[];
  awards: { label: string; value: string }[];
  connectionFailures: { server: string; reason: string }[];
  notes: string[];
};

export const CURRENT_BENCHMARK = benchmarkV0 as BenchmarkSnapshot;

export const BENCHMARK_SNAPSHOTS: readonly BenchmarkSnapshot[] = [CURRENT_BENCHMARK];
