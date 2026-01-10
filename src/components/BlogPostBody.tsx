"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type BlogPostBodyProps = {
  content: string;
};

export default function BlogPostBody({ content }: BlogPostBodyProps) {
  return (
    <div className="space-y-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h4 className="text-xl sm:text-2xl text-foreground font-light leading-[1.2]">
              {children}
            </h4>
          ),
          h3: ({ children }) => (
            <h5 className="text-lg sm:text-xl text-foreground font-light leading-[1.25]">
              {children}
            </h5>
          ),
          h4: ({ children }) => (
            <h6 className="text-base sm:text-lg text-foreground font-medium">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 pl-5 list-disc text-muted-light">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 pl-5 list-decimal text-muted-light">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-sm sm:text-base leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="text-foreground font-semibold">{children}</strong>
          ),
          a: ({ children, href }) => (
            <a
              href={href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
            >
              {children}
            </a>
          ),
          hr: () => <div className="h-px bg-white/10 my-8" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
