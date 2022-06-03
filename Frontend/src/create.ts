import axios from "axios"

function create() {
  return {
    createUser: async function () {
      try {
        // console.log("funfando!")
        // const { data } = await axios.post("http://localhost:3000/user/create")
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  }
}

export default create
