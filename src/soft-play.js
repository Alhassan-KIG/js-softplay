// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  // children must be accompanied by atleast one adult
  if (numAdults === 0) {
    return false
  }

  // one adult per child
  if (numAdults < numChildren) {
    return false
  }

  adults = adults + numAdults
  children = children + numChildren
  return true
}
function leave(numAdults, numChildren) {
  // adults can't leave with multiple children
  if (numChildren > numAdults) {
    return false
  }

  // a child can't leave without an adult
  if (numChildren > 0 && numAdults === 0) {
    return false
  }
  // more people can't leave that what is in the softplay center
  if (numAdults > adults || numChildren > children) {
    return false
  }
  const remainingAdults = adults - numAdults
  const remainingChildren = children - numChildren
  // remaining adults needs to be greater than remaining children
  if (remainingAdults < remainingChildren) {
    return false
  }

  // if you are leaving children alone then NO!
  if (remainingAdults === 0 && remainingChildren > 0) {
    return false
  }

  adults = remainingAdults
  children = remainingChildren

  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
