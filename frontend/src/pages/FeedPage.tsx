import {Search} from 'lucide-react';
import { useState } from 'react';
import Header from '../components/feedpage/header';
import { useQuery } from '@tanstack/react-query';
import useFeed from '../hooks/useFeed';
import type { FeedItem } from '../types/feed-item.types';
import PlantInfoModal from '../components/feedpage/plant-info-modal';
import PlantCard from '../components/feedpage/plant-card';
import FullScreenLoader from '../components/react-loader';
import { useAtom } from 'jotai'
import { selectedPlantAtom, selectedPlantAIAtom } from '../atoms/plantAtoms'


export default function FeedPage() {

  const [plant] = useAtom(selectedPlantAtom);
  const [plantAI] = useAtom(selectedPlantAIAtom);


  const categories = ["All", "Medicinal", "Air Purifying", "Low Light", "Edible", "Succulents"];
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const {handlefetchFeedItems} = useFeed();
  const {data, isPending, error} = useQuery({
    queryKey:["feedItems"], 
    queryFn: handlefetchFeedItems
  }); 

  const filteredItems = data?.filter((item: FeedItem) => 
    (activeTab === "All" || item.genus === activeTab) &&
    (item.common_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.scientific_name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

   if (isPending) {
      return <FullScreenLoader />;
    }

    if (error) {
      console.log(error) ;
    }

  return (
    <>
   {plantAI && plant && <PlantInfoModal plant={plant} aiInfo={plantAI.choices[0].message.content}/>}
    
    <div className="bg-[#fcfdfb] min-h-screen text-slate-900 font-sans">
      <div className="min-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <Header categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {filteredItems?.map((item: FeedItem, index: number) => (
              <PlantCard key={item.id} item={item} index={index} />
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