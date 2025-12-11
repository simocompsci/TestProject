import { useState } from 'react';

const CategoryFilter = () => {
    const [activeCategory, setActiveCategory] = useState('Everything');

    const categories = [
        'Everything',
        'Ebooks',
        'Audiobook',
        'Magazinen',
        'Podcast',
        'E-learning',
        'Comics',
    ];

    return (
        <div className="mb-6">
            <h2 className="font-mono text-sm mb-3 font-bold">Categories</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 text-xs font-mono border border-black transition-colors ${activeCategory === category
                                ? 'bg-[#FF6B3D] text-white'
                                : 'bg-white hover:bg-gray-50'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
