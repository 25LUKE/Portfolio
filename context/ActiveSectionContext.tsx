'use client'

import { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'


type ActiveSectionContextProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType ={
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProps) {
    const [activeSection, setActiveSection] = useState<SectionName >('Home')
    const [timeOfLastClick, setTimeOfLastClick ] = useState(0) // We need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}
    >
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            'useActiveSectionContext must be within a ActiveSectionContextProvider'
        )
    }
    return context;
}
