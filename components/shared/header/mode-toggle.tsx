"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";



const ModeToggle = () => {
      const { theme, setTheme } = useTheme();

      return (
            <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0" size="icon">
                              {
                                    theme === "system" ? (
                                          <SunMoon />
                                    ) : theme === "dark" ? (
                                          <MoonIcon />
                                    ) : (
                                          <SunIcon />
                                    )
                              }
                        </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border">
                        <DropdownMenuLabel>Appearances</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => setTheme("light")}>Light</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={() => setTheme("dark")}>Dark</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked={theme === "system"} onClick={() => setTheme("system")}>System</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
            </DropdownMenu>
      );
}

export default ModeToggle;
