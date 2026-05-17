type Props = {
  symptom: string;
  selected: boolean;
  onClick: () => void;
};

export function SymptomSelector({ symptom, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition-all ${selected ? "bg-blue-500 text-white" : "bg-white"}`}
    >
      {symptom}
    </button>
  );
}
