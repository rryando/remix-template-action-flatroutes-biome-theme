import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "~/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    iconChecked?: React.ReactNode;
    iconUnchecked?: React.ReactNode;
  }
>(({ className, iconChecked, iconUnchecked, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none flex items-center justify-center h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-all duration-300 ease-in-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    >
      <div className="relative w-4 h-4">
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100">
          {iconUnchecked}
        </div>
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0">
          {iconChecked}
        </div>
      </div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
