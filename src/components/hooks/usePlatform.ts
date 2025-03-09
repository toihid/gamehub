import platforms from "../../data/platforms";
import useData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}
//const usePlatform = () => useData<Platform>('/platforms/lists/parents');
const usePlatform = () => ({data: platforms, isLoading: null, error: null });

export default usePlatform