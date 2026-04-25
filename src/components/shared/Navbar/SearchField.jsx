import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Scale, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import CldImage from "@/components/ui/CldImage";
import { Button } from "@/components/ui/button";
import SearchListSkeleton from "@/components/skeleton/SearchListSkeleton";
import useDebounce from "@/hooks/useDebounce";
import { supabase } from "@/lib/supabase";

export default function SearchField() {
  const inputRef = useRef();

  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const debouncedValue = useDebounce(value).trim();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputRef?.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const search = async () => {
      if (!debouncedValue) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const { data, error } = await supabase
        .from("monitors")
        .select("id, slug, brand, model, thumbnail_url, data_source")
        .or(`brand.ilike.%${debouncedValue}%,model.ilike.%${debouncedValue}%`)
        .limit(6);

      if (!error) {
        setSearchResults(data);
      }

      setIsLoading(false);
    };

    search();
  }, [debouncedValue]);

  let content = null;

  if (isLoading) {
    content = <SearchListSkeleton />;
  } else if (debouncedValue && searchResults?.length > 0) {
    content = searchResults.map((monitor) => (
      <li
        key={monitor.id}
        className="hover:bg-background flex items-center gap-2 px-3 py-2"
      >
        <Link
          onClick={() => setValue("")}
          href={`/monitors/${monitor?.brand?.toLowerCase()}/${monitor?.slug}`}
          className="group flex w-full flex-1 gap-4 space-y-0.5"
        >
          <div className="relative size-8">
            <CldImage
              src={monitor.thumbnail_url}
              alt={monitor.model}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>

          <div>
            {monitor?.data_source && (
              <p className="text-muted-foreground text-[9px] capitalize">
                {monitor.data_source} verified
              </p>
            )}
            <p className="group-hover:text-primary truncate text-xs font-medium">
              {monitor.model}
            </p>
          </div>
        </Link>

        <Button size="icon-sm" variant="outline">
          <Scale />
        </Button>
      </li>
    ));
  } else if (!isLoading && debouncedValue && searchResults?.length === 0) {
    content = (
      <li className="hover:bg-background flex items-center gap-2 px-3 py-2 text-xs font-medium">
        No monitors found for &quot;{debouncedValue}&quot;
      </li>
    );
  }

  return (
    <div className="relative hidden shrink-0 lg:block">
      <InputGroup className="h-8">
        <InputGroupAddon>
          <Search className="size-3" />
        </InputGroupAddon>
        <InputGroupInput
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Search monitors..."
          className="text-xs md:text-xs"
        />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>

      {debouncedValue && (
        <ul className="absolute top-10 left-0 w-full divide-y overflow-hidden rounded border bg-white">
          {content}
        </ul>
      )}
    </div>
  );
}
