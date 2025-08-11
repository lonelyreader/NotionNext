import React, { useState, useEffect } from 'react';
import ThemeGlobalGitbook, { Style } from '@site/src/components/theme-global-gitbook';
import { useDocsSearch, useFilteredNavPages } from '@site/src/hooks';
import type { NavPage } from '@site/src/types';
import { cn } from '@site/src/utils';

function GitbookLayout({ children }: { children: React.ReactNode }) {
  const { searchModal, filteredNavPages, allNavPages, pageNavVisible, changePageNavVisible } =
    useDocsSearch();
  const [tocVisible, changeTocVisible] = useState(true);
  const [filteredNavPages, setFilteredNavPages] = useFilteredNavPages(allNavPages);

  return (
    <ThemeGlobalGitbook.Provider
      value={{
        searchModal,
        tocVisible,
        changeTocVisible,
        filteredNavPages,
        setFilteredNavPages,
        allNavPages,
        pageNavVisible,
        changePageNavVisible
      }}>
      <Style />

      <div className="min-h-screen ai-bg text-[var(--fg)]">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </ThemeGlobalGitbook.Provider>
  );
}

export default GitbookLayout;