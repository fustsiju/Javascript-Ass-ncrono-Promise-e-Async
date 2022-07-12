import axios from "axios";

axios.get("https://api.github.com/users/fustsiju").then((res) => {
  console.log(res.data);
});
