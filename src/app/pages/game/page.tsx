
//ここでAPI/weatherInfoAPI/root.tsを呼び出す
'use client'
import GetEndPoint from '@/components/GetEndPoint'
import { useState } from 'react'
export default function Game() {
    const [cards, setCards] = useState(['あ','い'])//ここにエンドポイントからフェッチしてきた地名や天気気温を入力すればよさそう
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1>ここでapiのエンドポイントにアクセス。APIディレクトリのルートから外部のAPI（PythonかGoでつくる）</h1>
        
          
          <div className="grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                  <div key={index} className="w-32 h-48 bg-white border-2 border-gray-300 rounded-lg shadow-md flex items-center justify-center text-2xl font-bold cursor-pointer hover:bg-gray-200 transition-colors duration-200">
                      {card}
                  </div>
              ))}
          </div>
      </div>
    )
}