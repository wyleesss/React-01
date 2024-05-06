import { useState } from 'react'
import Header from './Components/Header/Header'
import Book from './Components/Book/Book'
import './App.css'
import Musician from './Components/Musician/Musician'
import Recipe from './Components/Recipe/Recipe'
import NEEDED_RECIPE from './data'

export default function App() {
  const [tab, setTab] = useState("book")

  return (
    <>
      <Header active={tab} onChange={(current) => setTab(current)}/>
      <main>
        <div className='info-container'>

        {tab == "book" && (
          <Book 
            title="Уявна книга"
            authorName="Уявний Автор"
            jenre="не придумав"
            pagesNum="491"
            recensionsNum="1.000.000"
          />
        )}

        {tab == "musician" && (
          <Musician
            name="Популярний Чел"
            listenersNum="2"
            albumsNames = {["альбом",
                            "альбом 2", 
                            "депресія", 
                            "альбом 3",
                            "кінець"].join("; ")}
          />
        )}

        {tab == "recipe" && (
          <Recipe
            name="Чурос"
            ingridients = {["90 г вершкового масла",
                            "1 ст. л. цукру",
                            "½ ч.л. солі", 
                            "250 мл води", 
                            "120 г борошна",
                            "3 яйця",
                            "½ ч.л. ванільного цукру"].join("; ")}
            recipe={NEEDED_RECIPE}
            photoUrl='../public/bro-cooked.png'
          />
        )}

        </div>

      </main>
    </>
  )
}
