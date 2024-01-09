import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR } from './constants'
import { isPageValid } from './validators'
export function normalizePageHash() {
    const page = window.location.hash.slice(1)
  
    if (isPageValid(page)){
      return page
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }

export function genereteActivities() {
  return ['Работа', 'Отдых', 'Тренировки'].map((name, hours) => ({
    id: id(),
    name,
    seondsToComplete: hours * SECONDS_IN_HOUR
  }))

}
export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTimeLineItems() {
    const timelineItems = []
    
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour })
    }
    return timelineItems
}

export function genereteActivitySelectOptions(activities) {
  return activities.map((activity) => 
    ({value: activity.id, label: activity.name}))
}