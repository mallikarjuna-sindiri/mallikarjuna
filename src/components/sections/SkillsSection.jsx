import { useState } from 'react';
import { skillCategories, skills as skillsObject } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function SkillsSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'grid'
  const [activeSkill, setActiveSkill] = useState(null);

  // Total skill count
  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  // Active Category Data
  const activeCategory = selectedCategoryId === 'All'
    ? null
    : skillCategories.find((cat) => cat.id === selectedCategoryId);

  // Filter skills based on search query
  const getFilteredSkills = (categorySkills) => {
    if (!searchQuery.trim()) return categorySkills;
    return categorySkills.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  };

  // Determine list of categories to show on right panel
  const categoriesToDisplay = selectedCategoryId === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategoryId);

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ── Header & View Switcher ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Technical Skills"
            title="Tools to Build the Future"
            subtitle="A focused stack spanning product development, infrastructure and delivery."
          />

          {/* View Mode Toggle */}
          <div className="inline-flex shrink-0 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                viewMode === 'split'
                  ? 'bg-[var(--orange)] text-white shadow-sm'
                  : 'text-[rgba(45,45,45,0.65)] hover:text-[var(--ink)]'
              }`}
              title="Interactive Sidebar & Right Detail Panel"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              Interactive View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[var(--orange)] text-white shadow-sm'
                  : 'text-[rgba(45,45,45,0.65)] hover:text-[var(--ink)]'
              }`}
              title="Grid View of All Cards"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Grid View
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MODE 1: INTERACTIVE SPLIT VIEW (Left list -> Right side details)
           ───────────────────────────────────────────────────────────── */}
        {viewMode === 'split' ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-12">

            {/* ── LEFT SIDE: Category List & Selector ── */}
            <div className="lg:col-span-4 xl:col-span-4">
              <div className="sticky top-24 rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-5 shadow-soft">
                
                {/* Left Header */}
                <div className="mb-4 flex items-center justify-between border-b border-[rgba(45,45,45,0.06)] pb-3 px-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[rgba(45,45,45,0.5)]">
                    Skill Categories
                  </span>
                  <span className="rounded-full bg-[rgba(255,107,53,0.1)] px-2.5 py-0.5 text-xs font-bold text-[var(--orange)]">
                    {skillCategories.length} Categories
                  </span>
                </div>

                {/* Categories List */}
                <div className="flex flex-col gap-2">
                  
                  {/* All Skills Option */}
                  <button
                    onClick={() => {
                      setSelectedCategoryId('All');
                      setActiveSkill(null);
                    }}
                    className={`group relative flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-200 ${
                      selectedCategoryId === 'All'
                        ? 'bg-[var(--dark)] text-white shadow-md'
                        : 'bg-transparent text-[var(--ink)] hover:bg-[rgba(255,107,53,0.06)] hover:text-[var(--orange)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🚀</span>
                      <span>All Technical Skills</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors ${
                          selectedCategoryId === 'All'
                            ? 'bg-[var(--orange)] text-white'
                            : 'bg-[rgba(45,45,45,0.06)] text-[rgba(45,45,45,0.7)] group-hover:bg-[rgba(255,107,53,0.15)] group-hover:text-[var(--orange)]'
                        }`}
                      >
                        {totalSkillsCount}
                      </span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          selectedCategoryId === 'All'
                            ? 'translate-x-1 opacity-100 text-[var(--orange)]'
                            : 'opacity-0 group-hover:translate-x-1 group-hover:opacity-100'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>

                  {/* Individual Categories */}
                  {skillCategories.map((cat) => {
                    const isSelected = selectedCategoryId === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategoryId(cat.id);
                          setActiveSkill(null);
                        }}
                        className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                          isSelected
                            ? 'border border-[rgba(255,107,53,0.3)] bg-[rgba(255,107,53,0.08)] text-[var(--orange)] shadow-sm'
                            : 'border border-transparent bg-transparent text-[var(--ink)] hover:border-[rgba(255,107,53,0.15)] hover:bg-[rgba(255,107,53,0.04)]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                            {cat.icon}
                          </span>
                          <span className="font-bold">{cat.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors ${
                              isSelected
                                ? 'bg-[var(--orange)] text-white'
                                : 'bg-[rgba(45,45,45,0.06)] text-[rgba(45,45,45,0.6)] group-hover:bg-[rgba(255,107,53,0.12)] group-hover:text-[var(--orange)]'
                            }`}
                          >
                            {cat.skills.length}
                          </span>

                          {/* Animated Right Arrow */}
                          <svg
                            className={`h-4 w-4 transition-all duration-200 ${
                              isSelected
                                ? 'translate-x-1 opacity-100 text-[var(--orange)]'
                                : '-translate-x-1 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-[var(--orange)]'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Helper info tip */}
                <div className="mt-6 rounded-xl border border-[rgba(255,107,53,0.15)] bg-[var(--cream)] p-3.5 text-xs leading-5 text-[rgba(45,45,45,0.7)]">
                  💡 <span className="font-semibold text-[var(--ink)]">Tip:</span> Click any category on the left to inspect detailed skills on the right side.
                </div>
              </div>
            </div>


            {/* ── RIGHT SIDE: Skills Detail Panel (Fades in on click) ── */}
            <div className="lg:col-span-8 xl:col-span-8">
              
              {/* Dynamic wrapper with key to trigger CSS fade-in-right animation on category change */}
              <div
                key={selectedCategoryId}
                className="animate-fade-in-right rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft"
              >

                {/* Right Panel Header & Live Filter */}
                <div className="flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{activeCategory ? activeCategory.icon : '🚀'}</span>
                      <h3 className="text-2xl font-black tracking-[-0.02em] text-[var(--ink)]">
                        {activeCategory ? activeCategory.name : 'All Technical Stack'}
                      </h3>
                      <span className="rounded-full bg-[rgba(255,107,53,0.1)] px-3 py-1 text-xs font-bold text-[var(--orange)]">
                        {activeCategory ? `${activeCategory.skills.length} skills` : `${totalSkillsCount} total skills`}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[rgba(45,45,45,0.75)]">
                      {activeCategory
                        ? activeCategory.description
                        : 'Explore all engineering languages, frameworks, cloud tooling, and developer instruments.'}
                    </p>
                  </div>

                  {/* Live Search Input */}
                  <div className="relative min-w-[200px] shrink-0">
                    <input
                      type="text"
                      placeholder="Search skill..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-full border border-[rgba(45,45,45,0.12)] bg-[var(--cream)] py-2 pl-9 pr-4 text-xs font-medium text-[var(--ink)] outline-none transition-all placeholder:text-[rgba(45,45,45,0.45)] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(255,107,53,0.15)]"
                    />
                    <svg
                      className="absolute left-3 top-2.5 h-4 w-4 text-[rgba(45,45,45,0.4)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Right Panel Content */}
                <div className="mt-6 space-y-8">
                  {categoriesToDisplay.map((cat) => {
                    const filtered = getFilteredSkills(cat.skills);
                    if (filtered.length === 0 && searchQuery) return null;

                    return (
                      <div key={cat.id} className="rounded-2xl border border-[rgba(45,45,45,0.05)] bg-[#fafafa] p-5">
                        
                        {/* Category Label (Visible when 'All' is selected or for clarity) */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{cat.icon}</span>
                            <h4 className="text-base font-bold text-[var(--ink)]">{cat.name}</h4>
                          </div>
                          <span className="text-xs font-medium text-[rgba(45,45,45,0.5)]">
                            {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
                          </span>
                        </div>

                        {/* Skills Chips Grid */}
                        <div className="flex flex-wrap gap-2.5">
                          {filtered.map((skill) => {
                            const isClicked = activeSkill === skill;

                            return (
                              <button
                                key={skill}
                                onClick={() => setActiveSkill(isClicked ? null : skill)}
                                className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 ${
                                  isClicked
                                    ? 'border-[var(--orange)] bg-[var(--orange)] text-white shadow-md scale-105'
                                    : 'border-[rgba(255,107,53,0.22)] bg-white text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--orange)] hover:bg-[rgba(255,107,53,0.08)] hover:text-[var(--orange)] hover:shadow-sm'
                                }`}
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)] group-hover:scale-125 transition-transform" />
                                <span>{skill}</span>
                                
                                {/* Small right arrow inside chip on hover */}
                                <svg
                                  className={`h-3 w-3 opacity-0 transition-all group-hover:opacity-100 ${
                                    isClicked ? 'opacity-100 text-white' : 'text-[var(--orange)]'
                                  }`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  {/* Empty state when searching */}
                  {searchQuery && categoriesToDisplay.every((cat) => getFilteredSkills(cat.skills).length === 0) && (
                    <div className="py-12 text-center text-sm text-[rgba(45,45,45,0.6)]">
                      No skills found matching &quot;<span className="font-semibold text-[var(--ink)]">{searchQuery}</span>&quot;.
                    </div>
                  )}

                  {/* Active Skill Info Highlight (if user clicked a skill pill) */}
                  {activeSkill && (
                    <div className="animate-fade-in-right rounded-2xl border border-[rgba(255,107,53,0.25)] bg-[rgba(255,107,53,0.06)] p-4 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-[var(--orange-deep)]">
                          ✨ Focused Skill: <span className="text-[var(--ink)] font-black text-sm">{activeSkill}</span>
                        </div>
                        <button
                          onClick={() => setActiveSkill(null)}
                          className="text-xs font-semibold text-[rgba(45,45,45,0.5)] hover:text-[var(--ink)]"
                        >
                          ✕ Close
                        </button>
                      </div>
                      <p className="mt-1 leading-5 text-[rgba(45,45,45,0.8)]">
                        Demonstrated proficiency in building production-ready features, clean code workflows, and integrated application architecture with {activeSkill}.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Footer Summary */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(45,45,45,0.06)] pt-5 text-xs text-[rgba(45,45,45,0.65)]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Continuously adopting modern engineering standards & tools</span>
                  </div>
                  <div className="font-semibold text-[var(--orange)]">
                    {selectedCategoryId === 'All' ? 'Showing all skills' : `Category: ${selectedCategoryId}`}
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* ─────────────────────────────────────────────────────────────
              MODE 2: CARDS GRID VIEW (Original Card View matching design)
             ───────────────────────────────────────────────────────────── */
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skillsObject).map(([category, values]) => {
              const catMeta = skillCategories.find((c) => c.name === category);

              return (
                <div
                  key={category}
                  className="group rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.3)] hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {catMeta && <span className="text-xl">{catMeta.icon}</span>}
                      <h3 className="text-xl font-bold text-[var(--ink)]">{category}</h3>
                    </div>
                    <span className="rounded-full bg-[rgba(255,107,53,0.1)] px-2.5 py-0.5 text-xs font-bold text-[var(--orange)]">
                      {values.length}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {values.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[rgba(255,107,53,0.18)] bg-[rgba(255,107,53,0.07)] px-3 py-1.5 text-xs font-semibold text-[var(--orange)] transition-all hover:bg-[rgba(255,107,53,0.15)] hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
