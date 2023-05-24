import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormFields, Loader } from '../components'

const Create = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  const generateImage = async () => {
    if(form.prompt){
      try {
        setgeneratingImg(true);

        const reponse = await fetch('https://visionaryai-backend.onrender.com/api/v1/gen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({prompt: form.prompt}),        
        })
        
        const data = await reponse.json();

        setform({...form, photo: `data:image/jpeg;base64,${data.photo}`})

      } catch (error) {
        alert(error);        
      } finally {
        setgeneratingImg(false);
      }

    }else{
      alert("Please enter a prompt");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.prompt && form.photo){
      setloading(true);

      try {
        const response = await fetch('https://visionaryai-backend.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        await response.json();
        navigate('/');

      } catch (error) {
        alert(error);

      } finally {
          setloading(false);
      }
    } else {
      alert('Please enter a prompt and generate a image');
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name] : e.target.value })
  }

  const handleSuggestMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setform({ ...form, prompt: randomPrompt})
  }

  return (
    <section className="max-w-7x1 mx-auto">
     <div>
        <h1 className="font-extrabold text-[#fb0c0cfd] text-[36px]"> Create </h1>
        <p className="mt-2 text-[#55585b] text-[18px] max-w[500px]"> Unleash your imagination and create captivating, beautiful images using VisionaryAI, and showcase them in our gallery.</p>
      </div>

      <form className="mt-16 max-w-3xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormFields
            LabelName = "Your Name : "
            type = "text"
            name = "name"
            placeholder = "Aman Jain"
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormFields
            LabelName = "Prompt : "
            type = "text"
            name = "prompt"
            placeholder = "A cupcake with legs and arms dancing on a stage."
            value = {form.prompt}
            handleChange = {handleChange}
            isSuggestMe
            handleSuggestMe = {handleSuggestMe}
          />

          <div className="relative bg-gray-50 border border-gray-500 text-gray-800 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-64 p-3 h-64 flex justify-center items-center ">
            { form.photo ? (
                <img 
                  src={form.photo} 
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                  <img
                    src={preview}   
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain opacity-40" 
                  />
              )
            }

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]">
                <Loader/>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-blue-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            { generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px] ">
            Once you have created the image, you can share it at the VisionaryAI Gallery.
          </p>
          <button 
            className="mt-3 text-white bg-[#f11e1ee2] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center "
            type="submit">
            {loading ? 'Sharing...' : 'Share with Gallery'}
          </button>
        </div>
      </form>
    </section>
    
  )
}

export default Create

//http://localhost:8080 for local machine