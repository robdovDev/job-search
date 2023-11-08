import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"

import JobListing from "@/components/job-results/JobListing.vue"

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    ...jobProps
  })

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }

  it("displays job title", () => {
    const jobProps = createJobProps({ title: "Vue Developer" })
    renderJobListing(jobProps)
    expect(screen.getByText("Vue Developer")).toBeInTheDocument
  })

  it("displays job organization", () => {
    const jobProps = createJobProps({ organization: "BDRET LLC" })
    renderJobListing(jobProps)
    expect(screen.getByText("BDRET LLC")).toBeInTheDocument
  })

  it("displays job locations", () => {
    const jobProps = createJobProps({
      locations: ["Oxnard", "Camarillo", "Ventura"]
    })
    renderJobListing(jobProps)
    expect(screen.getByText("Oxnard")).toBeInTheDocument
    expect(screen.getByText("Camarillo")).toBeInTheDocument
    expect(screen.getByText("Ventura")).toBeInTheDocument
  })

  it("displays minimum qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Vue", ".NET"]
    })
    renderJobListing(jobProps)
    expect(screen.getByText("Vue")).toBeInTheDocument
    expect(screen.getByText(".NET")).toBeInTheDocument
  })
})
