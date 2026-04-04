"use client";
import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import MonitorGrid from "./MonitorGrid";
import MonitorToolbar from "./MonitorToolbar";
import PaginationSection from "./Pagination";

export default function MonitorPage({ monitors, params }) {
  const [isListView, setIsListView] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleView = () => {
    setIsListView((prev) => !prev);
  };

  return (
    <>
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        params={params}
      />
      <section className="flex-1">
        <MonitorToolbar
          isListView={isListView}
          toggleView={toggleView}
          onOpenFilter={() => setIsFilterOpen(true)}
        />
        <MonitorGrid monitors={monitors} isListView={isListView} />
        {/* TODO: implement pagination */}
        {/* <PaginationSection /> */}
      </section>
    </>
  );
}
