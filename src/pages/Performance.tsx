
import { ArrowLeft, Settings, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Performance = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-[380px] mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <button 
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Performance Icon & Title */}
        <div className="text-center space-y-2">
          <div className="relative w-fit mx-auto">
            <Settings size={48} className="text-primary animate-spin-slow mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Performance</h1>
          <p className="text-muted-foreground">Get the best possible performance.</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4 animate-glow">
            <h3 className="text-sm font-medium mb-2">The effects you get:</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-primary">Improve overall performance.</li>
              <li className="text-primary">Prevent memory leaks.</li>
              <li className="text-primary">And more...</li>
            </ul>
          </div>
          
          <div className="glass rounded-lg p-4 animate-pulse">
            <h3 className="text-sm font-medium mb-2">Settings to change</h3>
            <div className="text-3xl font-bold text-primary">196</div>
            <p className="text-xs text-muted-foreground">Includes important settings</p>
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-white text-background rounded-lg py-4 font-medium hover:bg-white/90 transition-all duration-300 card-glow-white">
          APPLY
        </button>
      </div>
    </div>
  );
};

export default Performance;
