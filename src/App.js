import React from "react";
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import BtnWatch from "./components/BtnWatch";
import DisplayWatch from "./components/DisplayWatch";
import './App.css'
 

function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("stop");
 
  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (status === "run") {
          setSec(val => val + 1000);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [status]);

  
  const interv = () => interval(300)
 
  const start = React.useCallback(() => {
    setStatus("run");
  }, []);
 
  const stop = React.useCallback(() => {
    setStatus("stop");
    setSec(0);
  }, []);
 
  const reset = React.useCallback(() => {
    setSec(0);
  }, []);
 
  const wait = React.useCallback(() => {
    setStatus("wait");
    interv();
    console.log(interv());
  }, []);

  
 
  return (
    <div>
      <DisplayWatch sec={sec}/>
      <BtnWatch start={start} stop={stop} reset={reset} wait={wait}/>
    </div>
  );
}

export default App;
