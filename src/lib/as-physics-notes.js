export const AS_PHYSICS_NOTES = {
  level: "as",
  subject: "physics",
  board: "edexcel",
  title: "AS Physics — Pearson Edexcel",
  spec: "Units 1–4 · 8PH0 · Complete Specification",
  subtitle: "Mechanics · Waves · Electricity · Fields · Particles",
  units: [
    {
      id: "phys-u1",
      n: 1,
      title: "Quantities, Units & Scalars/Vectors",
      sections: [
        {
          id: "si-units",
          title: "SI Base Units",
          blocks: [
            { type: "table", headers: ["Quantity", "Unit", "Symbol"], rows: [
              ["Mass", "kilogram", "kg"],
              ["Length", "metre", "m"],
              ["Time", "second", "s"],
              ["Current", "ampere", "A"],
              ["Temperature", "kelvin", "K"],
              ["Amount", "mole", "mol"],
              ["Luminous intensity", "candela", "cd"],
            ]},
            { type: "sub", text: "Prefixes" },
            { type: "bullets", items: [
              "pico (p) = 10⁻¹²   |   nano (n) = 10⁻⁹   |   micro (μ) = 10⁻⁶",
              "milli (m) = 10⁻³   |   kilo (k) = 10³    |   mega (M) = 10⁶",
              "giga (G) = 10⁹     |   tera (T) = 10¹²",
            ]},
          ],
        },
        {
          id: "scalars-vectors",
          title: "Scalars vs Vectors",
          blocks: [
            { type: "bullets", items: [
              "SCALAR — magnitude only: speed, distance, mass, energy, temperature, time",
              "VECTOR — magnitude AND direction: velocity, displacement, force, acceleration, momentum",
            ]},
            { type: "sub", text: "Vector Addition — Component Method" },
            { type: "formula", text: "Resultant R = √(Rx² + Ry²)\nAngle θ = arctan(Ry / Rx)" },
            { type: "warn", text: "Distance is scalar, displacement is vector. Speed is scalar, velocity is vector. Don't mix them in kinematic equations!" },
          ],
        },
      ],
    },
    {
      id: "phys-u2",
      n: 2,
      title: "Kinematics — Motion in a Straight Line",
      sections: [
        {
          id: "suvat",
          title: "SUVAT Equations (Uniform Acceleration Only)",
          blocks: [
            { type: "table", headers: ["Equation", "Missing var"], rows: [
              ["v = u + at", "s"],
              ["s = ut + ½at²", "v"],
              ["v² = u² + 2as", "t"],
              ["s = ½(u + v)t", "a"],
              ["s = vt − ½at²", "u"],
            ]},
            { type: "p", text: "s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time" },
            { type: "tip", text: "Identify which 4 of the 5 variables you know/want, then pick the equation with exactly those 4." },
            { type: "warn", text: "Free fall: g = 9.81 m/s² downward. Decide a positive direction and stick to it throughout!" },
          ],
        },
        {
          id: "projectile",
          title: "Projectile Motion",
          blocks: [
            { type: "table", headers: ["Direction", "Key Points"], rows: [
              ["Horizontal", "No acceleration → x = vₓ · t  (constant speed)"],
              ["Vertical", "a = g downward → use SUVAT"],
            ]},
            { type: "tip", text: "Horizontal and vertical components are INDEPENDENT. Solve each separately." },
          ],
        },
        {
          id: "vt-graphs",
          title: "Velocity–Time Graphs",
          blocks: [
            { type: "bullets", items: [
              "Gradient = acceleration",
              "Area under graph = displacement  (area below x-axis = negative displacement)",
              "Horizontal line = constant velocity (zero acceleration)",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u3",
      n: 3,
      title: "Dynamics — Forces & Newton's Laws",
      sections: [
        {
          id: "newtons-laws",
          title: "Newton's Three Laws",
          blocks: [
            { type: "bullets", items: [
              "1st Law: A body remains at rest or in uniform motion unless acted on by a resultant force. (Inertia!)",
              "2nd Law: F = ma  — resultant force = mass × acceleration",
              "3rd Law: Every action has equal and opposite reaction — forces act on DIFFERENT bodies, same type.",
            ]},
            { type: "formula", text: "Weight W = mg    (g = 9.81 m/s²)" },
            { type: "formula", text: "Friction: F ≤ μN  (max F = μN at limiting equilibrium)" },
            { type: "warn", text: "Newton's 3rd Law pairs: same magnitude, opposite direction, same type, DIFFERENT objects. Gravity + Normal force are NOT a 3rd Law pair!" },
          ],
        },
        {
          id: "fbd",
          title: "Free Body Diagrams & Connected Bodies",
          blocks: [
            { type: "bullets", items: [
              "Draw ALL forces on a SINGLE object: Weight, Normal, Friction, Tension, Air resistance",
              "For connected bodies: treat system as whole to find acceleration (F_net = m_total × a)",
              "Then isolate one body to find tension",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u4",
      n: 4,
      title: "Momentum & Impulse",
      sections: [
        {
          id: "momentum",
          title: "Momentum, Impulse & Conservation",
          blocks: [
            { type: "formula", text: "Momentum: p = mv   [kg m/s]  (vector!)" },
            { type: "formula", text: "Impulse: J = FΔt = Δp   [N·s]" },
            { type: "formula", text: "Conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂" },
            { type: "table", headers: ["Collision type", "KE", "Momentum"], rows: [
              ["Elastic", "Conserved", "Conserved"],
              ["Inelastic", "NOT conserved", "Conserved"],
              ["Perfectly inelastic", "Most lost", "Conserved"],
            ]},
            { type: "tip", text: "Area under a Force–Time graph = impulse = change in momentum." },
            { type: "warn", text: "Momentum is ALWAYS conserved in a closed system. KE is only conserved in perfectly elastic collisions." },
          ],
        },
      ],
    },
    {
      id: "phys-u5",
      n: 5,
      title: "Work, Energy & Power",
      sections: [
        {
          id: "work-energy",
          title: "Work, Energy & Efficiency",
          blocks: [
            { type: "formula", text: "Work done: W = Fs cosθ   [J]\n(θ = angle between force and displacement)" },
            { type: "formula", text: "KE = ½mv²\nGPE = mgh\nElastic PE = ½kx²" },
            { type: "formula", text: "Power: P = W/t = Fv   [W]" },
            { type: "formula", text: "Efficiency η = (useful output energy / total input energy) × 100%" },
            { type: "warn", text: "A force perpendicular to motion does ZERO work. Circular motion — centripetal force does no work!" },
          ],
        },
      ],
    },
    {
      id: "phys-u6",
      n: 6,
      title: "Materials — Stress, Strain & Young's Modulus",
      sections: [
        {
          id: "hookes",
          title: "Hooke's Law & Springs",
          blocks: [
            { type: "formula", text: "F = kx   (proportional up to elastic limit)\nEPE = ½kx² = ½Fx" },
            { type: "bullets", items: [
              "Series: 1/k_total = 1/k₁ + 1/k₂   (softer)",
              "Parallel: k_total = k₁ + k₂   (stiffer)",
            ]},
          ],
        },
        {
          id: "young-modulus",
          title: "Stress, Strain & Young's Modulus",
          blocks: [
            { type: "formula", text: "Stress σ = F/A   [Pa]\nStrain ε = ΔL/L₀   (dimensionless)\nYoung's Modulus E = σ/ε = FL₀/(AΔL)   [Pa]" },
            { type: "sub", text: "Stress–Strain Graph Landmarks" },
            { type: "bullets", items: [
              "P = Limit of proportionality (Hooke's law holds below here)",
              "E = Elastic limit (returns to shape below here)",
              "Y = Yield point (permanent deformation begins)",
              "UTS = Ultimate Tensile Strength (maximum stress)",
              "F = Fracture point",
            ]},
            { type: "table", headers: ["Property", "Meaning"], rows: [
              ["Stiff", "High Young's modulus"],
              ["Strong", "High UTS"],
              ["Ductile", "Large plastic region (drawn into wires)"],
              ["Brittle", "Fractures with little plastic deformation"],
              ["Tough", "Large area under stress-strain curve"],
            ]},
            { type: "tip", text: "Area under stress-strain graph = energy stored per unit volume. Area under force-extension graph = energy stored (J)." },
          ],
        },
      ],
    },
    {
      id: "phys-u7",
      n: 7,
      title: "Wave Basics",
      sections: [
        {
          id: "wave-quantities",
          title: "Key Wave Quantities",
          blocks: [
            { type: "formula", text: "Wave equation: v = fλ\nPeriod: T = 1/f" },
            { type: "table", headers: ["Type", "Oscillation", "Examples"], rows: [
              ["Transverse", "Perpendicular to propagation", "EM waves, string, water"],
              ["Longitudinal", "Parallel to propagation", "Sound, compression waves"],
            ]},
            { type: "formula", text: "Phase difference φ = (path difference / λ) × 360°\n                   = (path difference / λ) × 2π  [radians]" },
          ],
        },
      ],
    },
    {
      id: "phys-u8",
      n: 8,
      title: "Wave Properties: Reflection, Refraction & Diffraction",
      sections: [
        {
          id: "refraction",
          title: "Refraction & Total Internal Reflection",
          blocks: [
            { type: "formula", text: "Snell's Law: n₁ sinθ₁ = n₂ sinθ₂\nRefractive index: n = c/v" },
            { type: "formula", text: "Critical angle: sinθc = n₂/n₁ = 1/n (into air)" },
            { type: "bullets", items: [
              "TIR occurs when going from dense → less dense medium AND angle > θc",
              "Applications: optical fibres, diamonds, periscopes",
            ]},
            { type: "warn", text: "Frequency NEVER changes when a wave passes between media. Only wavelength and speed change." },
          ],
        },
        {
          id: "diffraction",
          title: "Diffraction",
          blocks: [
            { type: "bullets", items: [
              "Waves spread when passing through a gap or around an obstacle",
              "Most significant when gap ≈ wavelength",
              "Single slit: central maximum is wide and bright; subsidiary maxima are narrower and dimmer",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u9",
      n: 9,
      title: "Superposition & Interference",
      sections: [
        {
          id: "interference",
          title: "Interference & Young's Double Slit",
          blocks: [
            { type: "p", text: "Principle of Superposition: resultant displacement = vector sum of individual displacements." },
            { type: "bullets", items: [
              "Constructive: path difference = nλ → bright/loud region",
              "Destructive: path difference = (n + ½)λ → dark/quiet region",
            ]},
            { type: "formula", text: "Fringe spacing: w = λD/d\n(w = spacing, D = distance to screen, d = slit separation)" },
            { type: "bullets", items: [
              "Increasing D or λ → wider fringes | Decreasing d → wider fringes",
              "Coherent sources required: same frequency, constant phase difference",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u10",
      n: 10,
      title: "Standing Waves",
      sections: [
        {
          id: "standing",
          title: "Formation & Harmonics",
          blocks: [
            { type: "p", text: "Two waves of equal frequency and amplitude travelling in opposite directions superpose → standing wave." },
            { type: "bullets", items: [
              "NODES — zero displacement (destructive interference)",
              "ANTINODES — maximum displacement (constructive interference)",
              "Adjacent nodes: λ/2 apart | Node to adjacent antinode: λ/4",
            ]},
            { type: "formula", text: "Stretched string (fixed both ends):\nFundamental f₁ = v/2L   |   nth harmonic fn = nv/2L" },
            { type: "formula", text: "Open pipe: fn = nv/2L  (all harmonics)\nClosed pipe: fn = nv/4L  (odd harmonics only, n = 1,3,5...)" },
          ],
        },
      ],
    },
    {
      id: "phys-u11",
      n: 11,
      title: "Electromagnetic Spectrum",
      sections: [
        {
          id: "em-spectrum",
          title: "EM Spectrum",
          blocks: [
            { type: "p", text: "All EM waves travel at c = 3 × 10⁸ m/s in a vacuum." },
            { type: "table", headers: ["Type", "Wavelength (m)"], rows: [
              ["Radio", "> 0.1"],
              ["Microwave", "10⁻³ – 0.1"],
              ["Infrared", "7×10⁻⁷ – 10⁻³"],
              ["Visible", "4–7 × 10⁻⁷"],
              ["Ultraviolet", "10⁻⁸ – 4×10⁻⁷"],
              ["X-ray", "10⁻¹³ – 10⁻⁸"],
              ["Gamma", "< 10⁻¹²"],
            ]},
            { type: "tip", text: "Visible light: ROY G BIV (Red → Violet = increasing frequency/energy)" },
          ],
        },
      ],
    },
    {
      id: "phys-u12",
      n: 12,
      title: "Current Electricity — Foundations",
      sections: [
        {
          id: "basic-electricity",
          title: "Charge, Current, Voltage & Resistance",
          blocks: [
            { type: "formula", text: "Q = It   [Coulombs]\nV = W/Q  [Volts = J/C]\nR = V/I  [Ohms]" },
            { type: "bullets", items: [
              "Charge of electron: e = 1.6 × 10⁻¹⁹ C",
              "Conventional current: + → −  |  Electrons flow: − → +",
            ]},
            { type: "sub", text: "I–V Characteristics" },
            { type: "bullets", items: [
              "Ohmic resistor: straight line through origin",
              "Filament bulb: curve — resistance increases with temperature",
              "Diode: conducts one way only; very high R in reverse",
              "Thermistor (NTC): R decreases as temperature increases",
              "LDR: R decreases as light intensity increases",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u13",
      n: 13,
      title: "Resistance & Resistivity",
      sections: [
        {
          id: "resistivity",
          title: "Resistivity & Power",
          blocks: [
            { type: "formula", text: "Resistivity: R = ρL/A\n(ρ = resistivity [Ω·m], L = length, A = cross-sectional area)" },
            { type: "bullets", items: [
              "Metals: ρ increases with temperature (more lattice vibrations)",
              "Semiconductors: ρ decreases with temperature (more charge carriers)",
            ]},
            { type: "formula", text: "Power: P = IV = I²R = V²/R   [W]\nEnergy: E = Pt = IVt  [J]" },
          ],
        },
      ],
    },
    {
      id: "phys-u14",
      n: 14,
      title: "Circuit Rules: Series & Parallel",
      sections: [
        {
          id: "circuits",
          title: "Kirchhoff's Laws & Circuit Rules",
          blocks: [
            { type: "table", headers: ["", "Series", "Parallel"], rows: [
              ["Current", "Same: I₁ = I₂ = I₃", "Splits: I = I₁ + I₂ + I₃"],
              ["Voltage", "Splits: V = V₁ + V₂ + V₃", "Same: V₁ = V₂ = V₃"],
              ["Resistance", "R = R₁ + R₂ + R₃", "1/R = 1/R₁ + 1/R₂ + 1/R₃"],
            ]},
            { type: "bullets", items: [
              "KCL: Sum of currents INTO junction = sum leaving (charge conservation)",
              "KVL: Sum of EMFs in a loop = sum of pd drops (energy conservation)",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u15",
      n: 15,
      title: "EMF & Internal Resistance",
      sections: [
        {
          id: "emf",
          title: "EMF & Terminal Voltage",
          blocks: [
            { type: "formula", text: "ε = I(R + r)   →   V = ε − Ir\n(ε = EMF, r = internal resistance, V = terminal voltage)" },
            { type: "bullets", items: [
              "EMF = maximum voltage (no current flowing)",
              "Terminal voltage = EMF − voltage drop across internal resistance",
              "Plot V vs I: y-intercept = ε, gradient = −r",
            ]},
            { type: "warn", text: "Terminal voltage is ALWAYS less than EMF when current flows. Under load, V < ε." },
          ],
        },
      ],
    },
    {
      id: "phys-u16",
      n: 16,
      title: "Potential Divider",
      sections: [
        {
          id: "potential-divider",
          title: "Potential Divider Rule",
          blocks: [
            { type: "formula", text: "V_out = V_in × R₂/(R₁ + R₂)" },
            { type: "bullets", items: [
              "Thermistor in divider: as T rises, R drops → V_out changes",
              "LDR in divider: as light increases, R drops → V_out changes",
              "Potentiometer: variable resistor → continuously variable 0 to V_in",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u17",
      n: 17,
      title: "Practical Skills & Uncertainties",
      sections: [
        {
          id: "errors",
          title: "Types of Error & Uncertainty",
          blocks: [
            { type: "bullets", items: [
              "Systematic error: consistent offset (zero error, calibration) — cannot be reduced by repeating",
              "Random error: unpredictable scatter — reduced by repeating and averaging",
              "Accurate: close to true value | Precise: results tightly clustered",
            ]},
            { type: "formula", text: "% uncertainty = (absolute uncertainty / measured value) × 100%\nAbsolute uncertainty = half the range of repeats (or half smallest scale division)" },
            { type: "sub", text: "Combining Uncertainties" },
            { type: "bullets", items: [
              "Addition/Subtraction: ADD absolute uncertainties",
              "Multiplication/Division: ADD percentage uncertainties",
              "Power n: MULTIPLY % uncertainty by n",
            ]},
            { type: "table", headers: ["Instrument", "Typical Uncertainty"], rows: [
              ["Metre ruler", "± 0.5 mm"],
              ["Vernier calliper", "± 0.05 mm"],
              ["Micrometer", "± 0.005 mm"],
              ["Digital balance", "± 0.001 g"],
              ["Stopwatch", "± 0.01 s (reaction ±0.2 s)"],
            ]},
          ],
        },
        {
          id: "graphs-analysis",
          title: "Graphs & Analysis",
          blocks: [
            { type: "bullets", items: [
              "Best-fit line: equal points on each side, NEVER connect dot-to-dot",
              "Gradient: use LARGE triangles on the line, include units",
              "Error bars: best-fit line should pass through all error bars",
            ]},
            { type: "sub", text: "Linearisation" },
            { type: "bullets", items: [
              "y = kxⁿ: plot log(y) vs log(x) → gradient = n, y-int = log(k)",
              "y = ae^(bx): plot ln(y) vs x → gradient = b, y-int = ln(a)",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u18",
      n: 18,
      title: "Circular Motion",
      sections: [
        {
          id: "circular",
          title: "Circular Motion",
          blocks: [
            { type: "formula", text: "Angular velocity: ω = Δθ/Δt = v/r = 2πf   [rad/s]\nLinear speed: v = ωr\nPeriod: T = 2π/ω" },
            { type: "formula", text: "Centripetal acceleration: a = v²/r = ω²r  (towards centre)\nCentripetal force: F = mv²/r = mω²r  (towards centre)" },
            { type: "bullets", items: [
              "Car on flat bend: friction provides centripetal force",
              "Satellite orbit: gravity provides centripetal force",
              "Centripetal force is NOT a separate force — it IS the resultant of real forces",
            ]},
            { type: "warn", text: "There is NO 'centrifugal force'. Objects don't fly outwards; they continue in a straight line if force is removed." },
          ],
        },
      ],
    },
    {
      id: "phys-u19",
      n: 19,
      title: "Electric Fields",
      sections: [
        {
          id: "electric-fields",
          title: "Electric Field Strength & Coulomb's Law",
          blocks: [
            { type: "formula", text: "Field strength: E = F/Q   [N/C = V/m]" },
            { type: "formula", text: "Coulomb's Law: F = kQ₁Q₂/r²\nk = 8.99 × 10⁹ N m² C⁻²" },
            { type: "formula", text: "Point charge field: E = kQ/r²  (radial, inverse-square)" },
            { type: "formula", text: "Uniform field (parallel plates): E = V/d" },
            { type: "tip", text: "Gravity (g = GM/r²) and electric field (E = kQ/r²) both follow inverse-square law. Key difference: gravity only attracts; electric can attract OR repel." },
          ],
        },
      ],
    },
    {
      id: "phys-u20",
      n: 20,
      title: "Capacitors",
      sections: [
        {
          id: "capacitors",
          title: "Capacitance & Charging/Discharging",
          blocks: [
            { type: "formula", text: "Capacitance: C = Q/V   [Farads]" },
            { type: "formula", text: "Energy stored: W = ½QV = ½CV² = Q²/(2C)" },
            { type: "bullets", items: [
              "Parallel: C_total = C₁ + C₂ + C₃",
              "Series: 1/C_total = 1/C₁ + 1/C₂ + 1/C₃",
            ]},
            { type: "formula", text: "Discharge: Q = Q₀e^(−t/RC)   V = V₀e^(−t/RC)   I = I₀e^(−t/RC)\nTime constant τ = RC  [s]  — falls to 37% after τ; ~0% after 5τ" },
            { type: "formula", text: "Charging: Q = Q₀(1 − e^(−t/RC))" },
          ],
        },
      ],
    },
    {
      id: "phys-u21",
      n: 21,
      title: "Magnetic Fields",
      sections: [
        {
          id: "magnetic",
          title: "Magnetic Force & Charged Particles",
          blocks: [
            { type: "formula", text: "Force on conductor: F = BIL sinθ   [N]" },
            { type: "formula", text: "Force on moving charge: F = BQv sinθ" },
            { type: "formula", text: "Radius of circular path: r = mv/(BQ)" },
            { type: "bullets", items: [
              "Fleming's Left-Hand Rule: thuMb → Motion, First finger → Field, seCond finger → Current",
              "Perpendicular force → circular motion in uniform field",
              "Mass spectrometer: uses B field to deflect ions of different mass to different radii",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u22",
      n: 22,
      title: "Electromagnetic Induction",
      sections: [
        {
          id: "induction",
          title: "Faraday's Law, Lenz's Law & Transformers",
          blocks: [
            { type: "formula", text: "Magnetic flux: Φ = BA cosθ   [Wb = T m²]" },
            { type: "formula", text: "Faraday's Law: |ε| = N × ΔΦ/Δt" },
            { type: "p", text: "Lenz's Law: induced current opposes the change causing it (energy conservation — explains the minus sign)." },
            { type: "formula", text: "Transformer: Vs/Vp = Ns/Np\nIdeal power conservation: VpIp = VsIs" },
            { type: "bullets", items: [
              "Step-up: Ns > Np → higher voltage, lower current",
              "Step-down: Ns < Np → lower voltage, higher current",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u23",
      n: 23,
      title: "Particle Physics",
      sections: [
        {
          id: "standard-model",
          title: "The Standard Model",
          blocks: [
            { type: "sub", text: "Fermions (matter particles)" },
            { type: "bullets", items: [
              "QUARKS: up, down, charm, strange, top, bottom (+ antiquarks)",
              "LEPTONS: electron, muon, tau + their neutrinos (6 leptons + antileptons)",
            ]},
            { type: "sub", text: "Bosons (force carriers)" },
            { type: "bullets", items: [
              "Photon (γ) — electromagnetic force",
              "Gluon — strong nuclear force",
              "W⁺, W⁻, Z — weak nuclear force",
            ]},
          ],
        },
        {
          id: "quarks-hadrons",
          title: "Quark Composition & Beta Decay",
          blocks: [
            { type: "table", headers: ["Hadron", "Quarks", "Charge"], rows: [
              ["Proton", "uud", "+1"],
              ["Neutron", "udd", "0"],
              ["Pion π⁺", "ud̄", "+1"],
              ["Pion π⁻", "ūd", "−1"],
            ]},
            { type: "bullets", items: [
              "Up-type quarks (u,c,t): charge = +2/3",
              "Down-type quarks (d,s,b): charge = −1/3",
            ]},
            { type: "formula", text: "β⁻ decay: n → p + e⁻ + ν̄e   (d → u, W⁻ mediates)\nβ⁺ decay: p → n + e⁺ + νe   (u → d, W⁺ mediates)" },
          ],
        },
        {
          id: "conservation-laws",
          title: "Conservation Laws",
          blocks: [
            { type: "bullets", items: [
              "ALWAYS conserved: Energy, Momentum, Charge, Baryon Number, Lepton Number",
              "NOT conserved in weak interactions: Strangeness",
              "Baryon number: quarks = +1/3, antiquarks = −1/3",
              "Lepton number: e⁻ = +1, e⁺ = −1, νe = +1, ν̄e = −1",
            ]},
            { type: "warn", text: "To check if a reaction is allowed, verify ALL conservation laws. If ANY one is violated, the reaction cannot occur." },
          ],
        },
        {
          id: "antimatter",
          title: "Antimatter",
          blocks: [
            { type: "bullets", items: [
              "Every particle has an antiparticle (same mass, opposite charge/quantum numbers)",
              "Annihilation: particle + antiparticle → 2 photons",
              "Pair production: photon → particle + antiparticle  (needs E ≥ 2mc²)",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u24",
      n: 24,
      title: "Nuclear Physics & Radioactivity",
      sections: [
        {
          id: "radiation-types",
          title: "Types of Radiation",
          blocks: [
            { type: "table", headers: ["Type", "Particle", "Ionising", "Penetrating"], rows: [
              ["Alpha (α)", "⁴₂He nucleus", "Most", "Least (cm air)"],
              ["Beta- (β⁻)", "Electron", "Medium", "mm of Al"],
              ["Beta+ (β⁺)", "Positron", "Medium", "mm of Al"],
              ["Gamma (γ)", "EM radiation", "Least", "Most (thick Pb)"],
            ]},
            { type: "formula", text: "α decay: (A/Z)X → (A−4)/(Z−2)Y + ⁴₂He\nβ⁻ decay: (A/Z)X → (A)/(Z+1)Y + ⁰₋₁e + ν̄e\nβ⁺ decay: (A/Z)X → (A)/(Z−1)Y + ⁰₊₁e + νe" },
          ],
        },
        {
          id: "decay-law",
          title: "Radioactive Decay Law",
          blocks: [
            { type: "formula", text: "N = N₀e^(−λt)\nActivity: A = λN = −dN/dt" },
            { type: "formula", text: "Half-life: T½ = ln2/λ = 0.693/λ\nAfter n half-lives: N = N₀ × (½)ⁿ" },
          ],
        },
        {
          id: "nuclear-energy",
          title: "Nuclear Binding Energy & Fission/Fusion",
          blocks: [
            { type: "formula", text: "Nuclear radius: r = r₀A^(1/3)   (r₀ ≈ 1.2 fm)" },
            { type: "formula", text: "Mass-energy: E = mc²\n1 u = 931.5 MeV/c²" },
            { type: "bullets", items: [
              "Binding energy per nucleon peaks at Fe-56 → most stable",
              "Lighter than Fe: fusion releases energy",
              "Heavier than Fe: fission releases energy",
              "Fusion requires ~10⁷ K to overcome coulombic repulsion",
            ]},
          ],
        },
      ],
    },
  ],
};