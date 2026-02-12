import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-purple-900/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-lg">
                <div className="mb-6 flex justify-center">
                    <Compass size={80} className="text-slate-300 dark:text-slate-800 animate-pulse" />
                </div>

                <h1 className="text-8xl font-bold font-luxury text-slate-900 dark:text-white mb-2 tracking-widest">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 font-display">
                    Lost in the Void?
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    The page you are looking for has drifted away into the digital abyss.
                    Let's get you back on track to mastery.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-95"
                >
                    <Home size={18} />
                    Return to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
