import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-blue-950 w-[100%] px-16 py-6 z-10">
            <ul className="flex gap-10 text-white font-semibold text-xl">
                <Link className="hover:text-zinc-300" href="/"><li>Home</li></Link>
                <Link className="hover:text-zinc-300" href="/docs"><li>Documentation</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;