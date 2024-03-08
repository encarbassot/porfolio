import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 500
    });
  }, []);

  return (
    <>
    <h1 className="">
      Hello world!
    </h1>

    <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reprehenderit corrupti impedit facere placeat enim ducimus quibusdam ratione repellendus non odio ad, eius consectetur sint libero eum maiores iure nam.</p>
  
    </>
  )
}

export default App
