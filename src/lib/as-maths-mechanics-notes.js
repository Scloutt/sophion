export const AS_MATHS_MECHANICS_NOTES = {
  level: "as",
  subject: "maths",
  board: "edexcel",
  title: "A-Level Mathematics — Mechanics",
  spec: "Mechanics · Year 1 & Year 2",
  subtitle: "Kinematics · Forces · Projectiles · Momentum",
  units: [
    {
      id: "mech-u1",
      n: 1,
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
          id: "graphs",
          title: "Displacement & Velocity-Time Graphs",
          blocks: [
            { type: "sub", text: "Displacement-Time Graph" },
            { type: "bullets", items: [
              "Gradient = velocity",
              "Horizontal line = at rest",
              "Negative gradient = moving in opposite direction",
            ]},
            { type: "sub", text: "Velocity-Time Graph" },
            { type: "bullets", items: [
              "Gradient = acceleration",
              "Area under graph = displacement  (area below x-axis = negative displacement)",
              "Horizontal line = constant velocity (zero acceleration)",
            ]},
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
      id: "mech-u2",
      n: 2,
      title: "Forces & Newton's Laws",
      sections: [
        {
          id: "newtons-laws",
          title: "Newton's Three Laws & Common Forces",
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
          id: "connected",
          title: "Connected Particles",
          blocks: [
            { type: "example", text: "Masses m₁ and m₂ (m₂ > m₁) connected over pulley:\nm₂g − T = m₂a    (m₂ descends)\nT − m₁g = m₁a    (m₁ ascends)\nAdding: a = (m₂ − m₁)g / (m₁ + m₂)" },
            { type: "sub", text: "Resolving on a Slope (angle θ)" },
            { type: "formula", text: "Parallel to slope:       mg sin θ" },
            { type: "formula", text: "Perpendicular to slope:  mg cos θ  (= Normal reaction R if no other perp. forces)" },
          ],
        },
        {
          id: "friction-equilibrium",
          title: "Friction & Statics",
          blocks: [
            { type: "bullets", items: [
              "Object stays still if tan θ ≤ μ   (angle of friction)",
              "If tan θ > μ, object slides → use F = μR and F = ma to find a",
            ]},
            { type: "sub", text: "Statics Solving Strategy" },
            { type: "bullets", items: [
              "1. Draw a clear free body diagram",
              "2. Resolve forces horizontally → ΣFₓ = 0",
              "3. Resolve forces vertically   → ΣFᵧ = 0",
              "4. Take moments about a convenient point if needed",
              "5. Use F = μR if at limiting equilibrium",
            ]},
          ],
        },
      ],
    },
    {
      id: "mech-u3",
      n: 3,
      title: "Moments",
      sections: [
        {
          id: "moments",
          title: "Moment of a Force & Equilibrium",
          blocks: [
            { type: "formula", text: "Moment = Force × Perpendicular Distance from pivot" },
            { type: "bullets", items: [
              "Equilibrium: resultant force = 0 AND resultant moment about ANY point = 0",
              "Centre of mass: x̄ = Σ(mᵢxᵢ) / Σmᵢ",
              "Tilting: body tilts when reaction at one support = 0",
            ]},
            { type: "tip", text: "EXAM TECHNIQUE: take moments about a point where an unknown force acts → that unknown disappears from the equation!" },
          ],
        },
      ],
    },
    {
      id: "mech-u4",
      n: 4,
      title: "Projectiles",
      sections: [
        {
          id: "projectiles",
          title: "Projectile Motion",
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
              "Speed at any point: √(vₓ² + vᵧ²)",
            ]},
          ],
        },
      ],
    },
    {
      id: "mech-u5",
      n: 5,
      title: "Further Kinematics & Momentum",
      sections: [
        {
          id: "variable-force",
          title: "Variable Force & Key Identity",
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
            { type: "formula", text: "Newton's Law of Restitution: e = speed of separation / speed of approach\n0 ≤ e ≤ 1\ne = 0: perfectly inelastic | e = 1: perfectly elastic (KE conserved)" },
          ],
        },
      ],
    },
  ],
};