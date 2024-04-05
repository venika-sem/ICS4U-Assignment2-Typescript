/* This program finds the max run of a string
* By Venika Sem
* @version 1.0
* @since Feb-2024
*/

import { createPrompt } from "bun-promptx"

function maxRunFunction(inputStr) {
  let maxRun = 0
  let currentRun = 0

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === inputStr[i + 1]) {
      currentRun++
      if (currentRun > maxRun) {
        maxRun = currentRun
      }
    } else {
        currentRun = 1
    }
  }

  return maxRun
}

const input = createPrompt("Enter a string: ")
const inputStr = input.value

if (inputStr.length) {
  let maxRun = maxRunFunction(inputStr)
  console.log(`The string "${inputStr}" has a max run of ${maxRun}!`)
} else {
  console.log("Invalid input.")
}
console.log("\nDone.")
