import React, { useState, useEffect } from 'react';
import ThemeGlobalGitbook, { Style } from '@/themes/gitbook4/components/ThemeGlobalGitbook';
import { useDocsSearch, useFilteredNavPages } from '@/hooks';

function GitbookLayout({ children }) {
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