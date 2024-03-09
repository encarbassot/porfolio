import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { Divisions } from "./components/Divisions/Divisions";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";



function App() {


  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)



  useEffect(() => {
    AOS.init({
      duration : 500,
      once:true
    });
  }, []);

  return (
    <>
    <Navbar/>
    <Header/>

    <Divisions />

    <h1 className="">
    {t('headerTitle', { myName: "Eloi Fàbrega" })}
    </h1>
    <h3>
      Current Language: {currentLanguage}
    </h3>


    <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reprehenderit corrupti impedit facere placeat enim ducimus quibusdam ratione repellendus non odio ad, eius consectetur sint libero eum maiores iure nam.</p>
    
    <Footer/>
    </>
  )
}

export default App
