import "./Header.css"


export function Header(){

  const bgImage = {
    background:`url(/profile.webp)`
  }

  return (
    <>
      <section className="header">
        <div className="header__info" data-aos="fade-right">
          <h1>Eloi Fàbrega</h1>
          <p>Hy, this is me.</p>
        </div>
        <div className="header__bgImage" style={bgImage} data-aos="fade-left">
          
        </div>
      </section>
    </>
  )
}