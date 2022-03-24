import React from "react";
import { Button } from 'antd';
import "antd/dist/antd.css";
import s from './App.module.scss';
import Header from "./common/Header";
import HeroesBlock from "./heroes/HeroesBlock";
function App() {
  return (
    <div className={s.App}>
        <div className={s.container}>
            <Header/>
            <HeroesBlock/>
        </div>
    </div>
  );
}

export default App;
