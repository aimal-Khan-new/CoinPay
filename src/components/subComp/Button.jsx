import React from 'react'

function Button({ text, paddingX, paddingY, background, color }) {
  return (
    <button
    style={{height:`${paddingY}px`,paddingRight:`${paddingX}px`, paddingLeft:`${paddingX}px`, backgroundColor:`${background}`, color:`${color}`}}
    className=" cursor-pointer bg-blue-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-5 py-2 rounded-full border-[1px] border-slate-500 text-white font-medium group"
    >
      <div className="relative overflow-hidden flex">
        <p
          className="group-hover:-translate-y-20 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          {text}
        </p>
        <p
          className="absolute top-11 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          {text}
        </p>
      </div>
    </button>

  )
}

export default Button
