import { atom } from 'jotai'
import type { FeedItem } from '../types/feed-item.types';

export const selectedPlantAtom = atom<FeedItem | null>(null)

export const selectedPlantAIAtom = atom<any | null>(null)
