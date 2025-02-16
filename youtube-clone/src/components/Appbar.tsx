import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between">
        <div className="text-md inline-flex items-center pb-2">
            <img className="w-10 h-5"src="./youtubelogo.jpg"/>
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            Sign In
        </div>

    </div>
}