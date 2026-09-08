import { describe, it, expect } from "vitest";
import { notEndsWith } from "./index";

describe("notEndsWith()", () => {
  it("should return true if the string does not end with the suffix", () => {
    expect(notEndsWith("report.pdf", ".txt")).toBe(true);
    expect(notEndsWith("image.png", "jpg")).toBe(true);
  });

  it("should return false if the string actually ends with the suffix", () => {
    expect(notEndsWith("report.pdf", ".pdf")).toBe(false);
    expect(notEndsWith("file.config.json", "json")).toBe(false);
  });

  it("should respect the optional endPosition parameter", () => {
    expect(notEndsWith("Hello, world", "Hel", 3)).toBe(false);
    expect(notEndsWith("Hello, world", "World", 3)).toBe(true);
  });

  it("should be case-sensitive", () => {
    expect(notEndsWith("file.PDF", ".pdf")).toBe(true);
  });
});