import React from "react";

function HomePage() {
  return (
    <div className="grid grid-cols-4 mt-10">
      <div className="bg-gradient-to-br from-violet-400 to-rose-400 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-2">
        <div className="bg-white rounded-2xl p-6 h-full">
          <div className="relative mb-4 group">
            <img
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"
              alt="Kitap Kapağı"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">Preview</span>
            </div>
          </div>

          <h3 className="text-slate-800 font-bold text-xl mb-1">Suç ve Ceza</h3>
          <p className="text-gray-600 text-sm mb-4">Fyodor Dostoyevski</p>

          <div className="flex gap-2 mb-4">
            <span className="bg-violet-100 text-violet-700 px-3 py-1.5 rounded-lg text-xs font-semibold">
              Klasik
            </span>
            <span className="bg-rose-100 text-rose-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
              ⭐ 4.8
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Score</span>
              <span className="text-violet-700 font-bold">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-violet-500 to-rose-400 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-violet-500 to-rose-400 hover:from-violet-600 hover:to-rose-500 text-white py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
            Devam Et →
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
