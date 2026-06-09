export const AS_MATHS_NOTES = {
  level: "as",
  subject: "maths",
  board: "edexcel",
  title: "A-Level Mathematics — Pearson Edexcel",
  spec: "Pure Mathematics · Statistics · Mechanics · Year 1 & Year 2",
  subtitle: "All topics covered. Show your working. Get the grade.",
  units: [
    {
      id: "alm-u1",
      n: 1,
      title: "Algebra & Functions",
      sections: [
        {
          id: "indices",
          title: "Indices Laws",
          blocks: [
            { type: "formula", text: "aᵐ × aⁿ = aᵐ⁺ⁿ" },
            { type: "formula", text: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ" },
            { type: "formula", text: "(aᵐ)ⁿ = aᵐⁿ" },
            { type: "formula", text: "a⁰ = 1   (for any a ≠ 0)" },
            { type: "formula", text: "a⁻ⁿ = 1/aⁿ" },
            { type: "formula", text: "a^(1/n) = nth root of a" },
            { type: "formula", text: "a^(m/n) = (nth root of a)ᵐ" },
          ],
        },
        {
          id: "surds",
          title: "Surds",
          blocks: [
            { type: "formula", text: "√a × √b = √(ab)" },
            { type: "formula", text: "√a / √b = √(a/b)" },
            { type: "bullets", items: [
              "Rationalising — denominator is √a: multiply top & bottom by √a",
              "Rationalising — denominator is (a + √b): multiply by (a − √b)  ← conjugate",
            ]},
            { type: "tip", text: "KEY TRICK: (√a + √b)(√a − √b) = a − b" },
          ],
        },
        {
          id: "quadratics",
          title: "Quadratics",
          blocks: [
            { type: "p", text: "Solving ax² + bx + c = 0:" },
            { type: "bullets", items: [
              "Factorising — find two numbers that multiply to ac and add to b",
              "Completing the square: a(x + b/2a)² − b²/4a + c",
            ]},
            { type: "formula", text: "Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a" },
            { type: "sub", text: "Discriminant (b² − 4ac)" },
            { type: "bullets", items: [
              "> 0  →  2 real distinct roots",
              "= 0  →  1 real repeated root",
              "< 0  →  no real roots (complex)",
            ]},
          ],
        },
        {
          id: "functions",
          title: "Functions — Key Vocabulary",
          blocks: [
            { type: "bullets", items: [
              "Domain = set of valid inputs (x-values)",
              "Range = set of possible outputs (y-values)",
              "f⁻¹(x) = inverse function (reflect in y = x)",
              "fg(x) = f applied to g(x)  [apply g FIRST]",
            ]},
            { type: "tip", text: "A function has an inverse only if it is ONE-TO-ONE." },
          ],
        },
        {
          id: "factor-remainder",
          title: "Factor & Remainder Theorem",
          blocks: [
            { type: "bullets", items: [
              "Remainder theorem: when f(x) divided by (x − a), remainder = f(a)",
              "Factor theorem: (x − a) is a factor of f(x)  ⟺  f(a) = 0",
            ]},
          ],
        },
        {
          id: "partial-fractions",
          title: "Partial Fractions",
          blocks: [
            { type: "bullets", items: [
              "A/(x+a) + B/(x+b)           → distinct linear factors",
              "A/(x+a) + B/(x+a)²          → repeated factor",
              "A/(x+a) + (Bx+C)/(x²+b)    → irreducible quadratic factor",
            ]},
            { type: "warn", text: "IMPROPER fractions (degree top ≥ degree bottom): do POLYNOMIAL DIVISION first!" },
          ],
        },
        {
          id: "modulus",
          title: "Modulus Function & Graph Transformations",
          blocks: [
            { type: "bullets", items: [
              "|x| = x if x ≥ 0,  −x if x < 0",
              "To solve |ax + b| = c:  set ax + b = ±c",
              "Graph of |f(x)|: reflect any part below x-axis in x-axis",
            ]},
            { type: "table", headers: ["Transformation", "Effect"], rows: [
              ["y = f(x) + a", "Translate up by a"],
              ["y = f(x + a)", "Translate LEFT by a  ⚠️"],
              ["y = af(x)", "Stretch in y by factor a"],
              ["y = f(ax)", "Stretch in x by factor 1/a"],
              ["y = −f(x)", "Reflect in x-axis"],
              ["y = f(−x)", "Reflect in y-axis"],
            ]},
            { type: "warn", text: "Students always get the direction of horizontal translations wrong!" },
          ],
        },
      ],
    },
    {
      id: "alm-u2",
      n: 2,
      title: "Coordinate Geometry",
      sections: [
        {
          id: "straight-lines",
          title: "Straight Lines",
          blocks: [
            { type: "formula", text: "Gradient: m = (y₂ − y₁)/(x₂ − x₁)" },
            { type: "formula", text: "Line through a point: y − y₁ = m(x − x₁)" },
            { type: "formula", text: "Perpendicular gradient: m₂ = −1/m₁  (product = −1)" },
            { type: "formula", text: "Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)" },
            { type: "formula", text: "Distance: √((x₂−x₁)² + (y₂−y₁)²)" },
          ],
        },
        {
          id: "circles",
          title: "Circles",
          blocks: [
            { type: "formula", text: "Standard form: (x − a)² + (y − b)² = r²     centre (a,b), radius r" },
            { type: "formula", text: "General form: x² + y² + 2gx + 2fy + c = 0   centre (−g,−f), radius = √(g²+f²−c)" },
            { type: "bullets", items: [
              "Angle in semicircle = 90° — if AB is diameter, angle APB = 90°",
              "Tangent ⊥ radius at point of contact",
              "Tangent from external point: two tangents have equal length",
            ]},
            { type: "sub", text: "Finding tangent at point P on circle" },
            { type: "bullets", items: [
              "1. Find gradient of radius OP",
              "2. Take negative reciprocal → gradient of tangent",
              "3. Use y − y₁ = m(x − x₁) with point P",
            ]},
          ],
        },
        {
          id: "parametric",
          title: "Parametric Equations (Year 2)",
          blocks: [
            { type: "bullets", items: [
              "Express x and y in terms of parameter t (or θ)",
              "To find Cartesian equation: eliminate t algebraically",
            ]},
            { type: "formula", text: "dy/dx = (dy/dt) ÷ (dx/dt)   ← parametric differentiation" },
            { type: "bullets", items: [
              "Circle: x = r cosθ,  y = r sinθ",
              "Parabola: x = at²,   y = 2at",
            ]},
          ],
        },
      ],
    },
    {
      id: "alm-u3",
      n: 3,
      title: "Sequences & Series",
      sections: [
        {
          id: "arithmetic",
          title: "Arithmetic Sequences",
          blocks: [
            { type: "formula", text: "nth term:  Uₙ = a + (n−1)d" },
            { type: "formula", text: "Sum to n:  Sₙ = n/2 (2a + (n−1)d)  =  n/2 (first + last)" },
            { type: "p", text: "a = first term,  d = common difference" },
          ],
        },
        {
          id: "geometric",
          title: "Geometric Sequences",
          blocks: [
            { type: "formula", text: "nth term:  Uₙ = ar^(n−1)" },
            { type: "formula", text: "Sum to n:  Sₙ = a(1 − rⁿ)/(1 − r)    [r ≠ 1]" },
            { type: "formula", text: "Sum to ∞:  S∞ = a/(1−r)               [only if |r| < 1]" },
            { type: "warn", text: "Convergent series require |r| < 1" },
          ],
        },
        {
          id: "binomial",
          title: "Binomial Expansion",
          blocks: [
            { type: "formula", text: "(a + b)ⁿ = Σ C(n,r) × a^(n−r) × bʳ    where C(n,r) = n! / (r!(n−r)!)" },
            { type: "sub", text: "For (1 + x)ⁿ with n NOT a positive integer (Year 2)" },
            { type: "formula", text: "(1+x)ⁿ = 1 + nx + n(n−1)/2! × x² + n(n−1)(n−2)/3! × x³ + ..." },
            { type: "bullets", items: [
              "Valid only when |x| < 1",
              "Can be used for approximations — substitute small value of x",
            ]},
          ],
        },
        {
          id: "sigma",
          title: "Sigma Notation",
          blocks: [
            { type: "formula", text: "Σ(r=1 to n) r   = n(n+1)/2" },
            { type: "formula", text: "Σ(r=1 to n) r²  = n(n+1)(2n+1)/6" },
            { type: "formula", text: "Σ(r=1 to n) r³  = [n(n+1)/2]²" },
          ],
        },
      ],
    },
    {
      id: "alm-u4",
      n: 4,
      title: "Trigonometry",
      sections: [
        {
          id: "exact-values",
          title: "Exact Values",
          blocks: [
            { type: "table", headers: ["θ", "sin θ", "cos θ", "tan θ"], rows: [
              ["0°", "0", "1", "0"],
              ["30°", "1/2", "√3/2", "1/√3"],
              ["45°", "1/√2", "1/√2", "1"],
              ["60°", "√3/2", "1/2", "√3"],
              ["90°", "1", "0", "undefined"],
            ]},
          ],
        },
        {
          id: "cast",
          title: "CAST Diagram",
          blocks: [
            { type: "table", headers: ["Quadrant", "Angles", "Positive"], rows: [
              ["1st", "0°–90°", "ALL"],
              ["2nd", "90°–180°", "SIN"],
              ["3rd", "180°–270°", "TAN"],
              ["4th", "270°–360°", "COS"],
            ]},
            { type: "tip", text: "Memory: All Sinners Take Care  →  A S T C" },
          ],
        },
        {
          id: "identities",
          title: "Identities & Double Angle Formulae",
          blocks: [
            { type: "formula", text: "sin²θ + cos²θ ≡ 1" },
            { type: "formula", text: "1 + tan²θ ≡ sec²θ" },
            { type: "formula", text: "1 + cot²θ ≡ cosec²θ" },
            { type: "formula", text: "tan θ ≡ sin θ / cos θ" },
            { type: "sub", text: "Double Angle Formulae (Year 2)" },
            { type: "formula", text: "sin 2A = 2 sin A cos A" },
            { type: "formula", text: "cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A" },
            { type: "formula", text: "tan 2A = 2tan A / (1 − tan²A)" },
            { type: "sub", text: "Addition Formulae (Year 2)" },
            { type: "formula", text: "sin(A ± B) = sinA cosB ± cosA sinB" },
            { type: "formula", text: "cos(A ± B) = cosA cosB ∓ sinA sinB" },
            { type: "formula", text: "tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA tanB)" },
          ],
        },
        {
          id: "r-form",
          title: "R sin(x + α) Form (Year 2)",
          blocks: [
            { type: "formula", text: "a sinx + b cosx ≡ R sin(x + α)\nwhere R = √(a² + b²)  and  tan α = b/a" },
            { type: "tip", text: "Use this to find max/min of trig expressions and to solve equations." },
          ],
        },
      ],
    },
    {
      id: "alm-u5",
      n: 5,
      title: "Exponentials & Logarithms",
      sections: [
        {
          id: "log-laws",
          title: "Log Laws",
          blocks: [
            { type: "formula", text: "log(ab)   = log a + log b" },
            { type: "formula", text: "log(a/b)  = log a − log b" },
            { type: "formula", text: "log(aⁿ)   = n log a" },
            { type: "formula", text: "log_a(a)  = 1" },
            { type: "formula", text: "log_a(1)  = 0" },
            { type: "formula", text: "log_a(x)  = log x / log a   ← change of base" },
            { type: "tip", text: "ln x = log_e x   (natural logarithm, base e ≈ 2.718)" },
          ],
        },
        {
          id: "exponential",
          title: "Exponential Function",
          blocks: [
            { type: "formula", text: "y = eˣ   →  dy/dx = eˣ   (unique: its own derivative!)" },
            { type: "formula", text: "y = aˣ   →  dy/dx = aˣ ln a" },
            { type: "formula", text: "e^(ln x) = x  and  ln(eˣ) = x   ← inverse relationship" },
          ],
        },
        {
          id: "growth-decay",
          title: "Growth & Decay Models",
          blocks: [
            { type: "formula", text: "Growth:  N = N₀ e^(kt)      k > 0" },
            { type: "formula", text: "Decay:   N = N₀ e^(−kt)     k > 0" },
            { type: "tip", text: "Linearising: If y = ab^x, then log y = log a + x log b → Plot log y against x for a straight line." },
          ],
        },
      ],
    },
    {
      id: "alm-u6",
      n: 6,
      title: "Differentiation",
      sections: [
        {
          id: "standard-derivatives",
          title: "Standard Derivatives",
          blocks: [
            { type: "table", headers: ["f(x)", "f'(x)"], rows: [
              ["xⁿ", "nxⁿ⁻¹"],
              ["eˣ", "eˣ"],
              ["eᵃˣ", "aeᵃˣ"],
              ["ln x", "1/x"],
              ["sin x", "cos x"],
              ["cos x", "−sin x"],
              ["tan x", "sec²x"],
              ["sin(ax)", "a cos(ax)"],
              ["cos(ax)", "−a sin(ax)"],
              ["sec x", "sec x tan x"],
              ["cosec x", "−cosec x cot x"],
              ["cot x", "−cosec²x"],
            ]},
          ],
        },
        {
          id: "diff-rules",
          title: "Differentiation Rules",
          blocks: [
            { type: "formula", text: "Product rule:   d/dx[uv] = u(dv/dx) + v(du/dx)" },
            { type: "formula", text: "Quotient rule:  d/dx[u/v] = [v(du/dx) − u(dv/dx)] / v²" },
            { type: "formula", text: "Chain rule:     dy/dx = (dy/du)(du/dx)" },
            { type: "tip", text: "Chain rule in one line: differentiate outside, multiply by derivative of inside." },
          ],
        },
        {
          id: "applications-diff",
          title: "Applications of Differentiation",
          blocks: [
            { type: "bullets", items: [
              "Stationary points: set f'(x) = 0, then test with f''(x)",
              "f''(x) > 0 → minimum",
              "f''(x) < 0 → maximum",
              "f''(x) = 0 → inconclusive (check sign change of f')",
            ]},
            { type: "formula", text: "Tangent at x = a:   y − f(a) = f'(a)(x − a)" },
            { type: "formula", text: "Normal: gradient = −1/f'(a)" },
            { type: "formula", text: "Connected rates: dV/dt = (dV/dr)(dr/dt)" },
          ],
        },
        {
          id: "implicit",
          title: "Implicit Differentiation (Year 2)",
          blocks: [
            { type: "bullets", items: [
              "d/dx[y²] = 2y (dy/dx)   ← chain rule on y",
              "d/dx[xy] = x(dy/dx) + y  ← product rule",
            ]},
            { type: "formula", text: "Connected rates: dA/dt = dA/dr × dr/dt" },
          ],
        },
      ],
    },
    {
      id: "alm-u7",
      n: 7,
      title: "Integration",
      sections: [
        {
          id: "standard-integrals",
          title: "Standard Integrals",
          blocks: [
            { type: "table", headers: ["f(x)", "∫f(x)dx"], rows: [
              ["xⁿ (n≠−1)", "xⁿ⁺¹/(n+1) + c"],
              ["1/x", "ln|x| + c"],
              ["eˣ", "eˣ + c"],
              ["eᵃˣ", "eᵃˣ/a + c"],
              ["sin x", "−cos x + c"],
              ["cos x", "sin x + c"],
              ["sin(ax + b)", "−cos(ax+b)/a + c"],
              ["cos(ax + b)", "sin(ax+b)/a + c"],
              ["sec²x", "tan x + c"],
              ["f'(x)/f(x)", "ln|f(x)| + c   ← KEY FORM"],
            ]},
          ],
        },
        {
          id: "int-techniques",
          title: "Integration Techniques",
          blocks: [
            { type: "sub", text: "Substitution" },
            { type: "bullets", items: [
              "Choose u = inner function",
              "Find du/dx, rewrite dx in terms of du",
              "Change limits if definite integral!",
            ]},
            { type: "sub", text: "Integration by Parts (Year 2)" },
            { type: "formula", text: "∫u(dv/dx)dx = uv − ∫v(du/dx)dx" },
            { type: "tip", text: "ILATE rule for choosing u: Inverse, Log, Algebra, Trig, Exponential → pick u from left of ILATE." },
            { type: "sub", text: "Partial Fractions → Integration" },
            { type: "p", text: "Split into partial fractions first, then integrate each term. Each A/(x+a) integrates to A ln|x+a| + c." },
          ],
        },
        {
          id: "area",
          title: "Area & Trapezium Rule",
          blocks: [
            { type: "formula", text: "Area = ∫[a to b] f(x) dx" },
            { type: "warn", text: "If curve goes below x-axis, the integral is negative → take |value|. Area between two curves: ∫[a to b] [f(x) − g(x)] dx  (f above g)." },
            { type: "formula", text: "Trapezium Rule: ∫[a to b] y dx ≈ h/2 [y₀ + 2(y₁ + ... + yₙ₋₁) + yₙ]\nwhere h = (b−a)/n  (strip width)" },
            { type: "tip", text: "\"half × strip width × (first + last + twice the rest)\"" },
          ],
        },
      ],
    },
    {
      id: "alm-u8",
      n: 8,
      title: "Numerical Methods",
      sections: [
        {
          id: "sign-change",
          title: "Locating Roots",
          blocks: [
            { type: "p", text: "If f(a) and f(b) have opposite signs AND f is continuous on [a,b], then there is a root in (a, b)." },
            { type: "tip", text: "Always state: 'there is a sign change, therefore a root lies in the interval'" },
          ],
        },
        {
          id: "newton-raphson",
          title: "Newton-Raphson Method",
          blocks: [
            { type: "formula", text: "xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)" },
            { type: "bullets", items: [
              "Start with a good initial approximation x₀",
              "Converges quickly (quadratic convergence)",
              "Fails if f'(xₙ) = 0 (tangent is horizontal!)",
            ]},
          ],
        },
        {
          id: "iteration",
          title: "Iteration Method",
          blocks: [
            { type: "p", text: "Rearrange f(x) = 0 into x = g(x), then use xₙ₊₁ = g(xₙ)." },
            { type: "bullets", items: [
              "Converges if |g'(x)| < 1 near the root",
              "Draw staircase/cobweb diagram to show convergence",
            ]},
          ],
        },
      ],
    },
    {
      id: "alm-u9",
      n: 9,
      title: "Vectors",
      sections: [
        {
          id: "vector-basics",
          title: "Vector Basics",
          blocks: [
            { type: "bullets", items: [
              "Position vector of A: OA (from origin O to point A)",
              "AB = OB − OA = b − a   ← vector FROM A TO B",
            ]},
            { type: "formula", text: "|v| = √(a² + b² + c²)   for v = (a, b, c)" },
            { type: "formula", text: "Unit vector: v̂ = v/|v|" },
          ],
        },
        {
          id: "dot-product",
          title: "Dot (Scalar) Product",
          blocks: [
            { type: "formula", text: "a · b = a₁b₁ + a₂b₂ + a₃b₃  =  |a||b|cosθ" },
            { type: "bullets", items: [
              "If a · b = 0, then a ⊥ b   (perpendicular!)",
              "Finding angle: cosθ = (a · b)/(|a||b|)",
            ]},
          ],
        },
        {
          id: "vector-line",
          title: "Vector Equation of a Line",
          blocks: [
            { type: "formula", text: "r = a + λd\nwhere a = position vector on the line, d = direction vector, λ = parameter" },
            { type: "bullets", items: [
              "Check if point P lies on a line: substitute coordinates into the equation",
              "Two lines intersect if equations are consistent (solve for λ and μ)",
              "Skew lines: not parallel AND do not intersect",
            ]},
            { type: "tip", text: "2D lines always intersect or are parallel; 3D lines can also be SKEW." },
          ],
        },
      ],
    },
    {
      id: "alm-u10",
      n: 10,
      title: "Proof",
      sections: [
        {
          id: "proof-types",
          title: "Types of Proof",
          blocks: [
            { type: "sub", text: "Proof by Deduction (Direct Proof)" },
            { type: "p", text: "Start from known facts, use logical steps to reach conclusion. Use general forms: even = 2n, odd = 2n+1, integers = n." },
            { type: "sub", text: "Proof by Contradiction" },
            { type: "p", text: "Assume the opposite of what you want to prove. Show this leads to a contradiction. Conclude original statement must be true." },
            { type: "sub", text: "Disproof by Counter-Example" },
            { type: "p", text: "To disprove 'P is true for all n', find ONE value where it fails. Only need ONE counter-example!" },
            { type: "tip", text: "Use n(n+1)(n+2) for three consecutive integers — it factors cleanly as the product of 3 consecutive integers." },
          ],
        },
      ],
    },
    {
      id: "alm-u11",
      n: 11,
      title: "Statistical Sampling",
      sections: [
        {
          id: "sampling-definitions",
          title: "Key Definitions",
          blocks: [
            { type: "table", headers: ["Term", "Definition"], rows: [
              ["Population", "The entire group being studied"],
              ["Census", "Data collected from every member of the population"],
              ["Sample", "A subset of the population"],
              ["Sampling frame", "A list of all members of the population"],
              ["Sampling unit", "Individual member that can be sampled"],
            ]},
            { type: "bullets", items: [
              "Advantages of sampling: cheaper, faster, less data to process",
              "May be only option if testing is destructive (e.g. crash testing)",
            ]},
          ],
        },
        {
          id: "sampling-methods",
          title: "Sampling Methods",
          blocks: [
            { type: "sub", text: "Random Sampling (removes bias)" },
            { type: "bullets", items: [
              "Simple random: every member has equal chance; use random number generator",
              "Systematic: sample every kth member after a random start.  k = population size / sample size",
              "Stratified: divide into strata; sample proportionally from each.  number from stratum = (stratum size/total) × sample size",
            ]},
            { type: "sub", text: "Non-Random Sampling" },
            { type: "bullets", items: [
              "Opportunity (convenience): sample whoever is available → biased!",
              "Quota: fill set quotas for subgroups; interviewer chooses who",
              "Cluster: randomly select groups (clusters), survey everyone in them",
            ]},
            { type: "warn", text: "'random' in everyday English ≠ 'random' in statistics. A proper random sample requires a sampling frame." },
          ],
        },
      ],
    },
    {
      id: "alm-u12",
      n: 12,
      title: "Data Presentation & Interpretation",
      sections: [
        {
          id: "measures-location",
          title: "Measures of Location & Spread",
          blocks: [
            { type: "formula", text: "Mean: x̄ = Σx/n   or  x̄ = Σfx/Σf  (for frequency tables)" },
            { type: "formula", text: "Variance: σ² = Σ(x − x̄)²/n  =  Σx²/n − x̄²   ← learn second form" },
            { type: "formula", text: "Standard deviation: σ = √(variance)" },
            { type: "tip", text: "Coding: if y = (x − a)/b, then ȳ = (x̄ − a)/b and σᵧ = σₓ/b (only divide, NOT subtract a)." },
          ],
        },
        {
          id: "diagrams",
          title: "Statistical Diagrams",
          blocks: [
            { type: "bullets", items: [
              "Histogram: area = frequency (not height!). Frequency density = frequency / class width",
              "Box plot: shows min, Q1, median, Q3, max; outliers marked with ×",
              "Cumulative freq: plot upper class boundaries vs cumulative frequency",
            ]},
            { type: "formula", text: "Outlier: x < Q1 − 1.5×IQR  or  x > Q3 + 1.5×IQR" },
          ],
        },
        {
          id: "correlation",
          title: "Correlation & Regression",
          blocks: [
            { type: "bullets", items: [
              "Pearson's PMCC (r): measures linear correlation, −1 ≤ r ≤ 1",
              "r = 1: perfect positive | r = 0: no linear correlation | r = −1: perfect negative",
            ]},
            { type: "formula", text: "Regression line y on x: y = a + bx\nb = Sxy/Sxx    a = ȳ − bx̄" },
            { type: "formula", text: "Sxx = Σx² − (Σx)²/n\nSxy = Σxy − (Σx)(Σy)/n" },
            { type: "warn", text: "Regression line y on x is used to predict y from x ONLY. Extrapolation is unreliable — don't predict outside the data range." },
          ],
        },
      ],
    },
    {
      id: "alm-u13",
      n: 13,
      title: "Probability",
      sections: [
        {
          id: "prob-laws",
          title: "Basic Laws",
          blocks: [
            { type: "formula", text: "P(A') = 1 − P(A)" },
            { type: "formula", text: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)   ← Addition Rule" },
            { type: "formula", text: "P(A ∩ B) = P(A) × P(B|A)             ← Multiplication Rule" },
            { type: "formula", text: "P(B|A) = P(A ∩ B) / P(A)             ← Conditional Probability" },
            { type: "bullets", items: [
              "MUTUALLY EXCLUSIVE: A ∩ B = ∅  →  P(A ∪ B) = P(A) + P(B)",
              "INDEPENDENT: P(A ∩ B) = P(A) × P(B)  →  P(B|A) = P(B)",
            ]},
            { type: "warn", text: "Mutual exclusivity ≠ independence! ME events can't both happen; independent events don't affect each other." },
          ],
        },
        {
          id: "bayes",
          title: "Tree Diagrams & Bayes",
          blocks: [
            { type: "tip", text: "ALWAYS multiply along branches, ADD between branches. Probabilities on all branches from one node must sum to 1." },
            { type: "formula", text: "Bayes' Theorem: P(A|B) = P(B|A) × P(A) / P(B)" },
            { type: "p", text: "Use the 'reversing the conditioning' approach via tree diagram: find all routes to B, then P(A|B) = P(route through A to B) / P(all routes to B)." },
          ],
        },
      ],
    },
    {
      id: "alm-u14",
      n: 14,
      title: "Statistical Distributions",
      sections: [
        {
          id: "binomial",
          title: "Binomial Distribution  X ~ B(n, p)",
          blocks: [
            { type: "sub", text: "Conditions (ALL four must hold — FIST)" },
            { type: "bullets", items: [
              "Fixed number of trials (n)",
              "Independent trials",
              "Same probability of success (p) each trial",
              "Two outcomes only (success/failure)",
            ]},
            { type: "formula", text: "P(X = r) = C(n,r) × pʳ × (1−p)^(n−r)" },
            { type: "formula", text: "Mean: E(X) = np\nVariance: Var(X) = np(1−p)" },
            { type: "tip", text: "P(X ≥ r) = 1 − P(X ≤ r−1)   ← very common exam trick" },
          ],
        },
        {
          id: "normal",
          title: "Normal Distribution  X ~ N(μ, σ²)",
          blocks: [
            { type: "bullets", items: [
              "Bell-shaped, symmetric about mean μ",
              "Mean = median = mode = μ",
              "About 68% within 1σ, 95% within 2σ, 99.7% within 3σ",
            ]},
            { type: "formula", text: "Standardising: Z = (X − μ)/σ   →  Z ~ N(0,1)" },
            { type: "bullets", items: [
              "P(Z > a) = 1 − P(Z < a)",
              "P(Z < −a) = 1 − P(Z < a)   ← symmetry",
              "P(−a < Z < a) = 2P(Z < a) − 1",
            ]},
          ],
        },
        {
          id: "normal-approx",
          title: "Normal Approximation to Binomial",
          blocks: [
            { type: "p", text: "If X ~ B(n, p) and n is large, np > 5 and n(1−p) > 5: X ~ N(np, np(1−p)) approximately." },
            { type: "sub", text: "Continuity Correction (crucial!)" },
            { type: "table", headers: ["Binomial", "Normal (with CC)"], rows: [
              ["P(X = 5)", "P(4.5 < Y < 5.5)"],
              ["P(X ≤ 5)", "P(Y < 5.5)"],
              ["P(X ≥ 5)", "P(Y > 4.5)"],
              ["P(X < 5)", "P(Y < 4.5)"],
              ["P(X > 5)", "P(Y > 5.5)"],
            ]},
          ],
        },
      ],
    },
    {
      id: "alm-u15",
      n: 15,
      title: "Statistical Hypothesis Testing",
      sections: [
        {
          id: "hyp-process",
          title: "The Process",
          blocks: [
            { type: "bullets", items: [
              "1. Define the test statistic and state the distribution",
              "2. State H₀ (null hypothesis) and H₁ (alternative hypothesis)",
              "3. State significance level α",
              "4. Find the critical region / p-value",
              "5. Compare with observation",
              "6. Conclude in context",
            ]},
            { type: "warn", text: "NEVER say 'accept H₀' — say 'there is insufficient evidence to reject H₀'" },
          ],
        },
        {
          id: "hyp-binomial",
          title: "Hypothesis Testing for Binomial",
          blocks: [
            { type: "bullets", items: [
              "H₀: p = p₀   (always equality)",
              "H₁: p < p₀   (one-tailed, lower)",
              "H₁: p > p₀   (one-tailed, upper)",
              "H₁: p ≠ p₀   (two-tailed)",
            ]},
            { type: "tip", text: "For two-tailed at 5%: split into 2.5% each tail. Critical region: set of values that would cause rejection of H₀." },
          ],
        },
        {
          id: "hyp-normal",
          title: "Normal Distribution Hypothesis Test",
          blocks: [
            { type: "formula", text: "Test statistic: Z = (X̄ − μ₀) / (σ/√n)" },
            { type: "table", headers: ["Test", "Critical value"], rows: [
              ["5% one-tailed", "±1.6449"],
              ["5% two-tailed", "±1.9600"],
              ["1% one-tailed", "±2.3263"],
              ["1% two-tailed", "±2.5758"],
            ]},
          ],
        },
      ],
    },
    {
      id: "alm-u16",
      n: 16,
      title: "Quantities, Units & Kinematics",
      sections: [
        {
          id: "units",
          title: "SI Units & Scalars vs Vectors",
          blocks: [
            { type: "table", headers: ["Quantity", "Unit"], rows: [
              ["Length", "metres (m)"],
              ["Mass", "kilograms (kg)"],
              ["Time", "seconds (s)"],
              ["Force", "Newtons (N) = kg m s⁻²"],
              ["Velocity", "m s⁻¹"],
              ["Acceleration", "m s⁻²"],
            ]},
            { type: "bullets", items: [
              "Scalars: magnitude only (distance, speed, mass, time, energy)",
              "Vectors: magnitude AND direction (displacement, velocity, acceleration, force)",
            ]},
            { type: "warn", text: "Common exam error: confusing distance (scalar) with displacement (vector)." },
          ],
        },
        {
          id: "suvat",
          title: "SUVAT Equations (Constant Acceleration Only)",
          blocks: [
            { type: "formula", text: "v = u + at" },
            { type: "formula", text: "s = ut + ½at²" },
            { type: "formula", text: "s = vt − ½at²" },
            { type: "formula", text: "v² = u² + 2as" },
            { type: "formula", text: "s = ½(u + v)t" },
            { type: "tip", text: "Identify which 4 of the 5 variables (s, u, v, a, t) you know/want, then choose the equation containing exactly those 4." },
            { type: "warn", text: "For vertical motion under gravity: a = ±9.8 m/s² (or 10 m/s² if stated). Do NOT use SUVAT when acceleration isn't constant!" },
          ],
        },
        {
          id: "variable-acc",
          title: "Variable Acceleration (Calculus)",
          blocks: [
            { type: "formula", text: "v = ds/dt   (differentiate displacement → velocity)" },
            { type: "formula", text: "a = dv/dt = d²s/dt²   (differentiate velocity → acceleration)" },
            { type: "formula", text: "s = ∫v dt     v = ∫a dt     (+constant from initial conditions)" },
          ],
        },
      ],
    },
    {
      id: "alm-u17",
      n: 17,
      title: "Forces, Moments & Projectiles",
      sections: [
        {
          id: "newtons-laws-mech",
          title: "Newton's Laws & Common Forces",
          blocks: [
            { type: "bullets", items: [
              "1st Law: Object stays at rest or constant velocity unless resultant force acts on it.",
              "2nd Law: F = ma  (resultant force = mass × acceleration)",
              "3rd Law: Every action has equal and opposite reaction — forces act on DIFFERENT objects.",
            ]},
            { type: "formula", text: "Weight: W = mg  (downward, g = 9.8 m/s²)" },
            { type: "formula", text: "Friction: F ≤ μR   (maximum F = μR at limiting equilibrium)" },
            { type: "tip", text: "F = ma only works with RESULTANT force, not a single force!" },
          ],
        },
        {
          id: "connected-particles",
          title: "Connected Particles & Slopes",
          blocks: [
            { type: "example", text: "Masses m₁ and m₂ (m₂ > m₁) connected over pulley:\nm₂g − T = m₂a    (m₂ descends)\nT − m₁g = m₁a    (m₁ ascends)\nAdding: a = (m₂ − m₁)g / (m₁ + m₂)" },
            { type: "sub", text: "Resolving on a Slope (angle θ)" },
            { type: "formula", text: "Parallel to slope:       mg sin θ" },
            { type: "formula", text: "Perpendicular to slope:  mg cos θ  (= Normal reaction R if no other perp. forces)" },
          ],
        },
        {
          id: "moments-eq",
          title: "Moments & Equilibrium",
          blocks: [
            { type: "formula", text: "Moment = Force × Perpendicular Distance from pivot" },
            { type: "bullets", items: [
              "Equilibrium: resultant force = 0 AND resultant moment about ANY point = 0",
              "Centre of mass: x̄ = Σ(mᵢxᵢ) / Σmᵢ",
            ]},
            { type: "tip", text: "EXAM TECHNIQUE: take moments about a point where an unknown force acts → that unknown disappears from the equation!" },
          ],
        },
        {
          id: "projectiles",
          title: "Projectiles",
          blocks: [
            { type: "table", headers: ["Direction", "Equations"], rows: [
              ["Horizontal", "uₓ = u cosθ   |   x = (u cosθ)t   |   vₓ = u cosθ (constant)"],
              ["Vertical", "uᵧ = u sinθ   |   y = (u sinθ)t − ½gt²   |   vᵧ = u sinθ − gt"],
            ]},
            { type: "formula", text: "Range: R = u² sin 2θ / g" },
            { type: "formula", text: "Max height: H = u² sin²θ / (2g)" },
            { type: "formula", text: "Trajectory (Cartesian): y = x tanθ − gx²/(2u²cos²θ)" },
            { type: "bullets", items: [
              "Max range at θ = 45° (from sin 2θ = 1)",
              "Same range for θ and (90° − θ)",
              "At max height: vᵧ = 0",
            ]},
          ],
        },
      ],
    },
    {
      id: "alm-u18",
      n: 18,
      title: "Further Kinematics & Momentum",
      sections: [
        {
          id: "variable-force",
          title: "Variable Force & the Key Identity",
          blocks: [
            { type: "formula", text: "F = ma = m(dv/dt) = m(v dv/ds)" },
            { type: "tip", text: "The identity a = v dv/ds is KEY — use when you need v in terms of s." },
          ],
        },
        {
          id: "impulse-momentum",
          title: "Impulse & Momentum",
          blocks: [
            { type: "formula", text: "Momentum: p = mv       (kg m/s or N s)" },
            { type: "formula", text: "Impulse: J = Ft = Δ(mv)   (change in momentum)" },
            { type: "formula", text: "Conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂" },
            { type: "formula", text: "Newton's Law of Restitution: e = speed of separation / speed of approach\n0 ≤ e ≤ 1\ne = 0: perfectly inelastic (stick together)\ne = 1: perfectly elastic (KE conserved)" },
          ],
        },
      ],
    },
  ],
};