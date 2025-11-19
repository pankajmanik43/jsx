import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Search, TrendingDown, TrendingUp, CreditCard, Shield, User, Briefcase, Star } from 'lucide-react';

const Dashboard = () => {
  const data = {
    "header": {
      "title": "Hello, Carlic!",
      "subtitle": "Explore information and activity about your property",
      "searchPlaceholder": "Search..."
    },
    "statsTop": [
      {
        "label": "Spent this month",
        "value": "$682.5",
        "type": "money"
      },
      {
        "label": "New clients",
        "value": 321,
        "type": "count"
      },
      {
        "label": "Earnings",
        "value": "$350.40",
        "type": "money"
      },
      {
        "label": "Activity",
        "value": "$540.50",
        "type": "money"
      }
    ],
    "balanceCard": {
      "title": "Balance",
      "status": "On track",
      "percentage": 43.50,
      "amount": "$52,422",
      "trend": "-12.9%",
      "chartData": [32, 45, 28, 55, 60, 40, 50]
    },
    "earningsCard": {
      "title": "Earnings",
      "value": "$6078.76",
      "description": "Profit is 34% more than last month",
      "progress": 80
    },
    "profileCard": {
      "name": "Carlic Bolomboy",
      "email": "carlic@gmail.com",
      "stats": {
        "projects": 26,
        "clients": 356,
        "reviews": 68
      }
    },
    "availableCredit": {
      "title": "Available Credit Card in Wallet",
      "cards": [
        {
          "bank": "Green Bank",
          "cardNumber": "**** **** **** 3456",
          "limit": "$10,000",
          "valid": "08/28"
        }
      ]
    },
    "transfers": {
      "title": "Your Transfers",
      "items": [
        {
          "from": "Anna Jones",
          "amount": "-$142.89",
          "status": "completed"
        },
        {
          "from": "Carlos Brown",
          "amount": "-$82.40",
          "status": "completed"
        },
        {
          "from": "Joel Canan",
          "amount": "+$240.00",
          "status": "received"
        }
      ]
    },
    "securityCard": {
      "title": "Keep you safe!",
      "message": "Update your security password frequently"
    }
  };

  const chartData = data.balanceCard.chartData.map((value, index) => ({
    value: value
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.header.title}</h1>
          <p className="text-gray-600 mb-4">{data.header.subtitle}</p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={data.header.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {data.statsTop.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Balance Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{data.balanceCard.title}</h3>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{data.balanceCard.status}</span>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{data.balanceCard.amount}</p>
                <div className="flex items-center justify-end mt-1">
                  <TrendingDown size={16} className="mr-1" />
                  <span className="text-sm">{data.balanceCard.trend}</span>
                </div>
              </div>
            </div>
            <div className="h-32 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="white" 
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm">
              <span className="opacity-80">{data.balanceCard.percentage}% of your goal achieved</span>
            </div>
          </div>

          {/* Earnings Card */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.earningsCard.title}</h3>
            <p className="text-3xl font-bold text-gray-800 mb-2">{data.earningsCard.value}</p>
            <p className="text-sm text-gray-600 mb-4">{data.earningsCard.description}</p>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${data.earningsCard.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">{data.earningsCard.progress}% complete</p>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {data.profileCard.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{data.profileCard.name}</h3>
                <p className="text-sm text-gray-500">{data.profileCard.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{data.profileCard.stats.projects}</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <User size={20} className="text-green-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{data.profileCard.stats.clients}</p>
                <p className="text-xs text-gray-500">Clients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star size={20} className="text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{data.profileCard.stats.reviews}</p>
                <p className="text-xs text-gray-500">Reviews</p>
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.availableCredit.title}</h3>
            {data.availableCredit.cards.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-5 text-white">
                <div className="flex justify-between items-start mb-6">
                  <CreditCard size={32} />
                  <p className="text-sm font-medium">{card.bank}</p>
                </div>
                <p className="text-lg font-mono mb-4 tracking-wider">{card.cardNumber}</p>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Limit</p>
                    <p className="font-semibold">{card.limit}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80 mb-1">Valid Thru</p>
                    <p className="font-semibold">{card.valid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transfers & Security */}
          <div className="space-y-6">
            {/* Transfers */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.transfers.title}</h3>
              <div className="space-y-3">
                {data.transfers.items.map((transfer, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-800">{transfer.from}</p>
                      <p className="text-xs text-gray-500 capitalize">{transfer.status}</p>
                    </div>
                    <p className={`font-bold ${transfer.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {transfer.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 shadow-md text-white">
              <div className="flex items-center mb-3">
                <Shield size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">{data.securityCard.title}</h3>
              </div>
              <p className="text-sm opacity-90">{data.securityCard.message}</p>
              <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;