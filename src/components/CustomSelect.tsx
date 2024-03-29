import { useState } from "react";

type NumPerPage = 8 | 12 | 16 | 20;

interface CustomSelectProps {
  onChanged: (option: NumPerPage) => void;
}

export function CustomSelect({ onChanged }: CustomSelectProps) {
  const options = [8, 12, 16, 20] as const;
  const [selected, setSelected] = useState<NumPerPage>(8);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative">
      <button
        className="px-2 py-1  bg-gray-200 flex items-center gap-4 rounded"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="bg-white rounded w-10 text-center">{selected}</span>
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.488447 2.14669L5.24199 6.91438C5.29858 6.97097 5.35988 7.01115 5.42591 7.03491C5.49193 7.05868 5.56266 7.07038 5.63812 7.07C5.71357 7.07 5.78431 7.05811 5.85033 7.03435C5.91635 7.01058 5.97766 6.97059 6.03425 6.91438L10.8019 2.14669C10.934 2.01465 11 1.84959 11 1.65153C11 1.45346 10.9293 1.28369 10.7878 1.14222C10.6463 1.00074 10.4813 0.930008 10.2926 0.930008C10.104 0.930008 9.93894 1.00074 9.79747 1.14222L5.63812 5.30157L1.47877 1.14222C1.34673 1.01018 1.18394 0.944155 0.990399 0.944155C0.796863 0.944155 0.629544 1.01489 0.488447 1.15637C0.346973 1.29784 0.276236 1.46289 0.276236 1.65153C0.276236 1.84016 0.346973 2.00521 0.488447 2.14669Z"
            fill="black"
          />
        </svg>
      </button>
      {showOptions && (
        <div className="absolute top-[35px] -translate-x-4 rounded flex flex-col gap-1 items-center w-full p-1 bg-white">
          {options
            .filter((option) => option !== selected)
            .map((option) => (
              <button
                key={option}
                className="hover:bg-gray-100 rounded w-full text-center"
                onClick={() => {
                  setSelected(option);
                  onChanged(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
