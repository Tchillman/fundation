
"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);

  const prefix = match?.[1] ?? "";
  const numberText = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";

  const numericValue = Number(
    numberText.replace(/\./g, "").replace(",", ".")
  );

  const decimals = numberText.includes(",")
    ? numberText.split(",")[1].length
    : 0;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setCount(numericValue);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      const ease = 1 - Math.pow(1 - progress, 3);

      setCount(ease * numericValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, numericValue, duration]);

  // Formatação determinística para evitar diferenças de locale
  const formatted = count.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
