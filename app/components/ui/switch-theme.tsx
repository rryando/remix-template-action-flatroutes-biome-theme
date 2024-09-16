import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { Switch } from "./switch";

export const SwitchTheme = () => {
  const [currentTheme, setTheme] = useTheme();
  return (
    <Switch
      checked={currentTheme === Theme.DARK}
      onCheckedChange={(checked) =>
        setTheme(checked ? Theme.DARK : Theme.LIGHT)
      }
      iconChecked={
        <Sun className="h-4 w-4 text-yellow-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      }
      iconUnchecked={
        <Moon className="h-4 w-4 text-yellow-500 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      }
    />
  );
};
