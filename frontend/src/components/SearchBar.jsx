const SearchBar = () => {
    return (
        <div className="bg-[#F4E04D] px-4 py-3 border-2 border-black w-full max-w-[260px]">
            <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Title, author, host, or topic"
                    className="bg-transparent outline-none font-mono text-xs w-full placeholder-black"
                />
            </div>
        </div>
    );
};

export default SearchBar;
