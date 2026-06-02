import { describe, expect, it } from "vitest";
import {
  clampTraitScore,
  createNeutralTraitVector,
  isTraitKey,
  traitDefinitions,
  traitKeys,
} from "./traits";

describe("trait language system", () => {
  it("defines a stable set of unique trait keys", () => {
    expect(traitKeys).toHaveLength(33);
    expect(new Set(traitKeys).size).toBe(traitKeys.length);
    expect(traitKeys).toContain("pace");
    expect(traitKeys).toContain("finalThirdDecision");
    expect(traitKeys).toContain("shotStopping");
  });

  it("keeps one definition per trait key", () => {
    expect(traitDefinitions).toHaveLength(traitKeys.length);

    for (const definition of traitDefinitions) {
      expect(definition.label.length).toBeGreaterThan(0);
      expect(definition.description.length).toBeGreaterThan(0);
      expect(traitKeys).toContain(definition.key);
    }
  });

  it("creates a neutral vector with every trait", () => {
    const vector = createNeutralTraitVector();

    expect(Object.keys(vector).sort()).toEqual([...traitKeys].sort());

    for (const traitKey of traitKeys) {
      expect(vector[traitKey]).toBe(50);
    }
  });

  it("clamps custom neutral vector values", () => {
    const lowVector = createNeutralTraitVector(-25);
    const highVector = createNeutralTraitVector(125);

    for (const traitKey of traitKeys) {
      expect(lowVector[traitKey]).toBe(0);
      expect(highVector[traitKey]).toBe(100);
    }
  });

  it("clamps individual trait scores", () => {
    expect(clampTraitScore(-10)).toBe(0);
    expect(clampTraitScore(42)).toBe(42);
    expect(clampTraitScore(120)).toBe(100);
  });

  it("rejects non-finite trait scores", () => {
    expect(() => clampTraitScore(Number.NaN)).toThrow(TypeError);
    expect(() => clampTraitScore(Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it("identifies valid trait keys", () => {
    expect(isTraitKey("pace")).toBe(true);
    expect(isTraitKey("oneVsOne")).toBe(true);
    expect(isTraitKey("oneVOne")).toBe(false);
    expect(isTraitKey("random")).toBe(false);
  });
});
