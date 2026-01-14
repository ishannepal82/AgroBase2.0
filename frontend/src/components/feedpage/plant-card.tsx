import { useState } from 'react'
import { Heart, Leaf } from 'lucide-react'
import type { FeedItem } from '../../types/feed-item.types'
import { useQuery } from '@tanstack/react-query'
import useFeed from '../../hooks/useFeed'
import '../../index.css' // Ensure your CSS is imported
import FullScreenLoader from '../react-loader'
import { useSetAtom } from 'jotai'
import { selectedPlantAtom } from '../../atoms/plantAtoms'
import { selectedPlantAIAtom } from '../../atoms/plantAtoms'
import { useEffect } from 'react'

export default function PlantCard({ item, index }: { 
    item: FeedItem, 
    index: number
}) {
    
    const { handlefetchAIResponse } = useFeed();
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);

    const setSelectedPlant = useSetAtom(selectedPlantAtom)
    const setSelectedPlantAI = useSetAtom(selectedPlantAIAtom)

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['plantInfo', item.id],
        queryFn: () => handlefetchAIResponse(item),
        enabled: false,
        retry: false,
    });

    const handleClick = () => {
        if (!hasFetched) {
            refetch();
            setHasFetched(true);
        }
        setSelectedPlant(item);
    };

    useEffect(() => {
    if (data) {
        setSelectedPlant(item)
        setSelectedPlantAI(data)
    }
    }, [data, item, setSelectedPlant, setSelectedPlantAI])

    if (isError) {
        console.log(error);
    }

    if (isLoading) {
        return <FullScreenLoader />;
    }

    return (
        <div
            key={item.id}
            className="relative group break-inside-avoid rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square overflow-hidden bg-slate-50">
                {/* Skeleton Overlay */}
                {!isLoaded && (
                    <div className="absolute inset-0 skeleton z-10" />
                )}

                <img
                    src={item.image_url}
                    alt={item.common_name}
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                        isLoaded ? 'img-loaded' : 'img-loading'
                    }`}
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end z-20`}>
                    <span className="text-primary font-bold text-xs uppercase tracking-tighter mb-1">Key Benefit</span>
                    <h3 className="text-white text-2xl font-bold mb-4">{item.genus}</h3>
                    <div className="flex justify-between items-center">
                        <button 
                            className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-100 transition-colors"
                            onClick={handleClick}  // <-- call manual fetch + select plant
                            disabled={isLoading}   // disable while loading
                        >
                            {isLoading ? 'Loading...' : 'Learn More'}
                        </button>
                        <Heart className="w-6 h-6 text-white hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>

            {/* Always Visible Footer */}
            <div className="p-6 flex justify-between items-center group-hover:bg-slate-50 transition-colors">
                <div>
                    <h4 className="font-black text-lg">{item.common_name}</h4>
                    <p className="text-xs text-slate-400 font-medium italic">
                        Genus: {item.genus.split(' ')[0]}
                    </p>
                </div>
                <div className="bg-slate-100 p-2 rounded-full">
                    <Leaf className="w-4 h-4 text-slate-400" />
                </div>
            </div>
        </div>
    )
}
