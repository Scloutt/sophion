export const IGCSE_PHYSICS_NOTES = {
  level: "igcse",
  subject: "physics",
  board: "edexcel",
  title: "IGCSE Physics — Pearson Edexcel",
  spec: "All Units Covered · Exam-Ready",
  subtitle: "Concise, exam-ready notes covering every unit. You've got this.",
  units: [
    {
      id: "phys-u1",
      n: 1,
      title: "Forces and Motion",
      sections: [
        {
          id: "speed-velocity",
          title: "Speed, Velocity & Acceleration",
          blocks: [
            { type: "bullets", items: [
              "Speed = distance / time  (m/s)",
              "Velocity = displacement / time — it's a VECTOR (direction matters!)",
              "Acceleration = change in velocity / time  (m/s²)",
              "Deceleration = negative acceleration",
            ]},
            { type: "formula", text: "v = u + at" },
            { type: "formula", text: "s = ut + ½at²" },
            { type: "formula", text: "v² = u² + 2as" },
            { type: "formula", text: "s = ½(u + v)t" },
            { type: "p", text: "where: u = initial velocity, v = final velocity, a = acceleration, s = displacement, t = time" },
          ],
        },
        {
          id: "graphs",
          title: "Distance–Time & Velocity–Time Graphs",
          blocks: [
            { type: "bullets", items: [
              "Gradient of d–t graph → speed",
              "Gradient of v–t graph → acceleration",
              "Area under v–t graph → displacement",
              "Flat line on v–t graph → constant velocity (zero acceleration)",
            ]},
          ],
        },
        {
          id: "newtons-laws",
          title: "Newton's Laws",
          blocks: [
            { type: "bullets", items: [
              "1st Law: An object stays at rest or moves at constant velocity unless a resultant force acts on it (inertia).",
              "2nd Law: F = ma  (resultant force = mass × acceleration)",
              "3rd Law: Every action has an equal and opposite reaction.",
            ]},
            { type: "formula", text: "Weight (N) = mass (kg) × g (N/kg)    On Earth: g ≈ 10 N/kg" },
            { type: "tip", text: "Mass is the same everywhere; weight depends on g." },
          ],
        },
        {
          id: "terminal-velocity",
          title: "Terminal Velocity & Stopping Distance",
          blocks: [
            { type: "p", text: "As an object falls: weight > drag → accelerates. As speed increases, drag increases until drag = weight → terminal velocity (no resultant force → constant velocity)." },
            { type: "formula", text: "Stopping Distance = Thinking Distance + Braking Distance" },
            { type: "bullets", items: [
              "Thinking distance factors: tiredness, alcohol, distraction.",
              "Braking distance factors: worn tyres/brakes, wet/icy roads.",
            ]},
          ],
        },
        {
          id: "momentum",
          title: "Momentum & Impulse",
          blocks: [
            { type: "formula", text: "Momentum (p) = mass × velocity  (kg·m/s)" },
            { type: "formula", text: "Impulse = F × t = change in momentum  (N·s)" },
            { type: "p", text: "Conservation of momentum: total momentum before = total momentum after (in a closed system with no external forces)." },
            { type: "formula", text: "Hooke's Law: F = ke  (Force = spring constant × extension)\nValid only up to the limit of proportionality." },
          ],
        },
      ],
    },
    {
      id: "phys-u2",
      n: 2,
      title: "Energy, Work & Power",
      sections: [
        {
          id: "energy-stores",
          title: "Energy Stores & Key Equations",
          blocks: [
            { type: "bullets", items: [
              "Stores: kinetic, gravitational potential, elastic potential, chemical, thermal, nuclear, magnetic, electrostatic.",
              "Transfers: mechanically (forces), electrically, by heating, by radiation.",
            ]},
            { type: "formula", text: "Kinetic Energy:      KE = ½mv²" },
            { type: "formula", text: "Gravitational PE:    GPE = mgh" },
            { type: "formula", text: "Work Done:           W = Fd (when F is parallel to motion)" },
            { type: "formula", text: "Power:               P = W/t = Fv" },
            { type: "formula", text: "Efficiency:          η = useful energy output / total energy input × 100%" },
          ],
        },
        {
          id: "conservation-energy",
          title: "Conservation of Energy",
          blocks: [
            { type: "p", text: "Energy cannot be created or destroyed — only transferred or transformed. Total energy of a closed system always remains constant." },
            { type: "tip", text: "A ball dropped from height h: GPE converts to KE.  mgh = ½mv²  →  v = √(2gh)" },
            { type: "warn", text: "No machine is 100% efficient — energy is always 'lost' to heat/sound. Lost energy isn't destroyed — it's just not useful." },
          ],
        },
      ],
    },
    {
      id: "phys-u3",
      n: 3,
      title: "Waves",
      sections: [
        {
          id: "wave-basics",
          title: "Wave Basics",
          blocks: [
            { type: "bullets", items: [
              "Transverse waves: oscillations perpendicular to direction of travel. (light, water waves, all EM waves)",
              "Longitudinal waves: oscillations parallel to direction of travel. (sound, ultrasound, seismic P-waves)",
            ]},
            { type: "formula", text: "Wave speed (v) = frequency (f) × wavelength (λ)" },
            { type: "formula", text: "Period (T) = 1/f  (s)" },
            { type: "bullets", items: [
              "Amplitude (A): maximum displacement from equilibrium (m)",
              "Wavelength (λ): distance between two successive identical points (m)",
              "Frequency (f): number of complete waves per second (Hz)",
            ]},
          ],
        },
        {
          id: "refraction-tir",
          title: "Reflection, Refraction & TIR",
          blocks: [
            { type: "bullets", items: [
              "Reflection: angle of incidence = angle of reflection (measured from the normal)",
              "Refraction: waves change speed (and direction) when crossing a boundary.",
              "Slows down → bends towards the normal. Speeds up → bends away from the normal.",
            ]},
            { type: "formula", text: "Snell's Law: n = sin i / sin r  (for air-to-medium)" },
            { type: "formula", text: "Refractive index: n = c / v  (c = speed of light in vacuum)" },
            { type: "p", text: "Total Internal Reflection (TIR): occurs when light travels from dense → less dense medium at or above the critical angle (C): sin C = 1/n. Applications: optical fibres, endoscopes." },
          ],
        },
        {
          id: "em-spectrum",
          title: "The Electromagnetic Spectrum",
          blocks: [
            { type: "p", text: "Low freq → high freq: Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma" },
            { type: "p", text: "ALL EM waves travel at 3 × 10⁸ m/s in a vacuum, are transverse, transfer energy, and require no medium." },
            { type: "table", headers: ["Wave", "Uses & Hazards"], rows: [
              ["Radio", "Broadcasting, communication"],
              ["Microwave", "Satellite communication, cooking (absorbed by water)"],
              ["Infrared", "Remote controls, thermal imaging, optical fibres"],
              ["Visible", "Sight, cameras, photosynthesis"],
              ["UV", "Sunbeds; causes skin cancer, damages eyes"],
              ["X-ray", "Medical imaging; ionising — damages DNA"],
              ["Gamma", "Kills cancer cells (radiotherapy); also damages healthy tissue"],
            ]},
          ],
        },
        {
          id: "sound",
          title: "Sound Waves",
          blocks: [
            { type: "bullets", items: [
              "Longitudinal; travel through solids, liquids, gases — NOT through vacuum.",
              "Speed in air ≈ 340 m/s; much faster in solids.",
              "Loudness ↔ amplitude; Pitch ↔ frequency.",
              "Human hearing: 20 Hz – 20,000 Hz.",
              "Ultrasound (>20,000 Hz): sonar, medical scanning, cleaning, crack detection.",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u4",
      n: 4,
      title: "Electricity",
      sections: [
        {
          id: "charge-ohms-law",
          title: "Charge, Current & Ohm's Law",
          blocks: [
            { type: "formula", text: "Charge: Q = It  (Coulombs = Amperes × seconds)" },
            { type: "formula", text: "Ohm's Law: V = IR  (Voltage = Current × Resistance)" },
            { type: "bullets", items: [
              "Ohmic conductors: constant resistance at constant temperature (e.g. resistor)",
              "Non-ohmic: resistance changes (e.g. filament bulb, diode, thermistor, LDR)",
              "Conventional current flows + → −; electrons flow − → +.",
            ]},
          ],
        },
        {
          id: "circuits",
          title: "Series & Parallel Circuits",
          blocks: [
            { type: "sub", text: "Series Circuits" },
            { type: "bullets", items: [
              "Same current throughout",
              "Total resistance: R_total = R₁ + R₂ + R₃",
              "Voltage splits across components",
            ]},
            { type: "sub", text: "Parallel Circuits" },
            { type: "bullets", items: [
              "Same voltage across each branch",
              "Total current = sum of branch currents",
              "1/R_total = 1/R₁ + 1/R₂  (total resistance is LESS than smallest branch)",
            ]},
            { type: "formula", text: "Electrical Power: P = IV = I²R = V²/R" },
          ],
        },
        {
          id: "components",
          title: "Component Behaviour",
          blocks: [
            { type: "bullets", items: [
              "Thermistor: resistance DECREASES as temperature increases.",
              "LDR: resistance DECREASES as light increases.",
              "Diode: allows current in one direction only; forward bias ≈ 0.7 V threshold.",
              "LED: like a diode but emits light; very energy efficient.",
            ]},
          ],
        },
        {
          id: "mains-national-grid",
          title: "Mains Electricity & National Grid",
          blocks: [
            { type: "bullets", items: [
              "UK Mains: 50 Hz | 230 V (AC)",
              "Blue wire → Neutral (N) — 0 V",
              "Brown wire → Live (L) — 230 V",
              "Green/Yellow → Earth (E) — safety ground",
            ]},
            { type: "p", text: "Power stations → step-up transformers → high-voltage transmission → step-down transformers → homes. High voltage → low current → less energy lost as heat (P = I²R)." },
            { type: "formula", text: "Transformer: Vs/Vp = Ns/Np    and    Vp × Ip = Vs × Is (100% efficient)" },
          ],
        },
      ],
    },
    {
      id: "phys-u5",
      n: 5,
      title: "Magnetism & Electromagnetism",
      sections: [
        {
          id: "electromagnetism",
          title: "Electromagnetism",
          blocks: [
            { type: "bullets", items: [
              "Current-carrying wire → circular magnetic field around it.",
              "Right-hand grip rule: thumb points in direction of current → fingers curl in direction of magnetic field.",
              "Solenoid: coiled wire → field like a bar magnet inside.",
              "Electromagnet strength: more coils, more current, iron core.",
            ]},
            { type: "formula", text: "Motor Effect (BIL Force): F = BIL\nB = magnetic flux density (T), I = current (A), L = length (m)" },
            { type: "tip", text: "Fleming's Left-hand Rule: thumb = Force, index = Field, middle = Current. Used in: electric motors, loudspeakers." },
          ],
        },
        {
          id: "induction",
          title: "Electromagnetic Induction & Generators",
          blocks: [
            { type: "bullets", items: [
              "Moving a conductor in a magnetic field generates an EMF.",
              "Faraday's Law: EMF is proportional to rate of change of magnetic flux.",
              "Lenz's Law: induced current opposes the change causing it.",
              "Increase EMF by: faster movement, stronger magnet, more coil turns.",
            ]},
            { type: "bullets", items: [
              "AC generator: slip rings → alternating current.",
              "DC generator: commutator → direct current.",
            ]},
          ],
        },
      ],
    },
    {
      id: "phys-u6",
      n: 6,
      title: "Radioactivity & Atomic Physics",
      sections: [
        {
          id: "radiation-types",
          title: "Types of Radiation",
          blocks: [
            { type: "table", headers: ["Type", "Symbol", "What is it?", "Penetration", "Ionisation"], rows: [
              ["Alpha", "α (⁴₂He)", "2p + 2n", "Paper", "Very high"],
              ["Beta", "β (e⁻)", "Fast electron", "3mm Al", "Medium"],
              ["Gamma", "γ", "EM radiation", "Lead/cm concrete", "Low"],
            ]},
            { type: "bullets", items: [
              "Alpha: stopped by skin/paper; most dangerous if inhaled/ingested.",
              "Beta: deflected by magnetic/electric fields; used in thickness gauges.",
              "Gamma: used in medical imaging and cancer treatment (cobalt-60).",
            ]},
          ],
        },
        {
          id: "half-life",
          title: "Half-Life & Nuclear Decay",
          blocks: [
            { type: "p", text: "Half-life (t½): time for half the radioactive atoms to decay. Activity halves every half-life." },
            { type: "formula", text: "After n half-lives: remaining fraction = (½)ⁿ" },
            { type: "bullets", items: [
              "Alpha decay: A decreases by 4, Z decreases by 2.",
              "Beta decay: A stays same, Z increases by 1 (neutron → proton + electron).",
              "Carbon-14 dating (t½ ≈ 5,700 years); medical tracers (short t½).",
            ]},
            { type: "tip", text: "Background radiation sources: cosmic rays, radon gas, rocks, medical, nuclear industry. Always subtract from measurements in experiments." },
          ],
        },
        {
          id: "fission-fusion",
          title: "Nuclear Fission & Fusion",
          blocks: [
            { type: "sub", text: "Nuclear Fission" },
            { type: "p", text: "A heavy nucleus (uranium-235 or plutonium-239) absorbs a neutron and splits. Releases 2–3 neutrons + energy (chain reaction). Controlled (reactor): 1 neutron per fission goes on to cause another." },
            { type: "sub", text: "Nuclear Fusion" },
            { type: "p", text: "Two light nuclei (hydrogen isotopes) combine to form a heavier one. Releases enormous energy; requires extremely high temperatures (~10⁷ K). Powers the Sun; future clean energy source (ITER project)." },
          ],
        },
      ],
    },
    {
      id: "phys-u7",
      n: 7,
      title: "Pressure & Matter",
      sections: [
        {
          id: "pressure",
          title: "Pressure",
          blocks: [
            { type: "formula", text: "Pressure = Force / Area  (Pa = N/m²)" },
            { type: "formula", text: "Pressure in a fluid: P = ρgh  (density × g × depth)" },
            { type: "p", text: "Greater depth → greater pressure. Pressure acts equally in all directions in a fluid (Pascal's principle)." },
          ],
        },
        {
          id: "state-changes",
          title: "State Changes & Specific Heat",
          blocks: [
            { type: "bullets", items: [
              "Melting / boiling → energy absorbed (endothermic).",
              "Freezing / condensation → energy released (exothermic).",
              "Latent heat: energy needed to change state WITHOUT temperature change.",
            ]},
            { type: "formula", text: "Specific heat: Q = mcΔT\n(Q = energy (J), m = mass (kg), c = specific heat capacity (J/kg°C), ΔT = temp change)" },
            { type: "tip", text: "Water: c = 4,200 J/kg°C — very high; good thermal store." },
          ],
        },
        {
          id: "gas-laws",
          title: "Gas Laws",
          blocks: [
            { type: "formula", text: "Boyle's Law (constant T):    P₁V₁ = P₂V₂" },
            { type: "formula", text: "Charles's Law (constant P):  V₁/T₁ = V₂/T₂" },
            { type: "formula", text: "Pressure Law (constant V):   P₁/T₁ = P₂/T₂" },
            { type: "formula", text: "Convert: T(K) = T(°C) + 273" },
            { type: "tip", text: "Absolute zero: 0 K = −273°C (no particle kinetic energy)." },
          ],
        },
      ],
    },
    {
      id: "phys-u8",
      n: 8,
      title: "Astrophysics",
      sections: [
        {
          id: "life-of-star",
          title: "Life Cycle of a Star",
          blocks: [
            { type: "bullets", items: [
              "Nebula → Protostar → Main sequence star →",
              "(Small/medium star) → Red giant → White dwarf → Black dwarf",
              "(Large/massive star) → Red supergiant → Supernova → Neutron star / Black hole",
            ]},
            { type: "p", text: "Main sequence: hydrogen fusion in core; inward gravity = outward radiation pressure." },
          ],
        },
        {
          id: "big-bang",
          title: "Evidence for the Big Bang",
          blocks: [
            { type: "bullets", items: [
              "Redshift: distant galaxies moving away → universe expanding. More distant → faster recession (Hubble's Law: v = H₀d).",
              "Cosmic Microwave Background (CMB) radiation: remnant heat radiation from early universe — fills all of space.",
            ]},
            { type: "p", text: "Redshift: source moving away → wavelength increases → shift towards red end. Observed wavelength > emitted wavelength → galaxy is receding." },
          ],
        },
      ],
    },
  ],
};