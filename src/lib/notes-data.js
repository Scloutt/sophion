export const IGCSE_MATHS_NOTES = {
  level: "igcse",
  subject: "maths",
  board: "edexcel",
  title: "IGCSE Mathematics A — Pearson Edexcel",
  spec: "Specification 4MA1 · All Units Covered (Higher Tier)",
  subtitle: "Everything you need. Nothing you don't. Let's get the grade.",
  units: [
    {
      id: "u1",
      n: 1,
      title: "Numbers & the Number System",
      sections: [
        {
          id: "number-types",
          title: "Number Types",
          blocks: [
            { type: "bullets", items: [
              "Natural numbers (ℕ): 1, 2, 3, … (positive integers, no zero)",
              "Integers (ℤ): …–2, –1, 0, 1, 2, …",
              "Rational numbers (ℚ): any number expressible as p/q where p, q are integers, q ≠ 0",
              "Irrational: cannot be written as a fraction — e.g. √2, π",
              "Real numbers (ℝ): all of the above combined",
            ] },
          ],
        },
        {
          id: "factors",
          title: "Factors, Multiples & Primes",
          blocks: [
            { type: "bullets", items: [
              "Factor: divides into a number with no remainder",
              "Multiple: result of multiplying a number by an integer",
              "Prime: exactly 2 factors (1 and itself) — 2 is the only even prime",
              "HCF: highest common factor — largest number dividing both",
              "LCM: lowest common multiple — smallest number both divide into",
            ] },
            { type: "sub", text: "Prime Factorisation Method (for HCF & LCM)" },
            { type: "bullets", items: [
              "Step 1: Write each number as a product of primes (use a factor tree)",
              "Step 2: HCF = multiply shared prime factors (lowest power)",
              "Step 3: LCM = multiply all prime factors (highest power)",
            ] },
            { type: "example", text: "HCF and LCM of 24 and 36:\n24 = 2³ × 3   36 = 2² × 3²\nHCF = 2² × 3 = 12\nLCM = 2³ × 3² = 72" },
          ],
        },
        {
          id: "powers",
          title: "Powers & Roots",
          blocks: [
            { type: "formula", text: "aᵐ × aⁿ = aᵐ⁺ⁿ   (same base → add powers)" },
            { type: "formula", text: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ   (same base → subtract powers)" },
            { type: "formula", text: "(aᵐ)ⁿ = aᵐⁿ   (power of a power → multiply)" },
            { type: "formula", text: "a⁰ = 1   (anything to the power 0 is 1)" },
            { type: "formula", text: "a⁻ⁿ = 1/aⁿ   (negative power → reciprocal)" },
          ],
        },
        {
          id: "standard-form",
          title: "Standard Form",
          blocks: [
            { type: "p", text: "A × 10ⁿ where 1 ≤ A < 10, and n is an integer." },
            { type: "bullets", items: [
              "Big numbers: positive n (e.g. 4,500,000 = 4.5 × 10⁶)",
              "Small numbers: negative n (e.g. 0.0003 = 3 × 10⁻⁴)",
            ] },
          ],
        },
      ],
    },
    {
      id: "u2",
      n: 2,
      title: "Fractions, Decimals & Percentages",
      sections: [
        {
          id: "fractions",
          title: "Fractions",
          blocks: [
            { type: "bullets", items: [
              "Simplify: divide numerator and denominator by their HCF",
              "Adding/subtracting: find common denominator first",
              "Multiplying: numerator × numerator over denominator × denominator",
              "Dividing: flip the second fraction (reciprocal) and multiply",
            ] },
          ],
        },
        {
          id: "percent-big-three",
          title: "Percentages — The Big Three",
          blocks: [
            { type: "formula", text: "① Percentage of an amount: (percentage / 100) × amount" },
            { type: "formula", text: "② Percentage change: (change / original) × 100" },
            { type: "formula", text: "③ Reverse percentage: original = final ÷ multiplier" },
            { type: "example", text: "After a 20% increase, price is £60: original = 60 ÷ 1.20 = £50" },
          ],
        },
        {
          id: "compound",
          title: "Compound Interest",
          blocks: [
            { type: "formula", text: "A = P(1 + r/100)ⁿ" },
            { type: "p", text: "P = principal, r = rate per period (%), n = number of periods." },
            { type: "tip", text: "Compound interest ALWAYS beats simple interest over time." },
          ],
        },
      ],
    },
    {
      id: "u3",
      n: 3,
      title: "Ratio, Proportion & Rates of Change",
      sections: [
        {
          id: "ratio",
          title: "Ratio",
          blocks: [
            { type: "bullets", items: [
              "Always simplify by dividing all parts by HCF",
              "Sharing in a ratio: find total parts, divide amount by total parts, then multiply",
            ] },
            { type: "example", text: "Share £360 in ratio 3:5 — total = 8 parts, 1 part = £45 → shares £135 and £225" },
          ],
        },
        {
          id: "proportion",
          title: "Direct & Inverse Proportion",
          blocks: [
            { type: "formula", text: "Direct (y ∝ x): y = kx — straight line through origin" },
            { type: "formula", text: "Inverse (y ∝ 1/x): y = k/x — hyperbola" },
            { type: "p", text: "To find k: substitute known values, solve for k, then use for new values." },
          ],
        },
        {
          id: "speed",
          title: "Speed, Density & Pressure",
          blocks: [
            { type: "formula", text: "Speed = Distance ÷ Time     (D = S × T)" },
            { type: "formula", text: "Density = Mass ÷ Volume      (M = D × V)" },
            { type: "formula", text: "Pressure = Force ÷ Area      (F = P × A)" },
            { type: "tip", text: "Draw the triangle (DST / MDV / FPA) — cover what you want to find." },
          ],
        },
      ],
    },
    {
      id: "u4",
      n: 4,
      title: "Algebra",
      sections: [
        {
          id: "expressions",
          title: "Expressions & Simplifying",
          blocks: [
            { type: "bullets", items: [
              "Collect like terms: same letter AND same power",
              "Expand single brackets: multiply each term inside by the term outside",
              "Expand double brackets: FOIL or grid method",
            ] },
          ],
        },
        {
          id: "equations",
          title: "Solving Equations",
          blocks: [
            { type: "bullets", items: [
              "Linear: isolate x using inverse operations",
              "Quadratic: factorise, complete the square, or use the formula",
            ] },
            { type: "formula", text: "x = (-b ± √(b² - 4ac)) / 2a" },
            { type: "tip", text: "Always check: if discriminant b² - 4ac < 0 → no real solutions." },
          ],
        },
      ],
    },
    {
      id: "u5",
      n: 5,
      title: "Geometry & Measures",
      sections: [
        {
          id: "angles",
          title: "Angle Facts",
          blocks: [
            { type: "bullets", items: [
              "Angles on a straight line = 180°",
              "Angles around a point = 360°",
              "Vertically opposite angles are equal",
              "Interior angles of a triangle = 180°",
              "Interior angles of a polygon = (n-2) × 180°",
            ] },
          ],
        },
        {
          id: "area-volume",
          title: "Area & Volume",
          blocks: [
            { type: "formula", text: "Circle area = πr²    Circumference = 2πr" },
            { type: "formula", text: "Cylinder volume = πr²h    Sphere volume = (4/3)πr³" },
            { type: "formula", text: "Cone volume = (1/3)πr²h" },
          ],
        },
      ],
    },
    {
      id: "u6",
      n: 6,
      title: "Statistics & Probability",
      sections: [
        {
          id: "averages",
          title: "Averages",
          blocks: [
            { type: "bullets", items: [
              "Mean = total ÷ number of values",
              "Median = middle value when ordered",
              "Mode = most common value",
              "Range = highest - lowest",
            ] },
          ],
        },
        {
          id: "probability",
          title: "Probability",
          blocks: [
            { type: "formula", text: "P(event) = favourable outcomes ÷ total outcomes" },
            { type: "bullets", items: [
              "P(not A) = 1 - P(A)",
              "Independent events: P(A and B) = P(A) × P(B)",
              "Mutually exclusive: P(A or B) = P(A) + P(B)",
            ] },
            { type: "tip", text: "Draw tree diagrams for multi-step problems — multiply along branches, add between branches." },
          ],
        },
      ],
    },
  ],
};