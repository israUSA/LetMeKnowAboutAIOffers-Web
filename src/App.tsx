import { useMemo, useState } from 'react'
import { FilterTabs } from './components/FilterTabs'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { NotificationTeaser } from './components/NotificationTeaser'
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
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      <main>
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalOffers={promos.length}
        />

        {loading ? (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-5 animate-pulse"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-200" />
                    <div className="flex-1">
                      <div className="h-3 w-16 bg-slate-200 rounded mb-2" />
                      <div className="h-4 w-40 bg-slate-200 rounded" />
                    </div>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded mb-2" />
                  <div className="h-3 w-3/4 bg-slate-100 rounded mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-28 bg-slate-100 rounded-full" />
                    <div className="h-8 w-20 bg-slate-200 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-16 px-4">
            <p className="text-red-500 text-lg">Error al cargar las ofertas.</p>
            <p className="text-slate-400 text-sm mt-1">{error}</p>
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

        <NotificationTeaser />
      </main>

      <Footer />
    </div>
  )
}

export default App
