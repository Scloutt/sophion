export const IGCSE_CHEMISTRY_NOTES = {
  level: "igcse",
  subject: "chemistry",
  board: "edexcel",
  title: "IGCSE Chemistry — Pearson Edexcel",
  spec: "All Units Covered · Exam-Ready",
  subtitle: "Everything you need. Nothing you don't. Let's get the grade.",
  units: [
    {
      id: "chem-u1",
      n: 1,
      title: "Principles of Chemistry",
      sections: [
        {
          id: "states",
          title: "States of Matter",
          blocks: [
            { type: "bullets", items: [
              "Solid — particles packed tightly in fixed positions; vibrate only; incompressible; fixed shape and volume.",
              "Liquid — particles close together, free to flow; fixed volume, no fixed shape; slightly compressible.",
              "Gas — particles far apart, random rapid motion; fills any container; highly compressible.",
            ]},
            { type: "table", headers: ["Term", "Definition"], rows: [
              ["Diffusion", "Net movement of particles from high to low concentration. Faster in gases than in liquids."],
              ["Sublimation", "Direct change from solid to gas (e.g. iodine, dry ice)."],
            ]},
            { type: "tip", text: "State changes are physical — no new substance is formed. Boiling point depends on pressure." },
          ],
        },
        {
          id: "atomic-structure",
          title: "Atomic Structure",
          blocks: [
            { type: "table", headers: ["Particle", "Relative Mass", "Charge", "Location"], rows: [
              ["Proton", "1", "+1", "Nucleus"],
              ["Neutron", "1", "0", "Nucleus"],
              ["Electron", "1/1840", "−1", "Shells around nucleus"],
            ]},
            { type: "bullets", items: [
              "Atomic Number (Z) = Number of protons (defines the element)",
              "Mass Number (A) = Protons + Neutrons",
              "Isotopes = Same element, different number of neutrons → different mass numbers but SAME chemical properties.",
            ]},
            { type: "formula", text: "Relative Atomic Mass (Ar) = Σ (isotope mass × % abundance) ÷ 100" },
            { type: "tip", text: "Isotopes have the same chemical properties (same electron configuration) but different physical properties." },
          ],
        },
        {
          id: "electronic-config",
          title: "Electronic Configuration",
          blocks: [
            { type: "bullets", items: [
              "Shell 1 → max 2 electrons",
              "Shell 2 → max 8 electrons",
              "Shell 3 → max 8 electrons (at IGCSE level)",
            ]},
            { type: "example", text: "Na (Z=11) → 2, 8, 1\nCl (Z=17) → 2, 8, 7\nCa (Z=20) → 2, 8, 8, 2" },
            { type: "bullets", items: [
              "Group number = number of electrons in outer shell",
              "Period number = number of occupied shells",
            ]},
            { type: "tip", text: "Noble gases have FULL outer shells → very unreactive (stable electron configuration)." },
          ],
        },
        {
          id: "ionic-bonding",
          title: "Ionic Bonding",
          blocks: [
            { type: "p", text: "Formed between METALS and NON-METALS by electron transfer. Ions arrange in a GIANT IONIC LATTICE — strong electrostatic forces in all directions." },
            { type: "bullets", items: [
              "Metal LOSES electrons → positive ion (cation)",
              "Non-metal GAINS electrons → negative ion (anion)",
            ]},
            { type: "table", headers: ["Property", "Explanation"], rows: [
              ["High melting/boiling point", "Strong electrostatic forces"],
              ["Conducts when molten or dissolved", "Ions free to move, carry charge"],
              ["Does NOT conduct when solid", "Ions locked in lattice"],
              ["Soluble in water (mostly)", "Water surrounds and separates ions"],
            ]},
          ],
        },
        {
          id: "covalent-bonding",
          title: "Covalent Bonding",
          blocks: [
            { type: "p", text: "Formed between NON-METALS — sharing pairs of electrons." },
            { type: "bullets", items: [
              "Single bond = 1 shared pair",
              "Double bond = 2 shared pairs",
              "Triple bond = 3 shared pairs",
            ]},
            { type: "sub", text: "Simple Molecular (H₂O, CO₂, CH₄, HCl)" },
            { type: "bullets", items: [
              "Low m.p. / b.p. — weak intermolecular forces broken on melting/boiling",
              "Non-conductor — no free electrons or ions",
            ]},
            { type: "sub", text: "Giant Covalent (Diamond, Graphite, SiO₂)" },
            { type: "bullets", items: [
              "Diamond — each C bonded to 4 others; very hard; non-conductor",
              "Graphite — layers of hexagons; each C bonded to 3; delocalised electrons → good conductor; soft/slippery layers",
              "Silicon dioxide (SiO₂) — rigid lattice; very high melting point",
            ]},
            { type: "warn", text: "Diamond does NOT conduct. Graphite DOES conduct. Know the structural reason for EACH property." },
          ],
        },
        {
          id: "metallic-bonding",
          title: "Metallic Bonding",
          blocks: [
            { type: "bullets", items: [
              "Metal cations surrounded by a sea of delocalised electrons.",
              "High conductivity (heat & electricity) → mobile electrons.",
              "Malleable and ductile → layers of ions can slide over each other.",
              "High melting/boiling points → strong electrostatic attraction.",
            ]},
          ],
        },
        {
          id: "formulae-equations",
          title: "Chemical Formulae & Equations",
          blocks: [
            { type: "bullets", items: [
              "Balance equations by changing COEFFICIENTS only — never alter formulae.",
              "State symbols: (s) solid | (l) liquid | (g) gas | (aq) aqueous",
            ]},
            { type: "formula", text: "Moles from mass:  n = mass (g) ÷ Mr" },
            { type: "formula", text: "Concentration:    c = n ÷ V    (V in dm³)" },
            { type: "p", text: "Relative formula mass (Mr) = sum of all Ar values in the formula. Mole = 6.02 × 10²³ particles (Avogadro's constant)." },
            { type: "tip", text: "Always include state symbols in balanced equations." },
          ],
        },
      ],
    },
    {
      id: "chem-u2",
      n: 2,
      title: "Inorganic Chemistry",
      sections: [
        {
          id: "periodic-table",
          title: "The Periodic Table",
          blocks: [
            { type: "bullets", items: [
              "Elements arranged in order of increasing atomic number.",
              "Vertical columns = GROUPS (same outer electrons → similar chemistry).",
              "Horizontal rows = PERIODS (same number of occupied shells).",
              "Metals (left/centre) | Non-metals (right) | Metalloids (staircase boundary).",
            ]},
            { type: "tip", text: "Transition metals form coloured compounds and have variable oxidation states — unlike Group 1 metals." },
          ],
        },
        {
          id: "group1",
          title: "Group 1 — Alkali Metals",
          blocks: [
            { type: "bullets", items: [
              "Elements: Li, Na, K, Rb, Cs, Fr",
              "1 outer electron → lost to form M⁺ ions.",
              "Reactivity INCREASES down the group (outer electron further from nucleus → easier to lose).",
              "Soft metals; stored in oil to prevent reaction with air/water.",
            ]},
            { type: "example", text: "2Na + 2H₂O → 2NaOH + H₂  (fizzes; floats; may melt into ball)\nK reacts more vigorously — lilac flame; may ignite H₂." },
            { type: "warn", text: "Going DOWN Group 1 → more reactive, lower melting point, lower density. The pattern is the opposite of what many expect." },
          ],
        },
        {
          id: "group7",
          title: "Group 7 — Halogens",
          blocks: [
            { type: "bullets", items: [
              "Elements: F, Cl, Br, I, At",
              "7 outer electrons → gain 1 electron to form X⁻ ions.",
              "Reactivity DECREASES down the group.",
              "Exist as diatomic molecules (F₂, Cl₂, Br₂, I₂).",
            ]},
            { type: "table", headers: ["Halogen", "Appearance"], rows: [
              ["F₂", "Pale yellow gas"],
              ["Cl₂", "Yellow-green gas"],
              ["Br₂", "Orange-brown liquid"],
              ["I₂", "Grey-black solid (violet gas)"],
            ]},
            { type: "example", text: "Cl₂ + 2KBr → 2KCl + Br₂   (chlorine displaces bromine — more reactive displaces less)" },
          ],
        },
        {
          id: "acids-bases",
          title: "Acids, Bases & Neutralisation",
          blocks: [
            { type: "bullets", items: [
              "Acid — produces H⁺ (aq) ions. pH < 7.",
              "Base — neutralises an acid (metal oxides, hydroxides, carbonates).",
              "Alkali — soluble base; produces OH⁻ (aq) ions. pH > 7.",
              "Neutralisation — H⁺ + OH⁻ → H₂O",
            ]},
            { type: "formula", text: "Acid + Metal Hydroxide  →  Salt + Water" },
            { type: "formula", text: "Acid + Metal Carbonate  →  Salt + Water + Carbon dioxide" },
            { type: "formula", text: "Acid + Metal            →  Salt + Hydrogen" },
            { type: "tip", text: "pH 0–6 = acidic | pH 7 = neutral | pH 8–14 = alkaline. Use universal indicator or a calibrated pH probe/meter." },
          ],
        },
        {
          id: "reactivity-series",
          title: "Metals — Reactivity Series",
          blocks: [
            { type: "bullets", items: [
              "Most reactive: Potassium (K), Sodium (Na), Calcium (Ca), Magnesium (Mg), Aluminium (Al)",
              "Carbon (C) — extraction boundary",
              "Zinc (Zn), Iron (Fe), Lead (Pb)",
              "Hydrogen (H) — acid reaction boundary",
              "Copper (Cu), Silver (Ag), Gold (Au) — least reactive",
            ]},
            { type: "bullets", items: [
              "More reactive metals DISPLACE less reactive ones from solution.",
              "Metals ABOVE hydrogen react with dilute acids → hydrogen gas produced.",
            ]},
            { type: "tip", text: "Mnemonic: 'Please Stop Calling Me A Lazy Zero-Fun Inactive Chemical Skeleton Gold' (K, Na, Ca, Mg, Al, C, Zn, Fe, Pb, H, Cu, Ag, Au)" },
          ],
        },
        {
          id: "extraction",
          title: "Extraction of Metals",
          blocks: [
            { type: "bullets", items: [
              "Metals above carbon → ELECTROLYSIS required (Al, Na, K, Ca).",
              "Metals below carbon → REDUCTION with carbon/coke (Fe, Zn, Pb).",
              "Metals below hydrogen → found native or easily reduced (Cu, Ag, Au).",
            ]},
            { type: "sub", text: "Iron — Blast Furnace" },
            { type: "formula", text: "Fe₂O₃ + 3CO → 2Fe + 3CO₂   (iron oxide reduced by carbon monoxide)" },
            { type: "sub", text: "Aluminium — Hall-Héroult Process" },
            { type: "bullets", items: [
              "Electrolysis of molten Al₂O₃ dissolved in cryolite.",
              "At cathode: Al³⁺ + 3e⁻ → Al",
              "At anode: 2O²⁻ → O₂ + 4e⁻  (carbon anodes oxidised/replaced regularly)",
            ]},
            { type: "warn", text: "Al₂O₃ cannot be reduced by carbon economically. That is why electrolysis is used for aluminium." },
          ],
        },
      ],
    },
    {
      id: "chem-u3",
      n: 3,
      title: "Physical Chemistry",
      sections: [
        {
          id: "energetics",
          title: "Energetics — Exothermic & Endothermic",
          blocks: [
            { type: "bullets", items: [
              "Exothermic — energy RELEASED to surroundings; temperature RISES; ΔH < 0. Examples: combustion, neutralisation, respiration, rusting.",
              "Endothermic — energy ABSORBED from surroundings; temperature FALLS; ΔH > 0. Examples: thermal decomposition, photosynthesis, dissolving NH₄NO₃.",
            ]},
            { type: "bullets", items: [
              "Bond Breaking → ENDOTHERMIC (energy in to break bonds)",
              "Bond Forming  → EXOTHERMIC (energy out when bonds form)",
            ]},
            { type: "formula", text: "ΔH = Σ (bond energies broken) − Σ (bond energies formed)\nIf ΔH > 0 → endothermic     If ΔH < 0 → exothermic" },
            { type: "tip", text: "On energy profile diagrams, label: reactants, products, Ea, ΔH, and the transition state at the peak." },
          ],
        },
        {
          id: "rates",
          title: "Rates of Reaction",
          blocks: [
            { type: "formula", text: "Rate = change in amount of reactant (or product) ÷ time\nUnits: mol/dm³/s  or  cm³/s  or  g/s" },
            { type: "table", headers: ["Factor", "Reason (collision theory)"], rows: [
              ["Higher temperature", "Particles move faster → more frequent + energetic collisions → greater proportion exceed Ea"],
              ["Higher concentration", "More particles per unit volume → more collisions"],
              ["Larger surface area", "More particles exposed → more collisions per second"],
              ["Catalyst", "Provides lower Ea pathway → more successful hits"],
              ["Higher pressure (gases only)", "Particles closer → more collisions"],
            ]},
            { type: "tip", text: "Catalysts provide an alternative reaction pathway with LOWER activation energy. Not consumed in the reaction." },
          ],
        },
        {
          id: "equilibrium",
          title: "Reversible Reactions & Equilibrium",
          blocks: [
            { type: "p", text: "Dynamic equilibrium: forward and reverse reaction rates are equal; concentrations of all species remain constant. Can only be established in a CLOSED system." },
            { type: "sub", text: "Le Chatelier's Principle" },
            { type: "p", text: "\"If a system at equilibrium is disturbed, it shifts to OPPOSE that change.\"" },
            { type: "table", headers: ["Disturbance", "Equilibrium Response"], rows: [
              ["Increase [reactant]", "Shifts RIGHT → more products"],
              ["Increase temperature", "Shifts toward ENDOTHERMIC direction"],
              ["Increase pressure (gases)", "Shifts toward FEWER moles of gas"],
              ["Add catalyst", "Position UNCHANGED; reached faster"],
            ]},
            { type: "example", text: "Haber Process: N₂ + 3H₂ ⇌ 2NH₃  (ΔH = −92 kJ/mol)\nConditions: ~450°C, ~200 atm, iron catalyst — compromise for rate + yield." },
          ],
        },
        {
          id: "electrolysis",
          title: "Electrolysis",
          blocks: [
            { type: "bullets", items: [
              "Electrolysis — decomposition of ionic compound by electric current (molten or aqueous).",
              "Cathode (−) — cations reduced here (GAIN electrons).",
              "Anode (+) — anions oxidised here (LOSE electrons).",
            ]},
            { type: "tip", text: "OIL RIG: Oxidation Is Loss (electrons), Reduction Is Gain (electrons)" },
            { type: "sub", text: "Electrolysis of Brine (NaCl(aq))" },
            { type: "bullets", items: [
              "Cathode: 2H⁺ + 2e⁻ → H₂ (hydrogen gas)",
              "Anode: 2Cl⁻ − 2e⁻ → Cl₂ (chlorine gas)",
              "Remaining solution → NaOH (sodium hydroxide)",
              "Products: H₂ (fuel), Cl₂ (bleach/PVC), NaOH (soap/paper)",
            ]},
            { type: "formula", text: "Charge: Q = I × t    (coulombs = amperes × seconds)" },
          ],
        },
      ],
    },
    {
      id: "chem-u4",
      n: 4,
      title: "Organic Chemistry",
      sections: [
        {
          id: "alkanes",
          title: "Alkanes (Saturated Hydrocarbons)",
          blocks: [
            { type: "formula", text: "General formula: CₙH₂ₙ₊₂    All SINGLE C–C bonds (saturated)." },
            { type: "table", headers: ["Formula", "Name"], rows: [
              ["CH₄", "Methane"],
              ["C₂H₆", "Ethane"],
              ["C₃H₈", "Propane"],
              ["C₄H₁₀", "Butane"],
            ]},
            { type: "bullets", items: [
              "Complete combustion: CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O  (blue flame)",
              "Incomplete combustion: → CO and/or C (soot) + H₂O (yellow, smoky)",
              "Substitution (UV light): CH₄ + Cl₂ → CH₃Cl + HCl",
            ]},
            { type: "warn", text: "Alkanes do NOT decolourise bromine water — they are SATURATED. Only alkenes do this (addition reaction)." },
          ],
        },
        {
          id: "alkenes",
          title: "Alkenes (Unsaturated Hydrocarbons)",
          blocks: [
            { type: "formula", text: "General formula: CₙH₂ₙ    Contains a C=C DOUBLE BOND (unsaturated)." },
            { type: "bullets", items: [
              "Addition of H₂ (hydrogenation): alkene + H₂ → alkane  (Ni catalyst, ~150°C)",
              "Addition of Br₂ (bromination): alkene + Br₂ → dibromoalkane → DECOLOURISES ORANGE BROMINE WATER → positive test for C=C",
              "Addition of H₂O (hydration): alkene + H₂O → alcohol  (H₃PO₄ catalyst, ~300°C, ~60 atm)",
              "Addition polymerisation: n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ",
            ]},
            { type: "tip", text: "Bromine water test: alkene → colourless instantly. Alkane → no change (stays orange)." },
          ],
        },
        {
          id: "crude-oil",
          title: "Crude Oil & Fractional Distillation",
          blocks: [
            { type: "table", headers: ["Fraction", "Approx. b.p.", "Main uses"], rows: [
              ["Refinery gases", "< 25°C", "Cooking, heating (LPG)"],
              ["Petrol (gasoline)", "25–60°C", "Car fuel"],
              ["Naphtha", "60–180°C", "Chemical feedstock"],
              ["Kerosene", "180–250°C", "Jet fuel, heating"],
              ["Diesel", "250–350°C", "Lorries, buses"],
              ["Fuel oil", "350–400°C", "Ships, power stations"],
              ["Bitumen (residue)", "> 400°C", "Road surfacing, roofing"],
            ]},
            { type: "sub", text: "Cracking" },
            { type: "bullets", items: [
              "Large alkane molecules → smaller, more useful alkanes + alkenes.",
              "Thermal cracking: high temperature (400–900°C), high pressure.",
              "Catalytic cracking: zeolite catalyst, ~500°C, lower pressure.",
              "Purpose: increases supply of petrol and provides alkene monomers.",
            ]},
          ],
        },
        {
          id: "alcohols",
          title: "Alcohols",
          blocks: [
            { type: "formula", text: "Functional group: –OH\nGeneral formula: CₙH₂ₙ₊₁OH" },
            { type: "sub", text: "Making Ethanol" },
            { type: "bullets", items: [
              "Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂  (25–37°C, anaerobic, yeast)",
              "Hydration of ethene: CH₂=CH₂ + H₂O → C₂H₅OH  (H₃PO₄ catalyst)",
            ]},
            { type: "bullets", items: [
              "Combustion: alcohol + O₂ → CO₂ + H₂O  (clean fuel)",
              "Oxidation → carboxylic acid  (using acidified K₂Cr₂O₇ — orange → green)",
              "Dehydration → alkene + H₂O   (Al₂O₃ catalyst, 300°C)",
            ]},
          ],
        },
        {
          id: "carboxylic-acids",
          title: "Carboxylic Acids",
          blocks: [
            { type: "formula", text: "Functional group: –COOH   (weak acids — only partially dissociate)" },
            { type: "table", headers: ["Acid", "Formula", "Source"], rows: [
              ["Methanoic acid", "HCOOH", "Stinging nettles/ant venom"],
              ["Ethanoic acid", "CH₃COOH", "In vinegar"],
              ["Propanoic acid", "C₂H₅COOH", "—"],
            ]},
            { type: "bullets", items: [
              "+ alcohol → ester + water  (esterification; conc. H₂SO₄ catalyst)",
              "+ carbonate → salt + CO₂ + H₂O",
              "+ metal hydroxide → salt + water",
            ]},
            { type: "tip", text: "Esters have pleasant, sweet/fruity odours — used in flavourings and perfumes. Ethyl ethanoate (CH₃COOC₂H₅) is the ester from ethanoic acid + ethanol." },
          ],
        },
        {
          id: "polymers",
          title: "Polymers",
          blocks: [
            { type: "sub", text: "Addition Polymers (from alkenes)" },
            { type: "bullets", items: [
              "Double bond opens → monomers join end-to-end.",
              "No atoms lost; no by-products.",
              "Examples: poly(ethene), poly(propene), PVC, PTFE.",
            ]},
            { type: "sub", text: "Condensation Polymers" },
            { type: "bullets", items: [
              "Two different functional groups react; small molecule (H₂O or HCl) lost.",
              "Polyester (e.g., Terylene/PET): diol + dicarboxylic acid → ester links (–COO–) + H₂O",
              "Polyamide (e.g., Nylon-6,6): diamine + diacid → amide links (–CONH–) + H₂O",
            ]},
            { type: "warn", text: "Addition polymers are NOT biodegradable. Condensation polymers may be hydrolysed back to monomers — more environmentally manageable." },
          ],
        },
      ],
    },
    {
      id: "chem-u5",
      n: 5,
      title: "Required Practicals & Key Equations",
      sections: [
        {
          id: "practicals",
          title: "Required Practicals Summary",
          blocks: [
            { type: "table", headers: ["Practical", "Key Points"], rows: [
              ["Chromatography", "Rf = distance by spot ÷ distance by solvent. Each spot = one pure substance."],
              ["Titration", "Exact volume for neutralisation; use indicator (phenolphthalein or methyl orange)"],
              ["Preparation of a salt", "Add excess insoluble base to acid; filter; evaporate to crystallise"],
              ["Electrolysis", "CuSO₄ with Cu electrodes → Cu deposited at cathode; Cu lost from anode"],
              ["Rates experiment", "Marble chips + HCl: measure mass loss / gas volume over time; steeper graph = faster rate"],
              ["Disappearing X test", "Na₂S₂O₃ + HCl → sulfur precipitate; time how long cross disappears"],
            ]},
          ],
        },
        {
          id: "gas-tests",
          title: "Testing for Gases",
          blocks: [
            { type: "table", headers: ["Gas", "Test"], rows: [
              ["H₂ (Hydrogen)", "Squeaky pop with a burning/lit splint"],
              ["O₂ (Oxygen)", "Relights a glowing splint"],
              ["CO₂ (Carbon dioxide)", "Turns limewater milky/cloudy"],
              ["Cl₂ (Chlorine)", "Bleaches damp blue or red litmus paper"],
              ["NH₃ (Ammonia)", "Turns damp red litmus paper BLUE (alkaline gas)"],
            ]},
          ],
        },
        {
          id: "flame-tests",
          title: "Flame Tests",
          blocks: [
            { type: "table", headers: ["Ion", "Flame Colour"], rows: [
              ["Li⁺", "Crimson/red"],
              ["Na⁺", "Yellow/orange"],
              ["K⁺", "Lilac/violet"],
              ["Ca²⁺", "Brick red"],
              ["Ba²⁺", "Green"],
              ["Cu²⁺", "Blue-green"],
            ]},
            { type: "warn", text: "Na⁺ is yellow and easily overpowers other colours — note contamination." },
          ],
        },
        {
          id: "ion-tests",
          title: "Ion Tests (Precipitate Reactions)",
          blocks: [
            { type: "table", headers: ["Ion", "Test & Observation"], rows: [
              ["CO₃²⁻", "Add dilute acid → CO₂ (limewater goes milky)"],
              ["SO₄²⁻", "Add dil. HCl + BaCl₂ → white ppt of BaSO₄"],
              ["Cl⁻", "Add dil. HNO₃ + AgNO₃ → white ppt AgCl"],
              ["Br⁻", "Add dil. HNO₃ + AgNO₃ → cream ppt AgBr"],
              ["I⁻", "Add dil. HNO₃ + AgNO₃ → yellow ppt AgI"],
              ["NH₄⁺", "Add NaOH, warm → NH₃ (pungent; blue litmus)"],
              ["Fe²⁺", "Add NaOH → green precipitate"],
              ["Fe³⁺", "Add NaOH → brown/red precipitate"],
              ["Cu²⁺", "Add NaOH → blue precipitate"],
              ["Al³⁺", "Add NaOH → white ppt, dissolves in EXCESS NaOH"],
              ["Ca²⁺", "Add NaOH → white ppt, does NOT dissolve in excess"],
            ]},
          ],
        },
        {
          id: "equations-sheet",
          title: "Core Equation Sheet",
          blocks: [
            { type: "formula", text: "Moles from mass:      n = m ÷ Mr" },
            { type: "formula", text: "Concentration:        c = n ÷ V   (V in dm³)" },
            { type: "formula", text: "Percentage yield:     = (actual yield ÷ theoretical) × 100" },
            { type: "formula", text: "Atom economy:         = (Mr desired product ÷ ΣMr products) × 100" },
            { type: "formula", text: "Rate:                 = Δquantity ÷ Δtime" },
            { type: "formula", text: "Charge:               Q = I × t  (C = A × s)" },
            { type: "formula", text: "Energy (calorimetry): q = m × c × ΔT  (c = 4.18 J/g/°C)" },
          ],
        },
      ],
    },
  ],
};