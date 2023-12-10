import { useUserStore } from "@/stores/user"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach } from "vitest"

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("keeps track if user is logged in", () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(false)
  })
})

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("logs the user in", () => {
    const store = useUserStore()
    store.loginUser()
    expect(store.isLoggedIn).toBe(true)
  })

  it("logs the user out", () => {
    const store = useUserStore()
    store.logoutUser()
    expect(store.isLoggedIn).toBe(false)
  })
})
