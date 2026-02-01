"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./animations";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatsCounterProps {
  projectCount: number;
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export function StatsCounter({ projectCount }: StatsCounterProps) {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(currentYear - 2002);
  }, []);

  return (
    <FadeIn delay={0.3} className="grid grid-cols-2 gap-8 py-8 border-y border-border bg-card/50">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-center">
          <Counter value={years} /><span>+</span>
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
          Years of Experience
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-center">
          <Counter value={projectCount} /><span>+</span>
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
          Projects Completed
        </div>
      </div>
    </FadeIn>
  );
}
