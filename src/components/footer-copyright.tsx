"use client";

import { useEffect, useState } from "react";

export function FooterCopyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    return (
      <span>
        &copy; Civitech Constructions (Pvt) Ltd. All rights reserved.
      </span>
    );
  }

  return (
    <span>
      &copy; {year} Civitech Constructions (Pvt) Ltd. All rights reserved.
    </span>
  );
}
