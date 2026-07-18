import type { ComponentType, ReactNode } from "react";

type MDXComponents = Record<string, ComponentType<{ children?: ReactNode; [key: string]: unknown }>>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="mt-10 scroll-mt-24 text-2xl font-bold tracking-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight">{children}</h3>,
    a: ({ children, href }) => (
      <a href={typeof href === "string" ? href : undefined} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
        {children}
      </a>
    ),
    ...components,
  };
}
