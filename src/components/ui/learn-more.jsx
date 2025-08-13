import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function LearnMore({ link }) {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => navigate(link)}
      className="group inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
    >
      <span className="text-sm">Learn More</span>
      <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
