import React from 'react'
import { useState } from 'react'



function Cricket(props) {
    // runs
    const [runs, setruns] = useState(0)
    // balls
    const [balls, setballs] = useState(0)
    // extra
    const [extra, setextra] = useState(0)
    // wicket
    const [wicket, setWicket] = useState(0)

    return (
        <div>
           
            Runs: {runs}
            <br />
            Balls: {balls}
            <br />
            wickets: {wicket}
            <br />
            extra: {extra}
            <br />
            <button onClick={() => { setruns(runs + 1); setballs(balls + 1); }}>1 Run</button>
            <button onClick={() => { setruns(runs + 2); setballs(balls + 1); }}>2 Run</button>
            <button onClick={() => { setruns(runs + 3); setballs(balls + 1); }}>3 Run</button>
            <button onClick={() => { setruns(runs + 4); setballs(balls + 1); }}>4 Run</button>
            <button onClick={() => { setruns(runs + 6); setballs(balls + 1); }}>6 Run</button>
            <button onClick={() => { setWicket(wicket + 1); setballs(balls + 1); }}>wicket</button>
            <button onClick={() => { setruns(runs + 1); setextra(extra + 1) }}>Extra</button>


           
        </div>
    )
}

export default Cricket
