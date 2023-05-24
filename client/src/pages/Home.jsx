import React, { useState, useEffect} from 'react';
import { Loader, Card, FormFields } from '../components';

const RenderCards = ({data, title}) => {
  if(data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return(
    <h2 className="mt-5 font-bold text-[#f74712] text-md uppercase">
      {title}
    </h2>
  )
}  

const Home = () => {
  const [ loading, setLoading] = useState(false);
  const [ allPosts, setallPosts] = useState(null);

  const [searchedText, setsearchedText] = useState('');
  const [searchedResults, setsearchedResults] = useState(null);
  const [searchTimeout, setsearchTimeout] = useState(null);

  useEffect(() => {
    const getThePosts = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://visionaryai-backend.onrender.com/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if(response.ok) {
          const result = await response.json();

          setallPosts(result.data.reverse());
        }

      } catch (error) {
        alert(error);

      } finally {
        setLoading(false);
      }
    }

    getThePosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setsearchedText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((post) => 
          post.name.toLowerCase().includes(searchedText.toLowerCase()) || post.prompt.toLowerCase().includes(searchedText.toLowerCase())
        );
        
        setsearchedResults(searchResults);
      },1000)
    );
  }

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#f11e1ee2] text-[32px]"> The VisionaryAI Gallery</h1>
        <p className="mt-2 text-[#55585b] text-[18px] max-w[500px]"> Indulge in a captivating journey of imaginative and visually captivating creative images brought to life by the VisionaryAI. Delve into a collection that showcases the boundless creativity and remarkable visuals generated by our advanced AI technology.
         <br/><br/>
         Prepare to be mesmerized by the remarkable visual creations crafted by numerous creators who push the boundaries of creativity....</p>
      </div>

      <div className="mt-16">
        <FormFields 
          LabelName="Search for posts : "
          name="text"
          type="text"
          value={searchedText}
          placeholder="Search for innovative posts by the creator name or prompt..."
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        { loading ? (
          <div className="flex justify-center items-center">
              <Loader />
          </div>

        ) : (
          <>
          {searchedText && (
            <h2 className="font-medium text-[#666e75] text-xl mb-3">
              Showing the results for : <span className="text-[#f20f1eef]">{searchedText}</span>
            </h2>
          )}
          <div className="grid lg:grid-cols-4 sm:cols-3
          xs:grid-cols-2 grid-cols-1 gap-3">
            {
              searchedText ? (
                <RenderCards 
                  data = {searchedResults}
                  title = "No search results found"
                />
              ) : (
                <RenderCards
                  data = {allPosts}
                  title = "No posts found"
                />
              )
            }
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home     

//http://localhost:8080 for local machine