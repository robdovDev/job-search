import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

import JobSearchForm from "@/components/job_search/JobSearchForm.vue"

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job listing with user's search parameters", async () => {
      const push = vi.fn()
      const $router = { push }
      render(JobSearchForm, {
        global: {
          mocks: {
            $router
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const roleInput = screen.getByRole("textbox", {
        name: /role/i
      })
      await userEvent.type(roleInput, "Vue Developer")

      const locInput = screen.getByRole("textbox", {
        name: /where?/i
      })
      await userEvent.type(locInput, "Los Angeles, CA")

      const submitBtn = screen.getByRole("button", {
        name: /search/i
      })
      await userEvent.click(submitBtn)

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          loc: "Los Angeles, CA"
        }
      })
    })
  })
})
