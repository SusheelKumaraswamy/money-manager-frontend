import React from "react";
import App from "./App";
import Header from './header';
import Weekdata from './weeklydata';
import Monthlydata from './monthlydata';
import Yearlydata from './yearlydata';
import Officialdata from './official';
import Personaldata from './personal';
import Betweendates from './betweendates';
import {
    BrowserRouter,
    Routes,
    Route,
    Router,
  } from "react-router-dom";


export default function Component1(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/add" element={<App />} />
                    <Route path="/weeklydata" element={<Weekdata />} />
                    <Route path="/monthlydata" element={<Monthlydata />} />
                    <Route path="/yearlydata" element={<Yearlydata />} />
                    <Route path="/officialdata" element={<Officialdata />} />
                    <Route path="/personaldata" element={<Personaldata />} />
                    <Route path="/betweendates" element={<Betweendates />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
