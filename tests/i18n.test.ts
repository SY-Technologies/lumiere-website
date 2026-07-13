import { describe, expect, it } from "vitest";
import { alternatePath } from "../src/lib/i18n";

describe("alternatePath", () => {
  it("preserves the page when changing locale", () => {
    expect(alternatePath("/en/architecture/", "en")).toBe("/fr/architecture/");
    expect(alternatePath("/fr/download/", "fr")).toBe("/en/download/");
  });
});
