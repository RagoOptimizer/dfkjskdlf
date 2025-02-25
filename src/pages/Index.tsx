
import { Settings, Cpu, Network, Clock, Zap, X } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [percentage, setPercentage] = useState(0);
  const status = "Optimized";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(100);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-[380px] mx-auto space-y-4 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d34fa564-564f-4bcf-94b4-b3afae44d202.png" 
            alt="Return Logo" 
            className="h-8 w-8"
          />
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Status Card */}
        <div className="glass p-4 rounded-lg card-glow">
          <h2 className="text-xl font-semibold mb-2">Current PC status</h2>
          <p className="text-primary font-medium">
            <span className="percentage">{percentage}%</span> {status}
          </p>
        </div>

        {/* Settings Button */}
        <button className="glass w-full p-4 rounded-lg flex justify-between items-center card-glow settings-btn">
          <span className="font-medium">Settings</span>
          <Settings className="text-muted-foreground settings-icon" size={20} />
        </button>

        {/* Optimizations Section */}
        <div className="space-y-3">
          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Cpu className="text-primary" size={20} />
                Performance
              </div>
              <p className="text-sm text-muted-foreground font-normal">Get the best possible performance.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Network className="text-primary" size={20} />
                Network
              </div>
              <p className="text-sm text-muted-foreground font-normal">Optimize gameplay data packets.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                Input Lag
              </div>
              <p className="text-sm text-muted-foreground font-normal">Decrease peripheral response time.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Zap className="text-primary" size={20} />
                Power Plan
              </div>
              <p className="text-sm text-muted-foreground font-normal">Balance performance and power usage.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>
        </div>

        {/* Version Info */}
        <p className="text-xs text-muted-foreground text-center pt-2 font-normal">
          2025© Rago. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
