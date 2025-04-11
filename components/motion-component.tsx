"use client";

import { motion, MotionProps } from "motion/react";
import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type MotionComponentProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & MotionProps &
  ComponentPropsWithRef<T>;

export const MotionDiv = ({
  children,
  ...props
}: MotionComponentProps<"div">) => {
  return <motion.div {...(props as MotionProps)}>{children}</motion.div>;
};

export const MotionUl = ({
  children,
  ...props
}: MotionComponentProps<"ul">) => {
  return <motion.ul {...(props as MotionProps)}>{children}</motion.ul>;
};

export const MotionLi = ({
  children,
  ...props
}: MotionComponentProps<"li">) => {
  return <motion.li {...(props as MotionProps)}>{children}</motion.li>;
};

export const MotionButton = ({
  children,
  ...props
}: MotionComponentProps<"button">) => {
  return <motion.button {...(props as MotionProps)}>{children}</motion.button>;
};

export const MotionSpan = ({
  children,
  ...props
}: MotionComponentProps<"span">) => {
  return <motion.span {...(props as MotionProps)}>{children}</motion.span>;
};

export const MotionNav = ({
  children,
  ...props
}: MotionComponentProps<"nav">) => {
  return <motion.nav {...(props as MotionProps)}>{children}</motion.nav>;
};
