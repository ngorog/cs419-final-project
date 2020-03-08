import axios from "axios";

export default axios.create({
	baseURL: `https://na1.api.riotgames.com`,
	headers: {}
});
