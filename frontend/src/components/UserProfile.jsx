const UserProfile = ({ user }) => {
    return (
        <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-black">
            <div className="flex items-center gap-3">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full border-2 border-black object-cover"
                />
                <div>
                    <h3 className="font-mono text-sm font-bold">{user.name}</h3>
                    <p className="font-mono text-[10px] text-gray-600">{user.status}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="text-red-500 hover:scale-110 transition-transform text-lg">
                    ♥
                </button>
                <button className="hover:scale-110 transition-transform text-lg">
                    🔔
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
