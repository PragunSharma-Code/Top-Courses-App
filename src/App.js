import "./App.css";
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Courses from './components/Courses';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  function currClickedCategoryHandler(currCategory) {
    // console.log(currCategory);
    setCategory(currCategory);
  }

  async function response() {
    try {
      setLoading(true);
      let resp = await fetch(apiUrl);
      let apidata = await resp.json();
      // console.log(data);
      // toast.success('Data Fetched!');
      setCourses(apidata.data);


    } catch (e) {
      console.log('Error: ' + e);
    }
    setLoading(false);
  }
  useEffect(() => {
    response();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar />
      <div className="bg-bgDark2">
      <Filters categories={filterData} currClickedCategory={currClickedCategoryHandler} />
      </div>

      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Courses api_data={courses} category={category} />)
        }
      </div>
    </div>
  );
}

export default App;
