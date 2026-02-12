import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Database, Server } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <Link to="/settings" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mb-6 font-medium">
                        <ArrowLeft size={18} />
                        Back to Settings
                    </Link>
                    <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        Last Updated: February 2026
                    </p>
                </header>

                <div className="space-y-12">
                    <section className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Local First Architecture</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    VERTEX follows a strict "Local-First" philosophy. Your progress, syllabus tracking, revision queue, and settings are stored entirely on your device using <strong>IndexedDB</strong> and <strong>LocalStorage</strong>. We do not transmit your learning data to any cloud server.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Database size={24} className="text-indigo-500" />
                            Data Collection
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p>
                                We do not collect, store, or share any personal information. You do not need to create an account or login to use VERTEX.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Personal Data:</strong> None collected.</li>
                                <li><strong>Usage Data:</strong> None collected.</li>
                                <li><strong>Cookies:</strong> Not used for tracking. Only strictly necessary storage for app preferences (theme, expansion state).</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Server size={24} className="text-purple-500" />
                            Third-Party Services
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p>
                                VERTEX is hosted as a static site. The only external connections occur when:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>You visit external links to resources (Youtube, MDN, Blogs).</li>
                                <li>You choose to "Buy me a Pizza" (redirects to BuyMeACoffee).</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Lock size={24} className="text-rose-500" />
                            Data Security
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p>
                                Since data never leaves your device, you remain in full control. If you clear your browser cache or "Reset Data" in Settings, your progress is permanently deleted from your device.
                            </p>
                        </div>
                    </section>
                </div>

                <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
                    <p>&copy; 2026 Akshit Kamboz. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
