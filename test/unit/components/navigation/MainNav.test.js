import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import { RouterLinkStub } from "@vue/test-utils"

import MainNav from "@/components/navigation/MainNav.vue"

describe("MainNav", () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
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
      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole("button", {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole("img", {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })

  describe("when the user logs out", () => {
    it("displays the displays the sign in button", async () => {
      render(MainNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            isLoggedIn: true
          }
        }
      })
      let loginButton = screen.queryByRole("button", {
        name: /sign in/i
      })
      expect(loginButton).not.toBeInTheDocument()

      const profileImage = screen.getByRole("img", {
        name: /user profile image/i
      })
      await userEvent.click(profileImage)

      loginButton = screen.getByRole("button", {
        name: /sign in/i
      })
      expect(loginButton).toBeInTheDocument()
    })
  })
})
