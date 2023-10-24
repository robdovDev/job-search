import { render, screen } from "@testing-library/vue"
import SubNav from "@/components/navigation/SubNav.vue"

describe("SubNav", () => {
  const renderSubNav = (routeName) => {
    const $route = {
      name: routeName
    }

    render(SubNav, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      renderSubNav("JobResults")
      const jobCount = screen.getByText("1,653")
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      renderSubNav("")
      const jobCount = screen.queryByText("1,653")
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
