"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* One shared easing and duration set, matching the --ease-out-expo /
   --duration-* tokens in globals.css. The previous single 0.7s fadeUp was
   both sluggish and uniform — uniform motion carries no hierarchy, so
   nothing on the page read as directed. */
const EXPO = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EXPO } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EXPO } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* For rules, underlines and dividers — draws in from the leading edge. */
const draw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.62, ease: EXPO } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const variantMap = { reveal, rise, fadeIn, draw } as const;
export type MotionVariant = keyof typeof variantMap;

export function AnimatedSection({
  children,
  className,
  variant = "reveal",
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  delay?: number;
  id?: string;
}) {
  const reducedMotion = useReducedMotion();
  const chosen = variantMap[variant];

  if (reducedMotion) return <div id={id} className={className}>{children}</div>;

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        ...chosen,
        visible: {
          ...(chosen.visible as object),
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
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
}) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={variantMap[variant]}>
      {children}
    </motion.div>
  );
}
