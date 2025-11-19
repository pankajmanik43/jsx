import React, { useState, useEffect } from 'react';
import { Coffee, Code, GitCommit, Zap } from 'lucide-react';

export default function CodingPet() {
    const [points, setPoints] = useState(0);
    const [level, setLevel] = useState(1);
    const [petStage, setPetStage] = useState('egg');
    const [lastAction, setLastAction] = useState('');
    const [animation, setAnimation] = useState(false);

    const stages = [
        { name: 'egg', minPoints: 0, emoji: '🥚', title: 'Egg', message: 'Your pet is waiting to hatch!' },
        { name: 'hatchling', minPoints: 10, emoji: '🐣', title: 'Hatchling', message: 'Your pet has hatched! Keep coding!' },
        { name: 'junior', minPoints: 30, emoji: '🐥', title: 'Junior Developer', message: 'Growing strong with your commits!' },
        { name: 'developer', minPoints: 60, emoji: '🦆', title: 'Developer', message: 'Your skills are taking flight!' },
        { name: 'senior', minPoints: 100, emoji: '🦅', title: 'Senior Developer', message: 'Majestic and powerful!' },
        { name: 'legend', minPoints: 150, emoji: '🐉', title: 'Code Dragon', message: 'You\'ve reached legendary status!' }
    ];

    const actions = [
        { name: 'Write Code', icon: Code, points: 2, color: 'bg-blue-500 hover:bg-blue-600' },
        { name: 'Git Commit', icon: GitCommit, points: 3, color: 'bg-green-500 hover:bg-green-600' },
        { name: 'Debug', icon: Zap, points: 4, color: 'bg-yellow-500 hover:bg-yellow-600' },
        { name: 'Coffee Break', icon: Coffee, points: 1, color: 'bg-amber-600 hover:bg-amber-700' }
    ];

    useEffect(() => {
        const currentStage = stages.findLast(stage => points >= stage.minPoints);
        if (currentStage && currentStage.name !== petStage) {
            setPetStage(currentStage.name);
            setAnimation(true);
            setTimeout(() => setAnimation(false), 1000);
        }
        setLevel(Math.floor(points / 10) + 1);
    }, [points]);

    const handleAction = (action) => {
        setPoints(prev => prev + action.points);
        setLastAction(`+${action.points} for ${action.name}!`);
        setAnimation(true);
        setTimeout(() => setAnimation(false), 500);
    };

    const currentStage = stages.find(stage => stage.name === petStage);
    const nextStage = stages.find(stage => stage.minPoints > points);
    const progress = nextStage ?
        ((points - currentStage.minPoints) / (nextStage.minPoints - currentStage.minPoints)) * 100 : 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2 text-indigo-900">
                    CodePet 🚀
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Your coding companion that grows with your dev journey
                </p>

                {/* Pet Display */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
                    <div className="text-center mb-6">
                        <div className={`text-9xl mb-4 inline-block transition-all duration-500 ${animation ? 'scale-125 rotate-12' : 'scale-100'
                            }`}>
                            {currentStage.emoji}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {currentStage.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{currentStage.message}</p>
                        <div className="flex items-center justify-center gap-4 text-sm">
                            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
                                Level {level}
                            </span>
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                                {points} XP
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    {nextStage && (
                        <div className="mt-6">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>{currentStage.title}</span>
                                <span>{nextStage.title}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-2">
                                {nextStage.minPoints - points} XP until evolution
                            </p>
                        </div>
                    )}

                    {/* Last Action */}
                    {lastAction && (
                        <div className="mt-4 text-center">
                            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                                {lastAction}
                            </span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-3xl shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        Code to Level Up! 💻
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {actions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={action.name}
                                    onClick={() => handleAction(action)}
                                    className={`${action.color} text-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg`}
                                >
                                    <Icon className="w-6 h-6 mx-auto mb-2" />
                                    <div className="font-semibold text-sm">{action.name}</div>
                                    <div className="text-xs opacity-90">+{action.points} XP</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Info Footer */}
                <div className="mt-6 text-center text-sm text-gray-600 bg-white/50 backdrop-blur rounded-2xl p-4">
                    <p className="mb-2">
                        🎯 Click actions to simulate coding activities and watch your pet evolve!
                    </p>
                    <p>
                        {points < 150 ?
                            `Keep going! You're ${150 - points} XP away from becoming a Code Dragon!` :
                            'You\'ve mastered the art of code! 🎉'}
                    </p>
                </div>
            </div>
        </div>
    );
}