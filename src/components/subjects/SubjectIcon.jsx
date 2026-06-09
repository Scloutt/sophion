import React from "react";
import { Atom, Calculator, Microscope, Waves } from "lucide-react";

export function SubjectIcon({ icon, className }) {
  switch (icon) {
    case "microscope": return <Microscope className={className} />;
    case "atom":       return <Atom className={className} />;
    case "wave":       return <Waves className={className} />;
    case "calculator": return <Calculator className={className} />;
    default:           return null;
  }
}

export default SubjectIcon;