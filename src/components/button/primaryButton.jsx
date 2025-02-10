"use client";

export default function primaryButton({label, onClick}) {
  return (
    <div>
      <button 
        onClick={onClick}
        className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded"
        >
        {label}
      </button>
    </div>
  )
}