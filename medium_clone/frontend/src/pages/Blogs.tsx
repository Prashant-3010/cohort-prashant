import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar/>
        <div className="flex justify-center ">
            <div className=" max-w-xl">
                <BlogCard
                    authorName="Prashant Parashar"
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man"
                    publishedDate="19th Apr 2025" />
                <BlogCard
                    authorName="Prashant Parashar"
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man"
                    publishedDate="19th Apr 2025" />
                <BlogCard
                    authorName="Prashant Parashar"
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man"
                    publishedDate="19th Apr 2025" />
                <BlogCard
                    authorName="Prashant Parashar"
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man"
                    publishedDate="19th Apr 2025" />
            </div>

        </div>
    </div>

}