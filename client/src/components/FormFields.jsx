import React from 'react'

const FormFields = ({LabelName, type, name, placeholder, value, handleChange, isSuggestMe, handleSuggestMe}) => {

  return (
    <div>

      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-md text-red-600 font-semibold">
          {LabelName}
        </label>
        
        {isSuggestMe && (
          <button
            type = "button"
            onClick = {handleSuggestMe}
            className = "font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
              Suggest Me
          </button>
        )}
      </div>

      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value} 
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-500 text-gray-800 border text-sm rounded-lg focus:ring-[#ff3b5c] outline-none block w-full p-3"  
        autocomplete="off"     
      />
    </div>
  )
}

export default FormFields