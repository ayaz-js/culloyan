import { createContext, useContext } from 'react'
import type { FormatId } from '@/data/content'

type ApplyContextValue = {
  openApply: (format?: FormatId) => void
}

export const ApplyContext = createContext<ApplyContextValue>({ openApply: () => {} })

export const useApply = () => useContext(ApplyContext)
