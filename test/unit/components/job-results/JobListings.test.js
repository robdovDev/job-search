import { render, screen } from "@testing-library/vue"
import axios from "axios"

import JobListings from "@/components/job-results/JobListings.vue"

vi.mock("axios")

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: {} })
    render(JobListings)
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
  })

  it("creates a listing for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    render(JobListings)
    const jobListings = await screen.findAllByRole("listitem")
    expect(jobListings).toHaveLength(15)
  })
})
