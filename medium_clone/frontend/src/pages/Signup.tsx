import { Auth } from "../components/Auth.tsx"
import { Quote } from "../components/Quote.tsx"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="invisible md:visible">
                <Quote/>
            </div>
        </div>
    </div>
}