import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"
import axios from "axios"

import JobListings from "@/components/job-results/JobListings.vue"

vi.mock("axios")

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams
    }
  })

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: {} })

    const $route = createRoute()
    renderJobListings($route)

    const baseUrl = import.meta.env.VITE_APP_API_URL
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/jobs`)
  })

  it("displays a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })

    const $route = createRoute({ page: "1" })
    renderJobListings($route)

    const jobListings = await screen.findAllByRole("listitem")
    expect(jobListings).toHaveLength(10)
  })

  describe("when params omit page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined })

      renderJobListings($route)

      expect(screen.getAllByText("Page 1")[0]).toBeInTheDocument()
    })
  })

  describe("when params include page number", () => {
    it("displays page number", () => {
      const $route = createRoute({ page: "3" })

      renderJobListings($route)

      expect(screen.getAllByText("Page 3")[0]).toBeInTheDocument()
    })
  })

  describe("when user is on first page", () => {
    it("does not display link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "1" })

      renderJobListings($route)

      await screen.findAllByRole("listitem")
      expect(
        screen.queryByRole("link", { name: /previous/i })
      ).not.toBeInTheDocument()
    })

    it("displays link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "1" })

      renderJobListings($route)

      await screen.findAllByRole("listitem")
      expect(screen.queryByRole("link", { name: /next/i })).toBeInTheDocument()
    })
  })

  describe("when user is on last page", () => {
    it("does not display link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "2" })

      renderJobListings($route)

      await screen.findAllByRole("listitem")
      expect(
        screen.queryByRole("link", { name: /next/i })
      ).not.toBeInTheDocument()
    })

    it("displays link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const $route = createRoute({ page: "2" })

      renderJobListings($route)

      await screen.findAllByRole("listitem")
      expect(
        screen.queryByRole("link", { name: /previous/i })
      ).toBeInTheDocument()
    })
  })
})
