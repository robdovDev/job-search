const axios = require("axios")

const fetchJobs1 = () => {
  axios.get("http://localhost:3000/jobs/1").then((response) => {
    console.log(response.data)
  })
}

const fetchJobs2 = async () => {
  const response = await axios.get("http://localhost:3000/jobs/1")
  console.log(response.data)
}

fetchJobs2()
