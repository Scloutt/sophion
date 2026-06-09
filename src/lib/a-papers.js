const PEARSON = "https://qualifications.pearson.com/content/dam/pdf/A-Level/Biology/2015/Exam-materials";
const PHYS = "https://qualifications.pearson.com/content/dam/pdf/A-Level/Physics/2015/Exam-materials";
const CHEM = "https://qualifications.pearson.com/content/dam/pdf/A-Level/Chemistry/2015/Exam-materials";
const MATH = "https://qualifications.pearson.com/content/dam/pdf/A-Level/Mathematics/2017/Exam-materials";

export const aPapers = {
  Biology: {
    "2024": {
      MayJune: {
        P1: { qp: `${PEARSON}/9bi0-01-que-20240606.pdf`, ms: `${PEARSON}/9bi0-01-rms-20240815.pdf` },
        P2: { qp: `${PEARSON}/9bi0-02-que-20240615.pdf`, ms: `${PEARSON}/9bi0-02-rms-20240815.pdf` },
        P3: { qp: `${PEARSON}/9bi0-03-que-20240620.pdf`, ms: `${PEARSON}/9bi0-03-rms-20240815.pdf` },
      },
    },
    "2023": {
      MayJune: {
        P1: { qp: `${PEARSON}/9bi0-01-que-20230608.pdf`, ms: `${PEARSON}/9bi0-01-rms-20230817.pdf` },
        P2: { qp: `${PEARSON}/9bi0-02-que-20230617.pdf`, ms: `${PEARSON}/9bi0-02-rms-20230817.pdf` },
        P3: { qp: `${PEARSON}/9bi0-03-que-20230622.pdf`, ms: `${PEARSON}/9bi0-03-rms-20230817.pdf` },
      },
    },
    "2022": {
      MayJune: {
        P1: { qp: `${PEARSON}/9bi0-01-que-20220610.pdf`, ms: `${PEARSON}/9bi0-01-rms-20220818.pdf` },
        P2: { qp: `${PEARSON}/9bi0-02-que-20220618.pdf`, ms: `${PEARSON}/9bi0-02-rms-20220818.pdf` },
        P3: { qp: `${PEARSON}/9bi0-03-que-20220625.pdf`, ms: `${PEARSON}/9bi0-03-rms-20220818.pdf` },
      },
    },
  },
  Physics: {
    "2024": {
      MayJune: {
        P1: { qp: `${PHYS}/9ph0-01-que-20240525.pdf`, ms: `${PHYS}/9ph0-01-rms-20240815.pdf` },
        P2: { qp: `${PHYS}/9ph0-02-que-20240607.pdf`, ms: `${PHYS}/9ph0-02-rms-20240815.pdf` },
        P3: { qp: `${PHYS}/9ph0-03-que-20240618.pdf`, ms: `${PHYS}/9ph0-03-rms-20240815.pdf` },
      },
    },
    "2023": {
      MayJune: {
        P1: { qp: `${PHYS}/9ph0-01-que-20230525.pdf`, ms: `${PHYS}/9ph0-01-rms-20230817.pdf` },
        P2: { qp: `${PHYS}/9ph0-02-que-20230610.pdf`, ms: `${PHYS}/9ph0-02-rms-20230817.pdf` },
        P3: { qp: `${PHYS}/9ph0-03-que-20230616.pdf`, ms: `${PHYS}/9ph0-03-rms-20230817.pdf` },
      },
    },
    "2022": {
      MayJune: {
        P1: { qp: `${PHYS}/9ph0-01-que-20220527.pdf`, ms: `${PHYS}/9ph0-01-rms-20220818.pdf` },
        P2: { qp: `${PHYS}/9ph0-02-que-20220611.pdf`, ms: `${PHYS}/9ph0-02-rms-20220818.pdf` },
        P3: { qp: `${PHYS}/9ph0-03-que-20220617.pdf`, ms: `${PHYS}/9ph0-03-rms-20220818.pdf` },
      },
    },
  },
  Chemistry: {
    "2024": {
      MayJune: {
        P1: { qp: `${CHEM}/9ch0-01-que-20240611.pdf`, ms: `${CHEM}/9ch0-01-rms-20240815.pdf` },
        P2: { qp: `${CHEM}/9ch0-02-que-20240619.pdf`, ms: `${CHEM}/9ch0-02-rms-20240815.pdf` },
        P3: { qp: `${CHEM}/9ch0-03-que-20240622.pdf`, ms: `${CHEM}/9ch0-03-rms-20240815.pdf` },
      },
    },
    "2023": {
      MayJune: {
        P1: { qp: `${CHEM}/9ch0-01-que-20230613.pdf`, ms: `${CHEM}/9ch0-01-rms-20230817.pdf` },
        P2: { qp: `${CHEM}/9ch0-02-que-20230620.pdf`, ms: `${CHEM}/9ch0-02-rms-20230817.pdf` },
        P3: { qp: `${CHEM}/9ch0-03-que-20230624.pdf`, ms: `${CHEM}/9ch0-03-rms-20230817.pdf` },
      },
    },
    "2022": {
      MayJune: {
        P1: { qp: `${CHEM}/9ch0-01-que-20220614.pdf`, ms: `${CHEM}/9ch0-01-rms-20220818.pdf` },
        P2: { qp: `${CHEM}/9ch0-02-que-20220621.pdf`, ms: `${CHEM}/9ch0-02-rms-20220818.pdf` },
        P3: { qp: `${CHEM}/9ch0-03-que-20220624.pdf`, ms: `${CHEM}/9ch0-03-rms-20220818.pdf` },
      },
    },
  },
  Maths: {
    "2024": {
      MayJune: {
        "P1 Pure": { qp: `${MATH}/9ma0-01-que-20240605.pdf`, ms: `${MATH}/9ma0-01-rms-20240815.pdf` },
        "P2 Pure": { qp: `${MATH}/9ma0-02-que-20240612.pdf`, ms: `${MATH}/9ma0-02-rms-20240815.pdf` },
        "P31 Statistics": { qp: `${MATH}/9ma0-31-que-20240621.pdf`, ms: `${MATH}/9ma0-31-rms-20240815.pdf` },
        "P32 Mechanics": { qp: `${MATH}/9ma0-32-que-20240621.pdf`, ms: `${MATH}/9ma0-32-rms-20240815.pdf` },
      },
    },
    "2023": {
      MayJune: {
        "P1 Pure": { qp: `${MATH}/9ma0-01-que-20230607.pdf`, ms: `${MATH}/9ma0-01-rms-20230817.pdf` },
        "P2 Pure": { qp: `${MATH}/9ma0-02-que-20230614.pdf`, ms: `${MATH}/9ma0-02-rms-20230817.pdf` },
        "P31 Statistics": { qp: `${MATH}/9ma0-31-que-20230621.pdf`, ms: `${MATH}/9ma0-31-rms-20230817.pdf` },
        "P32 Mechanics": { qp: `${MATH}/9ma0-32-que-20230621.pdf`, ms: `${MATH}/9ma0-32-rms-20230817.pdf` },
      },
    },
    "2022": {
      MayJune: {
        "P1 Pure": { qp: `${MATH}/9ma0-01-que-20220608.pdf`, ms: `${MATH}/9ma0-01-rms-20220818.pdf` },
        "P2 Pure": { qp: `${MATH}/9ma0-02-que-20220615.pdf`, ms: `${MATH}/9ma0-02-rms-20220818.pdf` },
        "P31 Statistics": { qp: `${MATH}/9ma0-31-que-20220622.pdf`, ms: `${MATH}/9ma0-31-rms-20220818.pdf` },
        "P32 Mechanics": { qp: `${MATH}/9ma0-32-que-20220622.pdf`, ms: `${MATH}/9ma0-32-rms-20220818.pdf` },
      },
    },
  },
};