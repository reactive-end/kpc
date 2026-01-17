"use client";

import DottedMapLib from "dotted-map";
import Image from "next/image";
import { useMemo } from "react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  className?: string;
}

export function DottedMap({
  dots = [],
  lineColor = "#8B2635",
  className,
}: MapProps) {
  const svgMap = useMemo(() => {
    const map = new DottedMapLib({ height: 60, grid: "diagonal" });

    dots.forEach((dot) => {
      map.addPin({
        lat: dot.start.lat,
        lng: dot.start.lng,
        svgOptions: { color: lineColor, radius: 0.4 },
      });
      map.addPin({
        lat: dot.end.lat,
        lng: dot.end.lng,
        svgOptions: { color: lineColor, radius: 0.4 },
      });
    });

    return map.getSVG({
      radius: 0.22,
      color: "#1E3A5F40",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [dots, lineColor]);

  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`;

  return (
    <div className={className}>
      <Image
        src={svgDataUrl}
        alt="Mapa mundial de operaciones legales"
        fill
        className="object-contain opacity-60"
        priority
        unoptimized
      />
    </div>
  );
}
