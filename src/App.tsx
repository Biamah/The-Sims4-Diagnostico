import { useState } from "react";
import "./App.css";
import { SymptomSelector } from "./components/SymptomSelector";
import { diseases } from "./data/diseases";
import { DiseaseCard } from "./components/DiseaseCard";

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const symptoms = [
    ...new Set(diseases.flatMap((diseases) => diseases.symptoms)),
  ];

  function handleToggle(symptom: string) {
    setSelectedSymptoms((prev) => {
      if (prev.includes(symptom)) {
        return prev.filter((item) => item !== symptom);
      }

      return [...prev, symptom];
    });
  }

  const results = diseases
    .map((disease) => {
      const matches = disease.symptoms.filter((symptom) =>
        selectedSymptoms.includes(symptom),
      ).length;

      const percentage = (matches / disease.symptoms.length) * 100;

      return {
        ...disease,
        percentage,
      };
    })
    .sort((a, b) => b.percentage - a.percentage);

  function clearSymptoms() {
    setSelectedSymptoms([]);
  }

  return (
    <main className="min-h-screen bg-sky-100 p-4">
      <h1 className="text-3xl font-bold">Sim Diagnóstico</h1>

      <button
        onClick={clearSymptoms}
        className="mt-4 w-ful text-black p-2 rounded-xl font-semibold transition-all duration-300 active:scale-95 border-1"
      >
        Limpar Sintomas
      </button>

      <div className="flex flex-wrap gap-2 mt-4">
        {symptoms.map((symptom) => (
          <SymptomSelector
            key={symptom}
            symptom={symptom}
            selected={selectedSymptoms.includes(symptom)}
            onClick={() => handleToggle(symptom)}
          />
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {results
          .filter((result) => result.percentage > 0)
          .map((result) => (
            <DiseaseCard
              key={result.id}
              name={result.name}
              percentage={result.percentage}
              treatment={result.treatment}
            />
          ))}
      </div>
    </main>
  );
}

export default App;
