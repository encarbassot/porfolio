import { useState } from "react"

import "./Divisions.css"
import { DivisionCoding } from "../DivisionCoding/DivisionCoding"
import { DivisionSports } from "../DivisionSports/DivisionSports"
import { DivisionMaker } from "../DivisionMaker/DivisionMaker"

const PAGES = {
  CODING:"coding",
  SPORTS:"sports",
  MAKER:"maker"
}

export function Divisions(){

  const [page,setPage] = useState(PAGES.CODING)

  return (
    <>
      <section>
        <header>
          <ul className="flex">
            <li className="flex-1 text-center">
              <button className="divisions__tab" onClick={()=>setPage(PAGES.CODING)}>CODING</button>
            </li>
            <li className="flex-1 text-center">
              <button className="divisions__tab" onClick={()=>setPage(PAGES.SPORTS)}>DEPORTISTA</button>
            </li>
            <li className="flex-1 text-center">
              <button className="divisions__tab" onClick={()=>setPage(PAGES.MAKER)}>MAKER</button>
            </li>
          </ul>
        </header>
        <main>
        { page === PAGES.CODING && <DivisionCoding /> }

        { page === PAGES.SPORTS && <DivisionSports /> }

        { page === PAGES.MAKER && <DivisionMaker />}
        </main>
      </section>
    </>
  )
}