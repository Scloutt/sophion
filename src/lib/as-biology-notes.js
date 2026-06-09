export const AS_BIOLOGY_NOTES = {
  level: "as",
  subject: "biology",
  board: "edexcel",
  title: "AS Biology — Pearson Edexcel",
  spec: "Topics 1–6 · Concise · Exam-Ready",
  subtitle: "Heart · Genes · Cells · Biodiversity · Respiration · Microbiology",
  units: [
    {
      id: "bio-t1",
      n: 1,
      title: "Lifestyle, Health and Risk",
      sections: [
        {
          id: "heart-structure",
          title: "Structure of the Heart",
          blocks: [
            { type: "bullets", items: [
              "Four chambers: left atrium, right atrium, left ventricle, right ventricle",
              "Atrioventricular valves (bicuspid & tricuspid) prevent backflow into atria during ventricular systole",
              "Semilunar valves (aortic & pulmonary) prevent backflow from arteries into ventricles",
              "Left ventricle wall is THICKER — pumps blood at higher pressure around the body",
              "Right ventricle pumps to lungs only (shorter distance, lower pressure)",
            ]},
          ],
        },
        {
          id: "cardiac-cycle",
          title: "Cardiac Cycle",
          blocks: [
            { type: "bullets", items: [
              "1. Atrial systole → atria contract, blood enters ventricles (0.1 s)",
              "2. Ventricular systole → ventricles contract, blood forced into aorta/pulmonary artery (0.3 s)",
              "3. Diastole → all chambers relax, heart fills with blood (0.4 s)",
            ]},
            { type: "formula", text: "Cardiac Output (CO) = Heart Rate (HR) × Stroke Volume (SV)\ne.g. 75 bpm × 70 mL = 5250 mL/min ≈ 5.25 L/min" },
          ],
        },
        {
          id: "blood-vessels",
          title: "Blood Vessels",
          blocks: [
            { type: "table", headers: ["Feature", "Arteries", "Capillaries", "Veins"], rows: [
              ["Wall", "Thick, muscular", "One cell thick", "Thin, less muscular"],
              ["Lumen", "Small", "Very narrow", "Large"],
              ["Pressure", "High", "Low", "Very low"],
              ["Valves", "No", "No", "YES"],
              ["Elastic", "Yes (recoil)", "No", "Little"],
            ]},
          ],
        },
        {
          id: "atherosclerosis",
          title: "Atherosclerosis & CVD",
          blocks: [
            { type: "bullets", items: [
              "1. Damage to endothelium (e.g. from high BP, toxins in smoke)",
              "2. LDL cholesterol accumulates beneath endothelium",
              "3. Macrophages move in → form FOAM CELLS",
              "4. Fibrous cap forms → ATHEROMA (plaque)",
              "5. Calcium salts deposit → ARTERIOSCLEROSIS",
              "6. Plaque ruptures → THROMBOSIS (clot) → may block vessel completely",
            ]},
            { type: "bullets", items: [
              "Angina: partial blockage, temporary chest pain on exertion, no permanent damage",
              "MI (heart attack): complete blockage, permanent cell death due to ischaemia",
            ]},
            { type: "tip", text: "Risk factor ≠ cause. Correlation is not causation! A risk factor increases the PROBABILITY of disease." },
          ],
        },
        {
          id: "blood-cholesterol",
          title: "Diet, Cholesterol & Blood Pressure",
          blocks: [
            { type: "bullets", items: [
              "LDL ('bad cholesterol'): transports cholesterol TO cells → excess deposits in arterial walls",
              "HDL ('good cholesterol'): returns cholesterol to liver → removes cholesterol from bloodstream",
            ]},
            { type: "sub", text: "Dietary Recommendations to Reduce CVD Risk" },
            { type: "bullets", items: [
              "Reduce saturated fat (raises LDL)",
              "Increase unsaturated fat (raises HDL, lowers LDL)",
              "Reduce salt (lowers blood pressure)",
              "Increase fibre (reduces cholesterol absorption)",
              "Increase omega-3 fatty acids (reduces blood clotting, lowers BP)",
            ]},
            { type: "bullets", items: [
              "Hypertension: >140/90 mmHg — damages arterial walls, increases CVD risk",
              "Statins: inhibit HMG-CoA reductase → reduce LDL synthesis in liver",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-t2",
      n: 2,
      title: "Genes and Health",
      sections: [
        {
          id: "gas-exchange",
          title: "Gas Exchange & Fick's Law",
          blocks: [
            { type: "formula", text: "Rate of diffusion ∝ (Surface Area × Concentration Gradient) / Diffusion Distance" },
            { type: "sub", text: "Features of Efficient Exchange Surfaces" },
            { type: "bullets", items: [
              "Large surface area",
              "Thin walls (short diffusion distance)",
              "Good blood supply (maintains concentration gradient)",
              "Ventilation (maintains concentration gradient on other side)",
            ]},
            { type: "sub", text: "Alveoli Adaptations" },
            { type: "bullets", items: [
              "~300 million alveoli → SA of ~70 m²",
              "One cell thick (Type I pneumocytes)",
              "Surrounded by capillary network",
              "Surfactant (from Type II pneumocytes) prevents alveoli collapsing",
            ]},
          ],
        },
        {
          id: "breathing",
          title: "Breathing Mechanism",
          blocks: [
            { type: "sub", text: "Inspiration (active)" },
            { type: "bullets", items: [
              "Diaphragm contracts (flattens), external intercostals contract",
              "Ribcage moves up and out → thorax volume increases → pressure drops below atmospheric → air flows in",
            ]},
            { type: "sub", text: "Expiration (passive at rest)" },
            { type: "bullets", items: [
              "Diaphragm and intercostals relax",
              "Ribcage moves down and in → volume decreases → pressure rises above atmospheric → air forced out",
            ]},
          ],
        },
        {
          id: "cystic-fibrosis",
          title: "Cystic Fibrosis",
          blocks: [
            { type: "bullets", items: [
              "Faulty CFTR protein (CF transmembrane conductance regulator) — a chloride ion channel",
              "Mutation → misfolded protein → less CFTR in membrane",
              "Cl⁻ ions accumulate in cells → water stays in cells by osmosis",
              "Thick, sticky mucus in airways and gut → reduced gas exchange, bacterial infections",
              "ΔF508: deletion of 3 bases → loss of phenylalanine → misfolded CFTR",
              "Autosomal recessive inheritance",
            ]},
          ],
        },
        {
          id: "cell-membrane",
          title: "Cell Membrane & Transport",
          blocks: [
            { type: "sub", text: "Fluid Mosaic Model (Singer & Nicolson, 1972)" },
            { type: "bullets", items: [
              "Phospholipid bilayer: hydrophilic heads face outward, hydrophobic tails inward",
              "Fluid: phospholipids and proteins move laterally",
              "Cholesterol: sits between phospholipids → regulates fluidity",
            ]},
            { type: "table", headers: ["Protein Type", "Function"], rows: [
              ["Channel proteins", "Allow specific ions/molecules through"],
              ["Carrier proteins", "Active transport, facilitated diffusion"],
              ["Receptor proteins", "Cell signalling, hormone binding"],
              ["Glycoproteins", "Cell recognition, immune response"],
              ["Glycolipids", "Cell recognition, cell adhesion"],
            ]},
            { type: "sub", text: "Transport Mechanisms" },
            { type: "bullets", items: [
              "Simple diffusion: small nonpolar molecules (O₂, CO₂) — DOWN gradient, no ATP",
              "Facilitated diffusion: charged/large molecules via channel/carrier proteins — DOWN gradient, no ATP",
              "Osmosis: water through partially permeable membrane — from high to low water potential (Ψ)",
              "Active transport: AGAINST concentration gradient — uses carrier proteins + ATP",
              "Co-transport (SGLT): Na⁺ moves DOWN gradient, drags glucose against its gradient",
            ]},
          ],
        },
        {
          id: "dna-protein",
          title: "DNA Structure & Protein Synthesis",
          blocks: [
            { type: "bullets", items: [
              "Double helix; antiparallel strands; base pairing: A=T (2 H-bonds), G≡C (3 H-bonds)",
              "Exons: coding sequences | Introns: non-coding (spliced out)",
            ]},
            { type: "sub", text: "DNA Replication (Semi-Conservative)" },
            { type: "bullets", items: [
              "1. Helicase unwinds double helix (breaks H-bonds)",
              "2. DNA polymerase adds complementary nucleotides (new strand 5'→3')",
              "3. DNA ligase joins Okazaki fragments on lagging strand",
              "Evidence: Meselson–Stahl experiment (1958) using ¹⁴N/¹⁵N",
            ]},
            { type: "sub", text: "Transcription → Translation" },
            { type: "bullets", items: [
              "RNA polymerase unwinds DNA at promoter → pre-mRNA → introns spliced → mature mRNA",
              "Ribosome reads mRNA in codons (triplets) | tRNA brings correct amino acid",
              "Peptide bonds form by condensation reaction | STOP codon signals termination",
            ]},
            { type: "sub", text: "Genetic Code Properties" },
            { type: "bullets", items: [
              "Triplet (64 codons for 20 amino acids)",
              "Degenerate (multiple codons per amino acid)",
              "Universal (same in all organisms — evidence for common ancestry)",
            ]},
            { type: "sub", text: "Mutations" },
            { type: "bullets", items: [
              "Insertion/deletion: FRAMESHIFT → alters all downstream amino acids",
              "Substitution: silent (same AA), missense (different AA), nonsense (STOP)",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-t3",
      n: 3,
      title: "Voice of the Genome",
      sections: [
        {
          id: "cell-structure",
          title: "Prokaryotic vs Eukaryotic Cells",
          blocks: [
            { type: "table", headers: ["Feature", "Prokaryote", "Eukaryote"], rows: [
              ["Nucleus", "No (nucleoid)", "Yes (membrane-bound)"],
              ["DNA", "Circular, naked", "Linear, with histones"],
              ["Ribosomes", "70S", "80S (cytoplasm)"],
              ["Mitochondria", "No", "Yes"],
              ["Cell wall", "Peptidoglycan", "Cellulose (plants)"],
            ]},
            { type: "sub", text: "Key Eukaryotic Organelles" },
            { type: "bullets", items: [
              "Nucleus: contains DNA; site of transcription; nucleolus makes rRNA",
              "Rough ER: ribosomes on surface; protein synthesis and modification",
              "Golgi apparatus: modifies, packages, sorts proteins; forms vesicles",
              "Mitochondria: ATP production (aerobic respiration); double membrane; own DNA",
              "Lysosomes: hydrolytic enzymes; digest old organelles, pathogens",
              "Chloroplasts: photosynthesis; double membrane, thylakoids, stroma; own DNA",
            ]},
          ],
        },
        {
          id: "cell-division",
          title: "Mitosis & Meiosis",
          blocks: [
            { type: "sub", text: "Mitosis — PMAT" },
            { type: "bullets", items: [
              "Prophase: chromatin condenses, nuclear envelope breaks down, spindle forms",
              "Metaphase: chromosomes align at cell equator, attached at centromere",
              "Anaphase: centromeres split, chromatids pulled to poles by spindle fibres",
              "Telophase: new nuclear envelopes form, cell divides (cytokinesis)",
              "Result: 2 genetically IDENTICAL diploid cells",
            ]},
            { type: "table", headers: ["", "Mitosis", "Meiosis"], rows: [
              ["Divisions", "1", "2"],
              ["Products", "2 cells", "4 cells"],
              ["Ploidy", "Diploid (2n)", "Haploid (n)"],
              ["Genetic variety", "None", "Yes"],
              ["Function", "Growth/repair", "Gamete formation"],
            ]},
            { type: "bullets", items: [
              "Sources of variation in meiosis: 1. Crossing over (chiasmata) in Prophase I",
              "2. Independent assortment of bivalents at Metaphase I",
            ]},
          ],
        },
        {
          id: "gene-expression",
          title: "Gene Expression & Stem Cells",
          blocks: [
            { type: "table", headers: ["Term", "Definition"], rows: [
              ["Totipotent", "Can become ANY cell type including extraembryonic tissue (zygote)"],
              ["Pluripotent", "Any cell in organism but not extraembryonic (embryonic stem cells)"],
              ["Multipotent", "Limited range of cell types (adult stem cells, e.g. haematopoietic)"],
            ]},
            { type: "bullets", items: [
              "iPSCs: differentiated cells reprogrammed by Yamanaka factors (Oct4, Sox2, Klf4, c-Myc)",
              "DNA methylation (adds CH₃ to cytosine) → gene silencing",
              "Histone acetylation → loosens chromatin → gene activation",
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-t4",
      n: 4,
      title: "Biodiversity and Natural Resources",
      sections: [
        {
          id: "biodiversity",
          title: "Biodiversity",
          blocks: [
            { type: "bullets", items: [
              "Genetic diversity: variation in alleles within a species",
              "Species diversity: number and evenness of species in an area",
              "Ecosystem diversity: variety of habitats and ecological processes",
            ]},
            { type: "formula", text: "Index of Diversity (d) = N(N−1) / Σn(n−1)\nwhere N = total individuals, n = individuals per species" },
            { type: "formula", text: "Lincoln Index (capture-recapture): Population = (M × N) / R\nM = first capture, N = second capture, R = recaptures" },
          ],
        },
        {
          id: "classification",
          title: "Classification & Evolution",
          blocks: [
            { type: "p", text: "Hierarchy: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species" },
            { type: "tip", text: "Mnemonic: 'Did King Philip Come Over For Good Soup?'" },
            { type: "sub", text: "Three Domain System (Woese, based on rRNA)" },
            { type: "bullets", items: [
              "Archaea (extremophiles, no peptidoglycan)",
              "Bacteria (peptidoglycan cell walls)",
              "Eukarya (membrane-bound nucleus)",
            ]},
            { type: "sub", text: "Natural Selection" },
            { type: "bullets", items: [
              "1. Variation exists within populations (mutation, sexual reproduction)",
              "2. Organisms overproduce offspring",
              "3. Individuals with advantageous traits survive and reproduce MORE",
              "4. Advantageous alleles increase in frequency over generations",
            ]},
          ],
        },
        {
          id: "water-transport",
          title: "Plant Structure & Water Transport",
          blocks: [
            { type: "bullets", items: [
              "Cellulose: unbranched polymer of β-glucose; H-bonds form microfibrils → very strong",
              "Starch: polymer of α-glucose; amylose (helix) and amylopectin (branched)",
            ]},
            { type: "sub", text: "Cohesion-Tension Model" },
            { type: "bullets", items: [
              "1. Transpiration at leaf surface → water evaporates",
              "2. Creates tension → water drawn UP xylem by cohesion (H-bonds)",
              "3. Root pressure helps push water up",
              "Apoplast: through cell walls | Symplast: through cytoplasm via plasmodesmata",
              "Casparian strip: forces water through symplast → controls uptake",
            ]},
            { type: "sub", text: "Guard Cells & Stomata" },
            { type: "bullets", items: [
              "In light: active transport of K⁺ into guard cells → water enters by osmosis → turgid → pore opens",
              "In dark/water stress: K⁺ moves out → guard cells flaccid → pore closes",
              "ABA (abscisic acid) triggers stomatal closure during water stress",
            ]},
            { type: "table", headers: ["Compound", "Source", "Use"], rows: [
              ["Aspirin", "Willow bark (Salix)", "Anti-inflammatory, painkiller"],
              ["Quinine", "Cinchona tree", "Malaria treatment"],
              ["Digoxin", "Foxglove (Digitalis)", "Heart failure treatment"],
              ["Taxol", "Yew tree (Taxus)", "Ovarian/breast cancer treatment"],
              ["Vincristine", "Rosy periwinkle", "Leukaemia treatment"],
            ]},
          ],
        },
      ],
    },
    {
      id: "bio-t5",
      n: 5,
      title: "Energy for Biological Processes",
      sections: [
        {
          id: "respiration",
          title: "Respiration",
          blocks: [
            { type: "formula", text: "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O    (max ~38 ATP per glucose)" },
            { type: "formula", text: "Anaerobic (animals): glucose → lactate        (net 2 ATP)\nAnaerobic (yeast): glucose → ethanol + CO₂  (net 2 ATP)" },
            { type: "sub", text: "Stage 1 — Glycolysis (cytoplasm)" },
            { type: "bullets", items: [
              "Glucose (6C) → 2 × pyruvate (3C)",
              "Net yield: 2 ATP, 2 NADH | No oxygen required",
              "Key enzyme: phosphofructokinase (PFK) — regulatory step",
            ]},
            { type: "sub", text: "Stage 2 — Link Reaction (mitochondrial matrix)" },
            { type: "p", text: "Pyruvate → Acetyl CoA (2C) + CO₂ | 1 NADH per pyruvate (×2 per glucose)" },
            { type: "sub", text: "Stage 3 — Krebs Cycle (mitochondrial matrix)" },
            { type: "bullets", items: [
              "Acetyl CoA (2C) + oxaloacetate (4C) → citrate (6C)",
              "Per turn: 3 NADH, 1 FADH₂, 1 ATP, 2 CO₂",
              "Per glucose (×2): 6 NADH, 2 FADH₂, 2 ATP, 4 CO₂",
            ]},
            { type: "sub", text: "Stage 4 — Oxidative Phosphorylation (inner mitochondrial membrane)" },
            { type: "bullets", items: [
              "NADH and FADH₂ donate electrons to electron transport chain",
              "H⁺ pumped into intermembrane space → flow back through ATP synthase (chemiosmosis)",
              "Final electron acceptor = O₂ → forms H₂O | Yield: ~34 ATP",
            ]},
            { type: "table", headers: ["Substrate", "RQ value"], rows: [
              ["Carbohydrates", "1.0"],
              ["Fats", "≈ 0.7"],
              ["Proteins", "≈ 0.9"],
              ["Anaerobic", "> 1"],
            ]},
          ],
        },
        {
          id: "photosynthesis",
          title: "Photosynthesis",
          blocks: [
            { type: "formula", text: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂" },
            { type: "sub", text: "Light-Dependent Reactions (thylakoid membranes)" },
            { type: "bullets", items: [
              "Chlorophyll absorbs light (peaks ~430 nm blue, ~680 nm red)",
              "Water splits (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂",
              "Electron transport chain → H⁺ pumped into thylakoid lumen → ATP synthase → photophosphorylation",
              "NADP⁺ + 2H⁺ + 2e⁻ → NADPH",
            ]},
            { type: "sub", text: "Calvin Cycle (stroma)" },
            { type: "bullets", items: [
              "1. CO₂ fixed by RuBisCO onto RuBP (5C) → 2 × GP (3C)",
              "2. GP reduced using ATP and NADPH → G3P (triose phosphate)",
              "3. 5/6 G3P molecules regenerate RuBP; remaining used to make glucose, amino acids, lipids",
              "Per 6 CO₂ fixed: 18 ATP, 12 NADPH consumed",
            ]},
            { type: "tip", text: "Limiting factor: whichever is below its maximum will limit the rate (light intensity, CO₂ concentration, temperature)." },
          ],
        },
      ],
    },
    {
      id: "bio-t6",
      n: 6,
      title: "Microbiology and Pathogens",
      sections: [
        {
          id: "infectious-disease",
          title: "Infectious Disease",
          blocks: [
            { type: "table", headers: ["Type", "Example", "Key Features"], rows: [
              ["Bacteria", "Mycobacterium", "Prokaryote; treated with antibiotics"],
              ["Viruses", "Influenza, HIV", "Acellular; need host to replicate"],
              ["Fungi", "Candida", "Eukaryote; cell walls of chitin"],
              ["Protists", "Plasmodium", "Eukaryote; complex life cycles"],
            ]},
            { type: "sub", text: "Koch's Postulates" },
            { type: "bullets", items: [
              "1. Pathogen must be found in all diseased individuals",
              "2. Pathogen must be isolated and grown in pure culture",
              "3. Culture must cause disease in a healthy host",
              "4. Pathogen must be re-isolated from the experimentally infected host",
            ]},
          ],
        },
        {
          id: "immune-response",
          title: "The Immune Response",
          blocks: [
            { type: "sub", text: "Non-Specific (Innate) Defences" },
            { type: "bullets", items: [
              "Physical: skin, mucus, cilia, stomach acid",
              "Chemical: lysozyme in tears/saliva, interferons (antiviral)",
              "Cellular: phagocytosis by neutrophils and macrophages",
              "Phagocytosis: engulf → phagosome → lysosomes fuse → digest → antigen presented (APC)",
            ]},
            { type: "sub", text: "Humoral Immunity (B cells → antibodies)" },
            { type: "bullets", items: [
              "B lymphocyte binds matching antigen → T helper releases cytokines → B cell activated",
              "Clonal expansion → plasma cells (secrete antibodies) + memory cells",
              "Memory cells persist → rapid secondary response",
            ]},
            { type: "sub", text: "Cell-Mediated Immunity (T cells)" },
            { type: "bullets", items: [
              "T helper cells (CD4+): coordinate immune response",
              "Cytotoxic T cells (CD8+): kill infected/cancerous cells directly",
            ]},
            { type: "sub", text: "Antibody Structure" },
            { type: "bullets", items: [
              "Y-shaped; 4 polypeptide chains (2 heavy, 2 light) joined by disulfide bonds",
              "Variable region (antigen-binding site): unique for each antibody",
              "Constant region: determines antibody class (IgG, IgM, IgA etc.)",
            ]},
            { type: "tip", text: "Primary response: slow, low titre. Secondary response: FAST, high titre — basis for vaccination." },
          ],
        },
        {
          id: "vaccines-antibiotics",
          title: "Vaccines & Antibiotics",
          blocks: [
            { type: "table", headers: ["Vaccine Type", "Example", "Notes"], rows: [
              ["Live attenuated", "MMR, yellow fever", "Weakened pathogen — stronger response"],
              ["Killed/inactivated", "Flu jab, polio injection", "Dead pathogen"],
              ["Subunit/conjugate", "Hepatitis B, MenACWY", "Antigenic proteins only"],
              ["mRNA", "COVID-19", "Instruct cells to make antigen protein"],
            ]},
            { type: "bullets", items: [
              "Active immunity: host produces own antibodies (vaccines, natural infection)",
              "Passive immunity: antibodies transferred (colostrum, anti-venom) — no memory",
              "Herd immunity threshold varies by R₀: measles ~95%, polio ~85%",
            ]},
            { type: "sub", text: "Antibiotics" },
            { type: "bullets", items: [
              "Penicillin: inhibits cell wall synthesis → bacteria lyse",
              "DOES NOT work on viruses (different mechanisms, no cell wall)",
              "MRSA: methicillin-resistant Staphylococcus aureus — mutations + horizontal gene transfer",
            ]},
          ],
        },
        {
          id: "practicals-bio",
          title: "Key Practicals & Equations",
          blocks: [
            { type: "bullets", items: [
              "Microscopy: Magnification = image size / actual size",
              "Chromatography: Rf = distance moved by spot / distance moved by solvent",
              "Spirometry: measure lung volumes (TV, IRV, ERV, VC, RV)",
              "Osmosis investigation: plant tissue in sucrose solutions; calculate water potential",
            ]},
            { type: "sub", text: "Key Statistical Tools" },
            { type: "bullets", items: [
              "t-test: compare means of two groups",
              "chi-squared: compare observed vs expected frequencies",
              "Correlation coefficient (r): strength of correlation (−1 to +1)",
            ]},
            { type: "formula", text: "Cardiac output = heart rate × stroke volume\nRate of diffusion ∝ (SA × conc. gradient) / distance\nIndex of diversity = N(N−1) / Σn(n−1)\nLincoln Index = (M × N) / R\nRQ = CO₂ produced / O₂ consumed" },
          ],
        },
      ],
    },
  ],
};