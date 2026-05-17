import { diseases } from "../data/diseases";

export function diagnose(symptoms: string[]) {
  return diseases.map((disease) => {
    const matches = disease.symptoms.filter((symptom) =>
      symptoms.includes(symptom),
    ).length;

    const percentage = (matches / disease.symptoms.length) * 100;

    return { ...disease, percentage };
  });
}
