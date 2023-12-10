import { render, screen } from "@testing-library/vue"
import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { RouterLinkStub } from "@vue/test-utils"

import MainNav from "@/components/navigation/MainNav.vue"
import { useUserStore } from "@/stores/user"

describe("MainNav", () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia()
    const $route = {
      name: "Home"
    }
    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it("displays the company name", () => {
    renderMainNav()
    const coName = screen.getByText("BDNet")
    expect(coName).toBeInTheDocument()
  })
  it("displays menu navigation items", () => {
    renderMainNav()
    const navItems = screen.getAllByRole("listitem")
    const navTexts = navItems.map((item) => item.textContent)
    expect(navTexts).toEqual([
      "Teams",
      "Locations",
      "Life at BDRET",
      "How we hire",
      "Students",
      "Jobs"
    ])
  })

  describe("when the user logs in", () => {
    it("displays the profile picture", async () => {
      renderMainNav()
      const userStore = useUserStore()
      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole("button", {
        name: /sign in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)

      profileImage = screen.getByRole("img", {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })

  describe("when the user logs out", () => {
    it("displays the displays the sign in button", async () => {
      renderMainNav()
      const userStore = useUserStore()
      let loginButton = screen.queryByRole("button", {
        name: /sign in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)

      const profileImage = screen.getByRole("img", {
        name: /user profile image/i
      })
      userStore.isLoggedIn = false
      await userEvent.click(profileImage)

      loginButton = screen.getByRole("button", {
        name: /sign in/i
      })
      expect(loginButton).toBeInTheDocument()
    })
  })
})
