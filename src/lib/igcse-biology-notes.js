export const IGCSE_BIOLOGY_NOTES = {
  level: "igcse",
  subject: "biology",
  board: "edexcel",
  title: "IGCSE Biology — Pearson Edexcel",
  spec: "All Units Covered · Exam-Ready",
  subtitle: "Concise, exam-ready notes covering every unit. The cells are with you.",
  units: [
    {
      id: "bio-u1",
      n: 1,
      title: "The Nature and Variety of Living Organisms",
      sections: [
        {
          id: "characteristics",
          title: "Characteristics of Living Organisms",
          blocks: [
            { type: "tip", text: "MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition" },
            { type: "sub", text: "Classification Hierarchy" },
            { type: "tip", text: "King Philip Came Over For Good Soup: Kingdom → Phylum → Class → Order → Family → Genus → Species" },
          ],
        },
        {
          id: "five-kingdoms",
          title: "The Five Kingdoms",
          blocks: [
            { type: "table", headers: ["Kingdom", "Key Features"], rows: [
              ["Prokaryotae (bacteria)", "No nucleus, no membrane-bound organelles, circular DNA"],
              ["Protoctista", "Single-celled eukaryotes (e.g. Amoeba, Euglena)"],
              ["Fungi", "Eukaryotic, cell wall of chitin, feed by extracellular digestion (saprotrophic)"],
              ["Plantae", "Eukaryotic, cellulose cell walls, photosynthesis, mostly multicellular"],
              ["Animalia", "Eukaryotic, no cell wall, heterotrophic, multicellular"],
            ]},
            { type: "sub", text: "Viruses — NOT a Kingdom" },
            { type: "bullets", items: [
              "Not living (no cells, no metabolism, no homeostasis).",
              "Structure: DNA or RNA core + protein coat (capsid).",
              "Reproduce only inside host cells.",
            ]},
          ],
        },
        {
          id: "cell-types",
          title: "Eukaryotic vs Prokaryotic Cells",
          blocks: [
            { type: "bullets", items: [
              "Eukaryotic: nucleus, membrane-bound organelles, larger (10–100 µm).",
              "Prokaryotic: no nucleus (naked circular DNA), smaller (1–10 µm), no mitochondria.",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u2",
      n: 2,
      title: "Cells and Cell Processes",
      sections: [
        {
          id: "organelles",
          title: "Cell Organelles",
          blocks: [
            { type: "sub", text: "Animal Cell Organelles" },
            { type: "bullets", items: [
              "Cell membrane: controls what enters/exits.",
              "Nucleus: contains DNA; controls cell activities.",
              "Cytoplasm: site of many metabolic reactions.",
              "Mitochondria: site of aerobic respiration (ATP production).",
              "Ribosomes: site of protein synthesis.",
            ]},
            { type: "sub", text: "Plant Cell — Extra Organelles" },
            { type: "bullets", items: [
              "Cell wall (cellulose): structural support, fully permeable.",
              "Vacuole (large, central): maintains turgor pressure, stores cell sap.",
              "Chloroplasts: site of photosynthesis; contain chlorophyll.",
            ]},
          ],
        },
        {
          id: "transport",
          title: "Movement In and Out of Cells",
          blocks: [
            { type: "bullets", items: [
              "Diffusion: passive movement of particles from high → low concentration. Factors: concentration gradient, surface area, temperature, distance.",
              "Osmosis: movement of WATER only, through a selectively permeable membrane, from high water potential (dilute) → low water potential (concentrated).",
              "Active Transport: movement against concentration gradient, requires ATP (energy), carrier proteins involved.",
            ]},
            { type: "bullets", items: [
              "Turgor: plant cell full of water → rigid; helps support non-woody plants.",
              "Plasmolysis: plant cell loses water → membrane pulls away from cell wall.",
              "Crenation: animal cell loses water → shrivels.",
              "Lysis: animal cell gains too much water → bursts.",
            ]},
          ],
        },
        {
          id: "enzymes",
          title: "Enzymes",
          blocks: [
            { type: "p", text: "Biological catalysts — speed up reactions without being used up. Made of protein; specific to one substrate (lock and key model). Active site: unique shape that fits one substrate." },
            { type: "table", headers: ["Factor", "Effect on Enzyme Activity"], rows: [
              ["Temperature", "Increases rate up to optimum; above optimum → enzyme denatures (active site changes shape permanently)"],
              ["pH", "Each enzyme has an optimum pH; extreme pH → denaturation"],
              ["Substrate concentration", "Increases rate up to a maximum (enzymes saturated)"],
            ]},
          ],
        },
        {
          id: "cell-division",
          title: "Cell Division",
          blocks: [
            { type: "bullets", items: [
              "Mitosis: produces 2 genetically identical daughter cells (growth, repair).",
              "Meiosis: produces 4 genetically different cells, each with HALF the chromosome number (gamete production — sex cells).",
              "Chromosome number: humans = 46 (23 pairs); gametes = 23 (haploid).",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u3",
      n: 3,
      title: "Biological Molecules",
      sections: [
        {
          id: "carbohydrates",
          title: "Carbohydrates",
          blocks: [
            { type: "bullets", items: [
              "Sugars (glucose, fructose): monosaccharides — made of C, H, O.",
              "Starch: polysaccharide — energy store in plants.",
              "Glycogen: polysaccharide — energy store in animals (liver, muscle).",
              "Cellulose: polysaccharide — structural; makes plant cell walls.",
            ]},
            { type: "bullets", items: [
              "Test: iodine solution turns blue-black in presence of starch.",
              "Test: Benedict's reagent turns brick-red with reducing sugars (e.g. glucose).",
            ]},
          ],
        },
        {
          id: "proteins",
          title: "Proteins",
          blocks: [
            { type: "p", text: "Made of amino acids linked by peptide bonds. Functions: enzymes, antibodies, hormones (e.g. insulin), structural (e.g. collagen)." },
            { type: "tip", text: "Test: Biuret reagent turns purple/violet in presence of protein." },
          ],
        },
        {
          id: "lipids-dna",
          title: "Lipids & DNA",
          blocks: [
            { type: "p", text: "Lipids: made of glycerol + 3 fatty acids (triglycerides). Functions: energy storage, insulation, cell membranes, hormones. Test: ethanol emulsion test → milky-white emulsion." },
            { type: "p", text: "DNA: double helix; made of nucleotides (sugar + phosphate + base). Bases: Adenine–Thymine, Cytosine–Guanine (complementary base pairing)." },
            { type: "bullets", items: [
              "Gene: a sequence of DNA bases that codes for a specific protein.",
              "Chromosomes: long strands of DNA wound around proteins (histones).",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u4",
      n: 4,
      title: "Nutrition & Digestion",
      sections: [
        {
          id: "photosynthesis",
          title: "Photosynthesis",
          blocks: [
            { type: "formula", text: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂" },
            { type: "p", text: "Takes place in chloroplasts (chlorophyll absorbs light). Limiting factors: light intensity, CO₂ concentration, temperature." },
            { type: "bullets", items: [
              "Uses of glucose in plants: respiration (energy), cellulose (cell walls), starch (storage), sucrose (transport), proteins (with nitrates), fats & oils.",
            ]},
          ],
        },
        {
          id: "digestion",
          title: "Human Digestive System",
          blocks: [
            { type: "bullets", items: [
              "Mouth: mechanical digestion (teeth); amylase (saliva) breaks starch.",
              "Stomach: HCl (kills bacteria, pH for pepsin); pepsin breaks proteins.",
              "Small intestine — Duodenum: bile (from liver) emulsifies fats; pancreatic enzymes.",
              "Ileum: villi absorb digested food.",
              "Large intestine: reabsorbs water; compacts waste.",
            ]},
            { type: "table", headers: ["Enzyme", "Substrate → Product", "Location"], rows: [
              ["Amylase", "Starch → Maltose", "Mouth, pancreas"],
              ["Protease (pepsin/trypsin)", "Proteins → Amino acids", "Stomach, pancreas"],
              ["Lipase", "Fats → Fatty acids + Glycerol", "Pancreas, small intestine"],
              ["Maltase", "Maltose → Glucose", "Small intestine"],
            ]},
          ],
        },
        {
          id: "villi",
          title: "Villi & Nutrient Absorption",
          blocks: [
            { type: "p", text: "Villi increase surface area for absorption. Features: single cell layer (thin = short diffusion distance), rich blood supply (capillaries), lacteals (absorb fats → lymph)." },
            { type: "table", headers: ["Nutrient", "Function"], rows: [
              ["Carbohydrates", "Energy source"],
              ["Proteins", "Growth and repair"],
              ["Fats", "Energy, insulation, cell membranes"],
              ["Vitamin C", "Prevents scurvy"],
              ["Vitamin D", "Bones and teeth"],
              ["Iron", "Haemoglobin"],
              ["Calcium", "Bones and teeth"],
              ["Fibre", "Prevents constipation; aids gut movement"],
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u5",
      n: 5,
      title: "Gas Exchange & Respiration",
      sections: [
        {
          id: "gas-exchange",
          title: "Gas Exchange in Humans",
          blocks: [
            { type: "p", text: "Lungs → alveoli → capillaries. Adaptations of alveoli: large surface area, thin walls (one cell thick), moist, rich blood supply." },
            { type: "bullets", items: [
              "Breathing in: diaphragm contracts + flattens; intercostal muscles raise ribs → volume increases → pressure decreases → air enters.",
              "Breathing out: diaphragm relaxes + domes; ribs fall → pressure increases.",
            ]},
          ],
        },
        {
          id: "respiration",
          title: "Aerobic & Anaerobic Respiration",
          blocks: [
            { type: "formula", text: "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O  (+ATP)\nTakes place in mitochondria. Maximum ATP per glucose." },
            { type: "sub", text: "Anaerobic Respiration" },
            { type: "bullets", items: [
              "In animals (muscles): Glucose → Lactic acid (+ small amount of ATP)",
              "In yeast (and plants): Glucose → Ethanol + Carbon dioxide (+ small amount of ATP)",
              "No oxygen needed; much less efficient than aerobic.",
              "Oxygen debt: extra oxygen needed after exercise to break down lactic acid.",
            ]},
          ],
        },
        {
          id: "transpiration",
          title: "Gas Exchange in Plants & Transpiration",
          blocks: [
            { type: "p", text: "Stomata (pores on underside of leaves): CO₂ in, O₂ and water vapour out. Guard cells control opening and closing." },
            { type: "bullets", items: [
              "Transpiration: loss of water vapour from leaves.",
              "Factors increasing transpiration: higher temperature, lower humidity, higher wind speed, higher light intensity.",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u6",
      n: 6,
      title: "Transport in Plants & Animals",
      sections: [
        {
          id: "circulatory",
          title: "Human Circulatory System",
          blocks: [
            { type: "p", text: "Double circulation: pulmonary (heart ↔ lungs) + systemic (heart ↔ body). Heart: 4 chambers — right atrium, right ventricle, left atrium, left ventricle. Left side: oxygenated blood → body (higher pressure — thicker walls)." },
            { type: "table", headers: ["Vessel", "Key Features"], rows: [
              ["Arteries", "Thick muscular walls, narrow lumen, carry blood AWAY from heart, high pressure, pulse"],
              ["Veins", "Thin walls, wide lumen, carry blood TO heart, low pressure, valves"],
              ["Capillaries", "One cell thick; site of exchange with tissues"],
            ]},
          ],
        },
        {
          id: "blood",
          title: "Blood Components",
          blocks: [
            { type: "bullets", items: [
              "Red blood cells: haemoglobin carries O₂; no nucleus; biconcave disc shape.",
              "White blood cells: phagocytes (engulf pathogens); lymphocytes (antibodies).",
              "Platelets: cell fragments; clotting.",
              "Plasma: liquid; transports CO₂, glucose, urea, hormones, plasma proteins.",
            ]},
          ],
        },
        {
          id: "plant-transport",
          title: "Transport in Plants",
          blocks: [
            { type: "bullets", items: [
              "Xylem: carries water + mineral ions (UP from roots); dead cells, lignin walls.",
              "Phloem: carries dissolved sugars (sucrose) up AND down; living cells.",
              "Transpiration stream: water lost from leaves → pulls water up xylem (cohesion).",
              "Root hair cells: large surface area; absorb water (osmosis) and minerals (active transport).",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u7",
      n: 7,
      title: "Coordination & Response",
      sections: [
        {
          id: "nervous-system",
          title: "The Nervous System",
          blocks: [
            { type: "bullets", items: [
              "CNS: brain + spinal cord. PNS: all other nerves.",
              "Neurones: sensory (receptor → CNS), motor (CNS → effector), relay (within CNS).",
              "Reflex arc: receptor → sensory neurone → relay neurone → motor neurone → effector",
              "Reflex actions: fast, automatic, protective (e.g. pulling hand from heat).",
            ]},
            { type: "p", text: "Synapses: gap between neurones; signal crosses via neurotransmitters (chemicals). One-directional (neurotransmitters released from one side only)." },
          ],
        },
        {
          id: "the-eye",
          title: "The Eye & Accommodation",
          blocks: [
            { type: "bullets", items: [
              "Cornea: refracts light (most refraction).",
              "Iris: controls pupil size → controls light entry.",
              "Lens: fine-focuses image (accommodation).",
              "Retina: contains rods (low light) and cones (colour; bright light).",
              "Optic nerve: carries impulses to brain.",
            ]},
            { type: "p", text: "Accommodation (near object): ciliary muscles contract → suspensory ligaments slacken → lens becomes MORE curved (fat) → greater refraction." },
          ],
        },
        {
          id: "hormones",
          title: "Hormones & Homeostasis",
          blocks: [
            { type: "table", headers: ["Hormone", "Gland", "Function"], rows: [
              ["Insulin", "Pancreas", "Lowers blood glucose; promotes glycogen storage"],
              ["Glucagon", "Pancreas", "Raises blood glucose; promotes glycogen breakdown"],
              ["Adrenaline", "Adrenal glands", "Fight or flight; raises heart rate, blood glucose"],
              ["Oestrogen", "Ovaries", "Female sex characteristics; menstrual cycle"],
              ["Testosterone", "Testes", "Male sex characteristics; sperm production"],
              ["ADH", "Pituitary", "Controls water reabsorption in kidneys"],
            ]},
            { type: "sub", text: "Temperature Regulation" },
            { type: "bullets", items: [
              "Too hot: sweat, vasodilation (more blood to skin), hair lies flat.",
              "Too cold: shiver, vasoconstriction (less blood to skin), hair stands up.",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-u8",
      n: 8,
      title: "Reproduction & Inheritance",
      sections: [
        {
          id: "genetics",
          title: "Genetics Key Terms",
          blocks: [
            { type: "table", headers: ["Term", "Definition"], rows: [
              ["Gene", "Section of DNA coding for a characteristic"],
              ["Allele", "Different versions of a gene"],
              ["Dominant", "Allele expressed even in one copy (capital letter)"],
              ["Recessive", "Allele expressed only in two copies (lowercase letter)"],
              ["Genotype", "Alleles an organism has (e.g. Bb, BB, bb)"],
              ["Phenotype", "Observable characteristic"],
              ["Homozygous", "Two identical alleles (BB or bb)"],
              ["Heterozygous", "Two different alleles (Bb)"],
              ["Codominance", "Both alleles expressed equally (e.g. blood groups IA and IB)"],
            ]},
          ],
        },
        {
          id: "inheritance",
          title: "Inheritance Patterns",
          blocks: [
            { type: "p", text: "Monohybrid cross: one gene/trait. Use Punnett squares to predict offspring ratios." },
            { type: "bullets", items: [
              "Bb × Bb → 3 dominant : 1 recessive phenotype ratio",
              "Bb × bb → 1 dominant : 1 recessive",
              "Sex determination: XX = female, XY = male. 50% chance of each sex per pregnancy.",
            ]},
          ],
        },
        {
          id: "mutations",
          title: "Mutations",
          blocks: [
            { type: "p", text: "Random change in DNA sequence. Can be caused by: UV radiation, X-rays, certain chemicals (mutagens). Most are harmful; some neutral; rarely beneficial." },
            { type: "example", text: "Sickle cell anaemia: point mutation in haemoglobin gene → abnormal RBCs." },
          ],
        },
      ],
    },
    {
      id: "bio-u9",
      n: 9,
      title: "Ecology & the Environment",
      sections: [
        {
          id: "ecology-terms",
          title: "Ecological Terms & Food Webs",
          blocks: [
            { type: "table", headers: ["Term", "Definition"], rows: [
              ["Population", "All organisms of one species in an area"],
              ["Community", "All populations in an area"],
              ["Ecosystem", "Community + its abiotic (non-living) environment"],
              ["Habitat", "Place where an organism lives"],
              ["Niche", "The role of an organism in its ecosystem"],
            ]},
            { type: "p", text: "Energy flows along chains; matter cycles. Each trophic level loses ~90% of energy (heat, movement, waste). Pyramids of biomass always pyramid-shaped." },
          ],
        },
        {
          id: "cycles",
          title: "Carbon & Nitrogen Cycles",
          blocks: [
            { type: "sub", text: "Carbon Cycle" },
            { type: "bullets", items: [
              "CO₂ in atmosphere → photosynthesis → organic compounds in plants.",
              "Respiration → CO₂ released.",
              "Decomposers break down dead matter → CO₂ released.",
              "Combustion (burning fossil fuels) → CO₂ released.",
            ]},
            { type: "sub", text: "Nitrogen Cycle" },
            { type: "bullets", items: [
              "Nitrogen fixation: N₂ → ammonia (by Rhizobium bacteria in root nodules).",
              "Nitrification: ammonia → nitrites → nitrates (by nitrifying bacteria).",
              "Denitrification: nitrates → N₂ (by denitrifying bacteria in waterlogged soil).",
              "Plants absorb nitrates → make proteins.",
            ]},
          ],
        },
        {
          id: "human-impact",
          title: "Human Impact on Environment",
          blocks: [
            { type: "bullets", items: [
              "Deforestation: loss of biodiversity, increased CO₂, soil erosion, flooding.",
              "Eutrophication: nitrates/phosphates → algal bloom → deoxygenation → death of aquatic life.",
              "Air pollution: CO₂ (global warming), SO₂/NOx (acid rain), CFCs (ozone depletion).",
            ]},
            { type: "tip", text: "Conservation: protecting endangered species; seed banks; captive breeding; marine reserves; sustainable fishing/farming." },
          ],
        },
      ],
    },
    {
      id: "bio-u10",
      n: 10,
      title: "Microorganisms & Biotechnology",
      sections: [
        {
          id: "immunity",
          title: "Body Defences & Immunity",
          blocks: [
            { type: "bullets", items: [
              "Skin: physical barrier, sebum (acidic).",
              "Blood clotting: platelets → fibrin clot → seal wounds.",
              "Phagocytes: engulf and destroy pathogens (non-specific).",
              "Lymphocytes: produce antibodies specific to antigen (specific immunity).",
              "Memory cells: remain after infection → faster response on second exposure (immunity).",
            ]},
            { type: "p", text: "Vaccines: contain weakened/dead pathogen (or its antigens). Stimulate immune response → memory cells formed → immunity without disease. Herd immunity: high vaccination rate → protects unvaccinated individuals." },
            { type: "warn", text: "Antibiotics kill or inhibit BACTERIA only (not viruses). Antibiotic resistance: bacteria evolve resistance by natural selection; overuse accelerates this." },
          ],
        },
        {
          id: "genetic-engineering",
          title: "Genetic Engineering & Biotechnology",
          blocks: [
            { type: "bullets", items: [
              "Process: identify gene → cut out with restriction enzymes → insert into vector (plasmid) → insert into host cell → host cell produces desired protein.",
              "Examples: insulin (from bacteria), golden rice (beta-carotene), GM crops.",
            ]},
            { type: "sub", text: "Fermentation" },
            { type: "bullets", items: [
              "Yeast + glucose → ethanol + CO₂ (brewing and breadmaking).",
              "Yoghurt: Lactobacillus bacteria convert lactose → lactic acid → milk curdles.",
              "Penicillin: produced by Penicillium fungus in industrial fermenters.",
            ]},
          ],
        },
      ],
    },
  ],
};