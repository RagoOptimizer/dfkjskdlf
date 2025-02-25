
import { Settings, Cpu, Network, Clock, Zap, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [status, setStatus] = useState("100% Optimized");
  
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-[420px] mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-primary font-bold text-2xl">R</div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Status Card */}
        <div className="glass p-6 rounded-lg card-glow">
          <h2 className="text-lg font-semibold mb-2">Current PC status</h2>
          <p className="text-primary">{status}</p>
        </div>

        {/* Settings Button */}
        <button className="glass w-full p-4 rounded-lg flex justify-between items-center card-glow">
          <span className="font-semibold">Settings</span>
          <Settings className="text-muted-foreground" size={20} />
        </button>

        {/* Optimizations Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold px-1">Available optimizations</h3>
          
          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Cpu className="text-primary" size={20} />
                Performance
              </div>
              <p className="text-sm text-muted-foreground">Get the best possible performance.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Network className="text-primary" size={20} />
                Network
              </div>
              <p className="text-sm text-muted-foreground">Optimize gameplay data packets.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                Input Lag
              </div>
              <p className="text-sm text-muted-foreground">Decrease peripheral response time.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>

          <button className="glass w-full p-4 rounded-lg flex justify-between items-center group card-glow">
            <div className="space-y-1 text-left">
              <div className="font-semibold flex items-center gap-2">
                <Zap className="text-primary" size={20} />
                Power Plan
              </div>
              <p className="text-sm text-muted-foreground">Balance performance and power usage.</p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
          </button>
        </div>

        {/* Version Info */}
        <p className="text-xs text-muted-foreground text-center pt-4">
          v9.0 © 2023-2024 Return™. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
