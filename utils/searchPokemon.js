import api from "../services/api";

export const searchPokemon = async (pokemon, signal) => {
    try {
        const response = await api.get(`/pokemon/${pokemon.toLowerCase().trim()}`, {
            cancelToken: signal.token
        });
        if (response.status === 404) return null;

        const data = await response.data
        return data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("Request cancelled");
        } else {
            console.log(error);
        }
    }
}