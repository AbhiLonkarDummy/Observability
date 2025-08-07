import { Label } from "./label";
import { Flag, AlertTriangle, OctagonAlert } from "lucide-react";
const alertData = [
  {
    name: "low",
    icon: <Flag className="w-4 h-4" />,
    errCount: 11,
  },
  {
    name: "med",
    icon: <AlertTriangle className="w-4 h-4" />,
    errCount: 12,
  },
  {
    name: "high",
    icon: <OctagonAlert className="w-4 h-4" />,
    errCount: 2,
  },
];

export const LabelRow = () => {
  return (
    <>
      <div className="flex gap-2">
        {alertData.map((item) => (
          <Label
            key={item.name}
            name={item.name}
            icon={item.icon}
            errCount={item.errCount}
          />
        ))}
      </div>
    </>
  );
};
