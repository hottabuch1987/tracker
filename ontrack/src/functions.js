import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES, HOURS_IN_DAY } from './constants'
export function normalizePageHash() {
    const hash = window.location.hash.slice(1)
  
    if ([PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES].includes(hash)){
      return hash
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
export function generateTimeLineItems() {
    const timeLineItems = []
    for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
        timeLineItems.push({ hour })
    }
    return timeLineItems
}