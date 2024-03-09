import { useTranslation } from "react-i18next";
import "./Navbar.css"
import { useState } from "react";

export function Navbar(){
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const languages = ["es","en"]

  function handleChangeLanguage(e){
    changeLanguage(e.target.value)
    setCurrentLanguage(e.target.value)
  }

  return (

    <>
      <header id="header-nav" class="fixed top-0 w-full px-6 py-4 z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-16">
          <select onChange={handleChangeLanguage} value={currentLanguage}>
            {
              languages.map(x=>
                <option key={x} value={x}>{x.toUpperCase()}</option>  
              )
            }
          </select>
        </div>
      </header>
    </>
  )
}