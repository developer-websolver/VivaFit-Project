import { Link } from "react-router-dom";

function BlogPage() {
    return (
        <div className="min-h-screen bg-[#061512] pt-40 text-white">
            {/* Breadcrumb Header */}
            <div className="border-b border-white/10 bg-[#061512]">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
                    <h4 className="text-sm font-semibold tracking-wide sm:text-base">
                        Our Services
                    </h4>

                    <nav aria-label="Breadcrumb">
                        <ul className="flex items-center gap-2 text-xs text-white/70 sm:gap-3">
                            <li>
                                <Link to="/" className="transition hover:text-[#B6FF00]">
                                    Home
                                </Link>
                            </li>

                            <li aria-hidden="true" className="text-white/40">
                                /
                            </li>

                            <li>
                                <Link
                                    to="/blogs"
                                    className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/15"
                                    aria-current="page"
                                >
                                    Our Blogs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="bg-[#0F1C1A]">
                <span className="inline-flex rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
                    
                </span>
                    <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">

                    Knowledge for <span className="text-[#B6FF00]">Stronger</span>You.
                 
                </h2>
            </div>
        </div>
    )
}

export default BlogPage;