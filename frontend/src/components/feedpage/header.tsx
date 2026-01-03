import { Leaf } from "lucide-react"

export default function Header({categories, activeTab, setActiveTab}: {
  categories: string[],
  activeTab: string,
  setActiveTab: (tab: string) => void
}) {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-up">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <Leaf className="text-primary w-8 h-8" />
                <span className="font-bold tracking-widest text-xs uppercase text-primary">Grow Together</span>
            </div>
            <h1 className="text-5xl font-black tracking-tight">
              Community <span className="text-primary">Greenfeed</span>
            </h1>
            <p className="text-slate-500 mt-2 text-lg">Discover unique plants and their hidden benefits.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border
                ${activeTab === cat 
                    ? 'bg-primary text-white border-primary shadow-md shadow-green-200' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>
  )
}
