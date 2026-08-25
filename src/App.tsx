import { useMemo, useState } from 'react'
import { FilterTabs } from './components/FilterTabs'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PromoGrid } from './components/PromoGrid'
import { usePromos } from './hooks/usePromos'
import type { FilterTab } from './types/promo'


function App() {
  const { promos, loading, error } = usePromos()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<FilterTab>('all')

  const filtered = useMemo(() => {
    let result = promos

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        p =>
          p.company.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
      )
    }

    if (activeTab === 'permanent') {
      result = result.filter(p => !p.expires_at)
    } else if (activeTab === 'limited') {
      result = result.filter(p => p.expires_at)
    }

    return result
  }, [promos, searchQuery, activeTab])

  const counts = useMemo(
    () => ({
      all: promos.length,
      permanent: promos.filter(p => !p.expires_at).length,
      limited: promos.filter(p => p.expires_at).length,
    }),
    [promos]
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-200">
      {/* Aurora / gradient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-indigo-600/30 blur-[120px] animate-float-blob" />
        <div className="absolute top-1/4 -right-40 h-[34rem] w-[34rem] rounded-full bg-fuchsia-600/25 blur-[130px] animate-float-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px] animate-float-blob [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,rgba(6,6,16,0.85)_100%)]" />
      </div>

      <Header />

      <main>
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalOffers={promos.length}
        />

        {loading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl skeleton-shimmer" />
                    <div className="flex-1 pt-1">
                      <div className="h-3 w-20 rounded-full skeleton-shimmer mb-2" />
                      <div className="h-4 w-40 rounded-full skeleton-shimmer" />
                    </div>
                  </div>
                  <div className="h-3 w-full rounded-full skeleton-shimmer mb-2.5" />
                  <div className="h-3 w-2/3 rounded-full skeleton-shimmer mb-6" />
                  <div className="flex justify-between items-center">
                    <div className="h-7 w-32 rounded-full skeleton-shimmer" />
                    <div className="h-9 w-24 rounded-xl skeleton-shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="mx-auto max-w-md px-4 pb-24 text-center">
            <div className="rounded-3xl border border-rose-400/20 bg-rose-500/[0.06] p-10 backdrop-blur-xl">
              <p className="text-lg font-semibold text-rose-200">
                No pudimos cargar las ofertas.
              </p>
              <p className="mt-2 text-sm text-slate-400">{error}</p>
            </div>
          </div>
        ) : (
          <>
            <FilterTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              counts={counts}
            />
            <PromoGrid promos={filtered} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
