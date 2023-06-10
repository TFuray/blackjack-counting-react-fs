import matchers from "@testing-library/jest-dom/matchers"
import { clearnup } from "@testing-library/react"
import { afterEach, expect } from "vitest"

expect.extend(matchers)

afterEach(() => {
  clearnup()
})
