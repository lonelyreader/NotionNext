
import React, { useState, useEffect } from 'react';
import ThemeGlobalGitbook, { Style } from './components/ThemeGlobalGitbook';
import { useDocsSearch } from '../../hooks';

function GitbookLayout({ children }) {
  const { searchModal, allNavPages, pageNavVisible, changePageNavVisible } = useDocsSearch();
  const [tocVisible, changeTocVisible] = useState(true);
  const [filteredPages, setFilteredPages] = useState([]);

  useEffect(() => {
    setFilteredPages(allNavPages || []);
  }, [allNavPages]);

  return (
    <ThemeGlobalGitbook.Provider
      value={{
        searchModal,
        tocVisible,
        changeTocVisible,
        filteredNavPages: filteredPages,
        setFilteredNavPages: setFilteredPages,
        allNavPages,
        pageNavVisible,
        changePageNavVisible
      }}>
      <Style />
      <div className="min-h-screen ai-bg text-[var(--fg)] relative overflow-hidden">
        {/* AI风格背景渐变 */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </ThemeGlobalGitbook.Provider>
  );
}

export default GitbookLayout;
