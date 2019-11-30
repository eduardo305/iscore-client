import React, { useState } from "react";
import ReactDOM from "react-dom";

import Selector from "./components/Selector";
import Caption from "./components/Caption";
import Button from "./components/Button";
import LeagueSelector from "./components/LeagueSelector";
import LeagueStats from "./components/LeagueStats";
import Header from "./components/Header";
import ButtonGroup from "./components/ButtonGroup";

import "./index.scss";

const options = [
  {
    label: "brazil",
    badge: "https://restcountries.eu/data/bra.svg"
  },
  {
    label: "Spain",
    badge: "https://restcountries.eu/data/esp.svg"
  },
  { label: "usa", badge: "https://restcountries.eu/data/usa.svg" },
  { label: "Italy", badge: "https://restcountries.eu/data/ita.svg" },
  { label: "Germany", badge: "https://restcountries.eu/data/deu.svg" },
  { label: "Mexico", badge: "https://restcountries.eu/data/mex.svg" },
  { label: "Argentina", badge: "https://restcountries.eu/data/arg.svg" }
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState(options[0]);
  const [selectedLeague, setSelectedLeague] = useState({});
  const [step, setStep] = useState(0);

  const handleChange = selected => {
    setSelectedCountry(selected);
  };

  const handleLeagueChange = selected => {
    setSelectedLeague(selected);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="App">
      {step === 0 && (
        <>
          <Selector
            options={options}
            onChange={handleChange}
            onClick={() => setStep(1)}
          />
          <Caption caption={selectedCountry.label} />
          <ButtonGroup>
            <Button onClick={handleNext} label="OK" round />
          </ButtonGroup>
        </>
      )}

      {step === 1 && (
        <>
          <LeagueSelector
            onChange={handleLeagueChange}
            country={selectedCountry.label}
            onClick={() => setStep(2)}
          />
          <ButtonGroup>
            <Button onClick={handlePrevious} label="Back" round />
            <Button onClick={handleNext} label="OK" round />
          </ButtonGroup>
        </>
      )}

      {step === 2 && (
        <>
          <Header
            selectedCountry={selectedCountry}
            selectedLeague={selectedLeague}
            changeCountry={() => setStep(0)}
            changeLeague={() => setStep(1)}
          />
          <LeagueStats favorite="liverpool" league={selectedLeague.idLeague} />
        </>
      )}
    </div>
  );
}

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
/* eslint-enable no-undef */

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
