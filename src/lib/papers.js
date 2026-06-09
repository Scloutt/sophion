export const LEVELS = [
  { id: "igcse", name: "IGCSE", tagline: "International General Certificate of Secondary Education." },
  { id: "as", name: "AS Levels", tagline: "Advanced Subsidiary Level qualifications." },
  { id: "a", name: "A Levels", tagline: "Advanced Level qualifications." },
];

export const SUBJECTS = [
  { id: "biology", name: "Biology", icon: "microscope", blurb: "Cells, genetics, ecosystems and more.", accent: "from-emerald-400 to-emerald-600" },
  { id: "chemistry", name: "Chemistry", icon: "atom", blurb: "Atoms, reactions, bonding and the periodic table.", accent: "from-blue-400 to-blue-600" },
  { id: "physics", name: "Physics", icon: "wave", blurb: "Forces, energy, waves and electricity.", accent: "from-violet-400 to-violet-600" },
  { id: "maths", name: "Maths", icon: "calculator", blurb: "Algebra, geometry, statistics and calculus.", accent: "from-amber-400 to-amber-600" },
];

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id);
}

export function getSubject(id) {
  return SUBJECTS.find((s) => s.id === id);
}

export const BOARDS = [
  { id: "edexcel", name: "Pearson Edexcel", tagline: "Pearson Edexcel International past papers." },
  { id: "cambridge", name: "Cambridge", tagline: "Cambridge Assessment International past papers." },
];