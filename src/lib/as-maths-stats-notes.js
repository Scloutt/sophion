export const AS_MATHS_STATS_NOTES = {
  level: "as",
  subject: "maths",
  board: "edexcel",
  title: "A-Level Mathematics — Statistics",
  spec: "Statistics · Year 1 & Year 2",
  subtitle: "Sampling · Distributions · Hypothesis Testing",
  units: [
    {
      id: "stats-u1",
      n: 1,
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
      id: "stats-u2",
      n: 2,
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
      id: "stats-u3",
      n: 3,
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
      id: "stats-u4",
      n: 4,
      title: "Statistical Distributions",
      sections: [
        {
          id: "binomial-dist",
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
          id: "normal-dist",
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
      id: "stats-u5",
      n: 5,
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
  ],
};