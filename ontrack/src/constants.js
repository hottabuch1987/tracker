import { ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'

export const PAGE_TIMELINE = 'время'
export const PAGE_ACTIVITIES = 'активность'
export const PAGE_PROGRESS = 'прогресс'

export const HOURS_IN_DAY = 24

export const NAV_ITEMS = {
    [PAGE_TIMELINE]: ClockIcon, 
    [PAGE_ACTIVITIES]: ListBulletIcon, 
    [PAGE_PROGRESS]: ChartBarIcon,
  }