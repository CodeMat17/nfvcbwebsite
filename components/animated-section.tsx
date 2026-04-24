"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn";
  delay?: number;
  id?: string;
}) {
  const reducedMotion = useReducedMotion();
  const chosen = variant === "fadeIn" ? fadeIn : fadeUp;

  if (reducedMotion) return <div id={id} className={className}>{children}</div>;

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        ...chosen,
        visible: {
          ...chosen.visible,
          transition: {
            ...(chosen.visible as { transition?: object }).transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
