import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'
import './index.css'

// ViteReactSSG handles both SSG (build) and client-side hydration
export const createRoot = ViteReactSSG({ routes })
