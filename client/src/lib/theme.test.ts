import { describe, expect, it } from "vitest";
import { resolveInitialTheme } from "./theme";

describe("resolveInitialTheme", () => {
  it("prefers a saved theme over the system preference", () => {
    expect(resolveInitialTheme("light", true, "dark")).toBe("light");
    expect(resolveInitialTheme("dark", false, "light")).toBe("dark");
  });

  it("uses the system preference when no theme has been saved", () => {
    expect(resolveInitialTheme(null, true, "light")).toBe("dark");
  });

  it("falls back to the configured default", () => {
    expect(resolveInitialTheme(null, false, "light")).toBe("light");
  });
});
