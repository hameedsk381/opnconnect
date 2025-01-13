import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Read more", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative  w-full max-w-xs sm:w-20 md:w-24 lg:w-28 text-black cursor-pointer overflow-hidden rounded-full border bg-background p-1 text-center font-semibold text-xs",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-200 group-hover:translate-x-8 group-hover:opacity-0 text-md">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-8 items-center justify-center text-primary-foreground opacity-0 transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 text-xs">
        <span>{text}</span>
        <ArrowRight className="ml-2" size={14} />
      </div>
      <div className="absolute left-[10%] top-[40%] h-1 w-1 sm:h-1.5 sm:w-1.5 scale-[1] rounded-full bg-primary transition-all duration-200 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.5] group-hover:bg-primary"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
