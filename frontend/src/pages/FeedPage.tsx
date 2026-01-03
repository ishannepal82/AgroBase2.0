import { Heart, Search, Leaf } from 'lucide-react';
import React, { useState } from 'react';
import Header from '../components/feedpage/header';
import { useQuery } from '@tanstack/react-query';
import useFeed from '../hooks/useFeed';
import type { FeedItem } from '../types/feed-item.types';
import PlantInfoModal from '../components/feedpage/plant-info-modal';
const categories = ["All", "Medicinal", "Air Purifying", "Low Light", "Edible", "Succulents"];

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlant, setSelectedPlant] = useState<FeedItem | null>(null);

  const {fetchFeedItems} = useFeed();
  const {data, isPending, error} = useQuery({
    queryKey:["feedItems"], 
    queryFn: fetchFeedItems
  }); 
  console.log("Fetched Feed Items:", data);
  const filteredItems = data?.filter((item: FeedItem) => 
    (activeTab === "All" || item.genus === activeTab) &&
    (item.common_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.scientific_name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
    {selectedPlant && (<PlantInfoModal selectedPlant={selectedPlant} setSelectedPlant={setSelectedPlant} />)}
    
    <div className="bg-[#fcfdfb] min-h-screen text-slate-900 font-sans">
      <div className="min-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <Header categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="columns-1 sm:columns-3 gap-8 space-y-8">
              {filteredItems?.map((item: FeedItem, index: number) => (
                <div 
                  key={item.id} 
                  className="relative group break-inside-avoid rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={item.image_url} 
                    alt={item.common_name}
                    className="w-fit h-fit object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                    <span className="text-primary font-bold text-xs uppercase tracking-tighter mb-1">Key Benefit</span>
                    <h3 className="text-white text-2xl font-bold mb-4">{item.genus}</h3>
                    <div className="flex justify-between items-center">
                        <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold"
                        onClick={() => setSelectedPlant(item)}>Learn More</button>
                        <Heart className="w-6 h-6 text-white hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Always Visible Footer */}
                  <div className="p-6 flex justify-between items-center group-hover:bg-slate-50 transition-colors">
                    <div>
                      <h4 className="font-black text-lg">{item.common_name}</h4>
                      <p className="text-xs text-slate-400 font-medium italic">Genus: {item.genus.split(' ')[0]} Index</p>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-full">
                        <Leaf className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-slate-100 border border-slate-200/50">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" /> Quick Finder
              </h3>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plants or benefits..." 
                className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-inner focus:ring-2 focus:ring-primary outline-none text-sm"
              />
            </div>

            <div className="p-8 rounded-[2.5rem] bg-primary/10 text-primary shadow-2xl shadow-green-200 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-black bg-black/20 px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-widest">Daily Insight</span>
                <h3 className="text-2xl font-bold mb-3">Air Purifiers</h3>
                <p className="text-sm text-secondary leading-relaxed opacity-90">
                  Did you know that certain plants like the Peace Lily can remove up to 60% of airborne toxins?
                </p>
                <button className="mt-6 text-sm font-bold bg-white text-primary px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
                    Read Study
                </button>
              </div>
              <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">🍃🍃</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}