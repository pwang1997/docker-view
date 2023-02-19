import axios from "axios";

export const fetchDockerAppVersion = async() => 
await axios.get(`http://localhost/api/v1/container/getVersion`)
.then(res => {
    console.log(res)
    return res.data;
});
