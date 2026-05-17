import { motion } from "framer-motion";

type Props = {
  name: string;
  percentage: number;
  treatment: string;
  invalidSymptoms: string[];
};

export function DiseaseCard({
  name,
  percentage,
  treatment,
  invalidSymptoms,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">{name}</h2>

        <span className="font-bold text-blue-500">
          {percentage.toFixed(0)}%
        </span>
      </div>

      {/* Barra */}
      <div className="w-full h-3 bg-gray-200 rounded-full mt-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>

      <p className="text-sm text-gray-500 mt-3">Tratamento: {treatment}</p>

      <div>
        {invalidSymptoms.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-red-500 font-medium">
              Sintomas não compativeis:
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {invalidSymptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full"
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
