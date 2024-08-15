import React, {useContext, useEffect, useState } from "react";
import logoImg from "@i/logo.svg";
import gulpImg from "@i/gulp.svg";
import { Context } from "../context/Context";

function Header() {
  const [search, setsearch] = useState("")
  const [theme, settheme] = useState('light')
  const{getWeather}=useContext(Context)
  useEffect(()=>{
    document.documentElement.dataset.theme = theme
  })
  return (
    <header className="header">
      <div className="container">
        <a href="" className="logo">
          <img src={logoImg} alt="" />
          <span>WEATHER</span>
        </a>
        <form action="" className="header__form" onSubmit={(e)=>{
          e.preventDefault()
          if(search != ''){
            getWeather(search)
          }
          setsearch("") 
        }}>
          <img src={gulpImg} alt="" className="header__img" onClick={()=>settheme(theme === 'light' ? 'dark': 'light')}/>
          <input type="text" className="header__inp" placeholder="Выбрать город" value={search} onChange={(e)=>setsearch(e.target.value)}/>
        </form>
      </div>
    </header>
  );
}

export default Header;
