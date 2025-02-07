"use client";
export default function primaryButton({label, onClick}) {
  return (
    <div>
      <button 
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
        {label}
      </button>
    </div>
  )
}
