"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

const categories = [
  { label: "All", value: "all" },
  { label: "Technology", value: "technology" },
  { label: "Business", value: "business" },
  { label: "Science", value: "science" },
  { label: "Health", value: "health" },
  { label: "Entertainment", value: "entertainment" },
];

export default function CategoryFilter({ initialCategory = '' }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialCategory);
  const router = useRouter();

  useEffect(() => {
    setValue(initialCategory);
  }, [initialCategory]);

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      setOpen(false);
      return;
    }

    setValue(currentValue);
    // Only navigate if the category actually changed
    const newPath = currentValue && currentValue !== 'all'
      ? `/?category=${currentValue}`
      : '/';
    router.push(newPath);
    setOpen(false);
  };

  const selectedCategory = categories.find((category) => category.value === value);
  const displayLabel = selectedCategory?.label || "Select category...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select category"
          className="w-full sm:w-[200px] justify-between rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {displayLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full sm:w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search category..."
            className="h-9"
          />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={handleSelect}
                className="cursor-pointer"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}