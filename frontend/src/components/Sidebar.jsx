import { useState } from 'react';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');

    const navItems = [
        { id: 'fire', icon: '🔥', label: 'Fire' },
        { id: 'home', icon: '🏠', label: 'Home', iconAlt: 'house-fill' },
        { id: 'category', icon: '⊞', label: 'Category' },
        { id: 'library', icon: '📖', label: 'Library' },
        { id: 'download', icon: '⬇', label: 'Download' },
        { id: 'saved', icon: '🔖', label: 'Saved' },
        { id: 'settings', icon: '⚙', label: 'Settings' },
        { id: 'support', icon: '🎧', label: 'Support' },
        { id: 'logout', icon: '🚪', label: 'Logout' },
    ];

    return (
        <div className="w-[140px] bg-[#E8DFD3] border-r-2 border-black flex flex-col items-center py-6 gap-8">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex flex-col items-center gap-1 transition-colors group ${activeItem === item.id ? 'text-[#FF6B3D]' : 'text-black hover:text-[#FF6B3D]'
                        }`}
                >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-[11px] font-mono">{item.label}</span>
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
