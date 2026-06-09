export const AS_CHEMISTRY_NOTES = {
  level: "as",
  subject: "chemistry",
  board: "edexcel",
  title: "AS Chemistry — Pearson Edexcel",
  spec: "Topics 1–9 · Concise · Exam-Ready",
  subtitle: "Atomic Structure · Bonding · Organic Chemistry · Energetics · Redox",
  units: [
    {
      id: "chem-t1",
      n: 1,
      title: "Atomic Structure & the Periodic Table",
      sections: [
        {
          id: "subatomic",
          title: "Subatomic Particles",
          blocks: [
            { type: "table", headers: ["Particle", "Relative Mass", "Charge", "Location"], rows: [
              ["Proton", "1", "+1", "Nucleus"],
              ["Neutron", "1", "0", "Nucleus"],
              ["Electron", "1/1836", "−1", "Shells/orbitals"],
            ]},
            { type: "bullets", items: [
              "Atomic number (Z) = number of protons",
              "Mass number (A) = protons + neutrons",
              "Isotopes: same element, different number of neutrons (same Z, different A)",
            ]},
            { type: "formula", text: "Ar = Σ (% abundance × mass number) / 100" },
          ],
        },
        {
          id: "mass-spec",
          title: "Mass Spectrometry",
          blocks: [
            { type: "bullets", items: [
              "1. Vaporisation — sample vaporised",
              "2. Ionisation — bombarded by high-energy electrons → M⁺ ions",
              "3. Acceleration — electric field accelerates ions",
              "4. Deflection — magnetic field deflects ions (lighter ions deflect MORE)",
              "5. Detection — ions detected at collector, m/z recorded",
            ]},
            { type: "p", text: "Molecular ion peak (M⁺) = relative molecular mass of compound. Fragmentation peaks help identify structure." },
          ],
        },
        {
          id: "electron-config",
          title: "Electron Configuration",
          blocks: [
            { type: "bullets", items: [
              "s orbital: spherical (holds 2e) | p orbitals: 3 per subshell (holds 6e) | d orbitals: 5 per subshell (holds 10e)",
              "Energy order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p",
              "Aufbau: fill lowest energy first | Pauli: max 2 per orbital | Hund's: singly occupy same-energy orbitals first",
            ]},
            { type: "warn", text: "Exceptions: Cr = [Ar] 3d⁵ 4s¹   Cu = [Ar] 3d¹⁰ 4s¹  (half-filled and fully-filled d subshells are extra stable)" },
          ],
        },
        {
          id: "ionisation",
          title: "Ionisation Energies & Periodic Trends",
          blocks: [
            { type: "formula", text: "First IE: X(g) → X⁺(g) + e⁻" },
            { type: "bullets", items: [
              "Increases across a period (↑ nuclear charge, same shielding, smaller atomic radius)",
              "Decreases down a group (↑ shielding, greater atomic radius)",
              "Successive IEs: large jump after outer electrons removed → reveals group number",
              "Al lower 1st IE than Mg: electron removed from 3p (higher energy than 3s)",
              "O lower 1st IE than N: paired electrons in O repel each other → easier removal",
            ]},
            { type: "sub", text: "Physical Properties Across Period 3 (Na to Ar)" },
            { type: "bullets", items: [
              "Na, Mg, Al: giant metallic lattice — good conductors, high mp",
              "Si: giant covalent lattice — very high mp (4 covalent bonds to each Si)",
              "P, S, Cl, Ar: simple molecular — weak London forces — low mp",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t2",
      n: 2,
      title: "Formulae, Equations & Amounts of Substance",
      sections: [
        {
          id: "moles",
          title: "The Mole & Key Equations",
          blocks: [
            { type: "formula", text: "1 mole = 6.02 × 10²³ particles (Avogadro's number, Nₐ)" },
            { type: "formula", text: "n = m / Mr          (moles = mass / molar mass)" },
            { type: "formula", text: "n = cV              (moles = concentration × volume in dm³)" },
            { type: "formula", text: "n = V / 24          (moles = volume / 24 dm³ at RTP)" },
            { type: "formula", text: "PV = nRT            (P in Pa, V in m³, T in K, R = 8.314)" },
          ],
        },
        {
          id: "empirical",
          title: "Formulae & Yields",
          blocks: [
            { type: "bullets", items: [
              "Empirical formula: simplest whole number ratio (e.g. CH₂)",
              "Molecular formula: actual number of atoms (e.g. C₄H₈)",
              "n = Mr(molecular) / Mr(empirical)",
            ]},
            { type: "formula", text: "% yield = (actual yield / theoretical yield) × 100" },
            { type: "formula", text: "Atom economy = (Mr of desired product / Mr of all products) × 100" },
            { type: "tip", text: "Addition reactions: 100% atom economy. Substitution reactions: <100% (byproducts formed)." },
          ],
        },
        {
          id: "titration-calcs",
          title: "Titration Calculations",
          blocks: [
            { type: "bullets", items: [
              "1. n(acid) = c × V  (V in dm³ — divide mL by 1000)",
              "2. Use mole ratio from equation to find n(base)",
              "3. c(base) = n / V",
              "Back titrations: n(reacted) = n(initial) − n(excess)",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t3",
      n: 3,
      title: "Bonding and Structure",
      sections: [
        {
          id: "ionic-bonding",
          title: "Ionic Bonding",
          blocks: [
            { type: "bullets", items: [
              "Metal loses electrons → cation; nonmetal gains → anion",
              "Opposite charges attract → ionic lattice",
            ]},
            { type: "table", headers: ["Property", "Ionic"], rows: [
              ["mp/bp", "High (strong electrostatic forces)"],
              ["Conductivity (molten/solution)", "Yes (mobile ions)"],
              ["Conductivity (solid)", "No (ions fixed in lattice)"],
              ["Brittleness", "Yes (lattice layers shift → repulsion)"],
            ]},
          ],
        },
        {
          id: "covalent-vsepr",
          title: "Covalent Bonding & VSEPR",
          blocks: [
            { type: "table", headers: ["Molecule", "BP", "LP", "Shape", "Angle"], rows: [
              ["BeCl₂", "2", "0", "Linear", "180°"],
              ["BCl₃", "3", "0", "Trigonal planar", "120°"],
              ["CH₄", "4", "0", "Tetrahedral", "109.5°"],
              ["NH₃", "3", "1", "Pyramidal", "107°"],
              ["H₂O", "2", "2", "Bent/V-shape", "104.5°"],
              ["PCl₅", "5", "0", "Trigonal bipyramidal", "90°/120°"],
              ["SF₆", "6", "0", "Octahedral", "90°"],
            ]},
            { type: "bullets", items: [
              "Single bond = 1 σ bond | Double bond = 1 σ + 1 π | Triple bond = 1 σ + 2 π",
              "σ bonds: end-to-end overlap (free rotation) | π bonds: side-on overlap (prevents rotation → E/Z isomerism)",
              "Dative bond: both electrons donated by ONE atom (e.g. NH₄⁺, BF₃·NH₃)",
            ]},
          ],
        },
        {
          id: "intermolecular",
          title: "Intermolecular Forces",
          blocks: [
            { type: "sub", text: "Ranking: London < Permanent dipole–dipole < Hydrogen bonding" },
            { type: "bullets", items: [
              "London forces: present in ALL molecules; increases with more electrons, larger surface area, less branching",
              "Permanent dipole: Δχ > 0.4 → polar bond; if asymmetric molecule → dipole",
              "Hydrogen bonding: ONLY H bonded to N, O, or F near another N, O, or F with lone pair",
              "Water makes 4 H-bonds per molecule → tetrahedral arrangement",
              "Ice: open lattice → less dense than liquid water (anomalous expansion)",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t4",
      n: 4,
      title: "Introductory Organic Chemistry",
      sections: [
        {
          id: "nomenclature",
          title: "Nomenclature & Isomerism",
          blocks: [
            { type: "bullets", items: [
              "Find longest carbon chain → number from end nearest first substituent",
              "Suffixes: -ane, -ene, -ol, -al, -one, -oic acid, -oate, -amine",
            ]},
            { type: "sub", text: "Types of Isomerism" },
            { type: "bullets", items: [
              "Structural: same formula, different structure (chain, position, functional group)",
              "E/Z: restricted rotation about C=C; E = higher priority groups OPPOSITE sides; Z = SAME side",
              "Optical: chiral carbon (4 different groups) → non-superimposable mirror images (enantiomers)",
            ]},
          ],
        },
        {
          id: "alkanes",
          title: "Alkanes",
          blocks: [
            { type: "formula", text: "General formula: CₙH₂ₙ₊₂" },
            { type: "bullets", items: [
              "Non-polar; only London forces → bp increases with chain length",
              "Branching DECREASES bp (less contact area, weaker London forces)",
            ]},
            { type: "sub", text: "Free Radical Substitution (halogenation)" },
            { type: "bullets", items: [
              "Initiation:    Cl₂ → 2 Cl•  (UV light breaks Cl–Cl bond)",
              "Propagation:  CH₄ + Cl• → •CH₃ + HCl  |  •CH₃ + Cl₂ → CH₃Cl + Cl•",
              "Termination:  two radicals combine (e.g. Cl• + Cl• → Cl₂)",
              "Problem: produces mixture of products → low yield",
            ]},
          ],
        },
        {
          id: "alkenes",
          title: "Alkenes",
          blocks: [
            { type: "formula", text: "General formula: CₙH₂ₙ  |  Contains C=C (1 σ + 1 π bond)" },
            { type: "sub", text: "Reactions — Electrophilic Addition" },
            { type: "bullets", items: [
              "Hydrohalogenation (HBr): Markovnikov's rule — H adds to C with MORE H's",
              "Halogenation (Br₂): orange → colourless = TEST for C=C double bond",
              "Hydration (H₂O + H₃PO₄ catalyst, 300°C, 65 atm) → alcohol",
              "Hydrogenation (H₂, Ni catalyst, 150°C) → alkane; used in margarine",
              "Addition polymerisation: n(CH₂=CH₂) → -(CH₂–CH₂)ₙ-",
            ]},
          ],
        },
        {
          id: "alcohols",
          title: "Alcohols",
          blocks: [
            { type: "bullets", items: [
              "1° alcohol + K₂Cr₂O₇/H₂SO₄ (distillation) → aldehyde | (reflux) → carboxylic acid",
              "2° alcohol + K₂Cr₂O₇/H₂SO₄ (reflux) → ketone (cannot oxidise further)",
              "3° alcohol → NO REACTION with dichromate",
              "Colour change: Cr₂O₇²⁻ (orange) → Cr³⁺ (green) on oxidation",
            ]},
            { type: "formula", text: "Dehydration (conc. H₃PO₄, ~170°C): Alcohol → alkene + H₂O\nEsterification (conc. H₂SO₄): Alcohol + carboxylic acid ⇌ ester + water" },
          ],
        },
        {
          id: "haloalkanes",
          title: "Haloalkanes",
          blocks: [
            { type: "bullets", items: [
              "Nucleophilic substitution: warm aqueous NaOH → alcohol",
              "SN2: one-step, backside attack — primary haloalkanes favour this",
              "SN1: two-step, carbocation intermediate — tertiary haloalkanes favour this",
              "Elimination (ethanolic KOH, warm, concentrated) → alkene",
            ]},
            { type: "sub", text: "Testing for Halogens" },
            { type: "bullets", items: [
              "1. Warm with NaOH(aq) to hydrolyse C–X | 2. Acidify with dilute HNO₃ | 3. Add AgNO₃",
              "Cl⁻ → white precipitate (soluble in dilute NH₃)",
              "Br⁻ → cream precipitate (soluble in conc. NH₃)",
              "I⁻  → yellow precipitate (insoluble in conc. NH₃)",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t5",
      n: 5,
      title: "Energetics",
      sections: [
        {
          id: "enthalpy",
          title: "Enthalpy Changes",
          blocks: [
            { type: "bullets", items: [
              "Standard enthalpy of combustion: enthalpy change when 1 mol burns completely in O₂",
              "Standard enthalpy of formation: enthalpy change when 1 mol compound formed from its elements",
              "Exothermic: ΔH negative | Endothermic: ΔH positive",
              "Standard conditions: 298 K, 100 kPa",
            ]},
            { type: "formula", text: "q = mcΔT\nΔH = −q / n" },
            { type: "sub", text: "Hess's Law" },
            { type: "formula", text: "Using formation: ΔHrxn = ΣΔHf°(products) − ΣΔHf°(reactants)" },
            { type: "formula", text: "Using combustion: ΔHrxn = ΣΔHc°(reactants) − ΣΔHc°(products)" },
            { type: "tip", text: "Formation and combustion triangles are OPPOSITE — always draw a diagram!" },
            { type: "formula", text: "Bond enthalpies: ΔH = Σ(bonds broken) − Σ(bonds formed)" },
            { type: "warn", text: "Bond enthalpies give APPROXIMATE ΔH only — average bond energies used, not exact values." },
          ],
        },
        {
          id: "born-haber",
          title: "Born–Haber Cycles",
          blocks: [
            { type: "bullets", items: [
              "Lattice enthalpy (ΔHlatt): energy to separate 1 mol ionic lattice into gaseous ions — always endothermic; NaCl ≈ +787 kJ mol⁻¹",
              "1st electron affinity: usually exothermic | 2nd EA: always endothermic",
              "Enthalpy of atomisation: always endothermic",
            ]},
            { type: "formula", text: "Hess: ΔHf° = ΔHat(metal) + IE + ΔHat(nonmetal) + EA + ΔHlatt" },
          ],
        },
      ],
    },
    {
      id: "chem-t6",
      n: 6,
      title: "Equilibria",
      sections: [
        {
          id: "le-chatelier",
          title: "Le Chatelier's Principle",
          blocks: [
            { type: "p", text: "When a system in equilibrium is subjected to a change, the system will shift to oppose that change." },
            { type: "table", headers: ["Change", "Effect on equilibrium"], rows: [
              ["↑ concentration A/B", "Shifts RIGHT (more products)"],
              ["↑ concentration C/D", "Shifts LEFT (more reactants)"],
              ["↑ pressure", "Shifts to side with fewer moles of gas"],
              ["↑ temperature", "Shifts in endothermic direction"],
              ["Add catalyst", "NO SHIFT (reaches equilibrium faster)"],
            ]},
            { type: "formula", text: "Kc = [C]^c [D]^d / [A]^a [B]^b\n(Kc depends ONLY on temperature)" },
          ],
        },
        {
          id: "haber",
          title: "Haber Process",
          blocks: [
            { type: "formula", text: "N₂ + 3H₂ ⇌ 2NH₃    ΔH = −92 kJ mol⁻¹" },
            { type: "bullets", items: [
              "Temperature: 400–450°C — higher T shifts left (not thermodynamically favourable) but needed for rate",
              "Pressure: 150–300 atm — high P favours products (4 → 2 mol gas) but expensive/dangerous",
              "Catalyst: Fe (with K₂O and Al₂O₃ promoters) — reaches equilibrium faster",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t7",
      n: 7,
      title: "Reaction Kinetics",
      sections: [
        {
          id: "collision-theory",
          title: "Collision Theory & Maxwell–Boltzmann",
          blocks: [
            { type: "p", text: "Reaction occurs when particles collide with sufficient energy (≥ Ea) AND correct orientation." },
            { type: "bullets", items: [
              "↑ Temperature: more particles have energy ≥ Ea; more frequent collisions",
              "↑ Concentration (or pressure): more frequent collisions",
              "↑ Surface area (solid): more collisions per unit time",
              "Catalyst: provides alternative pathway with lower Ea",
            ]},
            { type: "tip", text: "Maxwell–Boltzmann: Increasing T → curve flattens, peak moves right, area > Ea increases dramatically. Adding catalyst → Ea line moves left." },
            { type: "bullets", items: [
              "Homogeneous catalyst: same phase as reactants (e.g. H₂SO₄(aq) in esterification)",
              "Heterogeneous catalyst: different phase (e.g. Fe in Haber, Pt in catalytic converters)",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t8",
      n: 8,
      title: "Acids, Bases and Redox",
      sections: [
        {
          id: "acids-bases",
          title: "Acids & Bases",
          blocks: [
            { type: "bullets", items: [
              "Brønsted–Lowry: Acid = proton (H⁺) donor | Base = proton (H⁺) acceptor",
              "Strong acids (HCl, H₂SO₄, HNO₃): fully dissociate in water",
              "Weak acids (ethanoic acid): partially dissociate (equilibrium)",
            ]},
            { type: "formula", text: "Ka = [H⁺][A⁻] / [HA]\npH = −log[H⁺]\n[H⁺] = 10^(−pH)" },
            { type: "sub", text: "Titration Curves" },
            { type: "bullets", items: [
              "Strong/strong: sharp jump pH 4→10 at equivalence point",
              "Strong acid/weak base: equivalence pH < 7",
              "Weak acid/strong base: equivalence pH > 7",
              "Methyl orange (pKin = 4): good for strong acid/base",
              "Phenolphthalein (pKin = 9): good for weak acid/strong base",
            ]},
          ],
        },
        {
          id: "redox",
          title: "Redox Chemistry",
          blocks: [
            { type: "bullets", items: [
              "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)",
              "O: −2 (except peroxides: −1) | H: +1 (except metal hydrides: −1)",
              "Disproportionation: same element simultaneously oxidised and reduced",
            ]},
            { type: "formula", text: "Half-equation balance: atoms → O (add H₂O) → H (add H⁺) → charge (add e⁻)\ne.g. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O" },
            { type: "formula", text: "E°cell = E°cathode − E°anode = E°reduction(+) − E°reduction(−)" },
            { type: "bullets", items: [
              "More positive electrode = cathode (reduction occurs)",
              "More negative electrode = anode (oxidation occurs)",
            ]},
          ],
        },
      ],
    },
    {
      id: "chem-t9",
      n: 9,
      title: "Transition Metals & Group 2",
      sections: [
        {
          id: "group2",
          title: "Group 2 Reactions",
          blocks: [
            { type: "formula", text: "React with water: M + 2H₂O → M(OH)₂ + H₂  (reactivity increases down group)" },
            { type: "bullets", items: [
              "Hydroxides: solubility increases down group",
              "Sulfates: solubility DECREASES down group (BaSO₄ insoluble — used in barium meals)",
            ]},
            { type: "table", headers: ["Element", "Flame colour"], rows: [
              ["Li", "Red"],
              ["Na", "Yellow/orange"],
              ["K", "Lilac"],
              ["Ca", "Orange-red"],
              ["Ba", "Green"],
            ]},
          ],
        },
        {
          id: "transition-metals",
          title: "Transition Metals",
          blocks: [
            { type: "bullets", items: [
              "Variable oxidation states (e.g. Fe: +2, +3; Mn: +2, +4, +7; Cu: +1, +2)",
              "Form coloured ions (d-d transitions)",
              "Act as catalysts (variable OS allows electron transfer)",
              "Form complex ions (coordinate bonding with ligands)",
            ]},
            { type: "table", headers: ["Ion", "Colour"], rows: [
              ["Fe²⁺", "Pale green"],
              ["Fe³⁺", "Yellow/brown"],
              ["Cu²⁺", "Blue"],
              ["Cr³⁺", "Green"],
              ["Cr₂O₇²⁻", "Orange"],
              ["MnO₄⁻", "Purple"],
            ]},
            { type: "sub", text: "Complex Ions" },
            { type: "bullets", items: [
              "Ligand: molecule/ion donating lone pair to central metal ion",
              "Monodentate: 1 lone pair (H₂O, NH₃, Cl⁻, CN⁻)",
              "Bidentate: 2 lone pairs (1,2-diaminoethane, ethanedioate)",
              "Polydentate: many lone pairs (EDTA⁴⁻ = hexadentate)",
            ]},
          ],
        },
        {
          id: "practicals-chem",
          title: "Key Practicals & Equations",
          blocks: [
            { type: "sub", text: "Gas Tests" },
            { type: "table", headers: ["Gas", "Test"], rows: [
              ["O₂", "Relights glowing splint"],
              ["CO₂", "Turns limewater milky"],
              ["H₂", "Squeaky pop with lit splint"],
              ["NH₃", "Turns damp red litmus blue; pungent smell"],
              ["Cl₂", "Bleaches damp litmus paper; yellow-green gas"],
            ]},
            { type: "formula", text: "n = m/Mr    n = cV    n = V/24    PV = nRT\nq = mcΔT    ΔH = −q/n\n% yield = (actual/theoretical) × 100\nAtom economy = Mr(desired) / Mr(all products) × 100\npH = −log[H⁺]    E°cell = E°(+) − E°(−)" },
          ],
        },
      ],
    },
  ],
};