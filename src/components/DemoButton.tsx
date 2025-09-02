
import { TestTube } from 'lucide-react';

interface DemoButtonProps {
  onClick: () => void;
}

const DemoButton = ({ onClick }: DemoButtonProps) => {
  return (
    <div className="hidden">
      {/* Demo button is hidden per user request */}
    </div>
  );
};

export default DemoButton;
