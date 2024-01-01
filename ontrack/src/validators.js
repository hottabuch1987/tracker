import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from "./constants"

export  function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
  }

export function validateTimeLineItems(timeLineItems) {
    return timeLineItems.every(isTimeLineItemValid)
  }

// 
export function isTimeLineItemValid({ hour }) {
    return isHourValid(hour) 
 }
export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1) 
}
function isBetween(value, start, end){
  return value >= start && value <= end
}
// 
export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}
// 

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
 }
function isSelectOptionValid({ value, label }) {
    return  isNumber(value) && isString(label)
}

export function isUndefineOrNull(value){
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  isNumber(value) || isNull(value)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
// undefined  null number string
function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return typeof value === 'number'
}
function isString(value) {
  return typeof value === 'string'
}


