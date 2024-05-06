import './Recipe.css'

export default function Recipe( { name, recipe, photoUrl, ...ingredients} ) {
    return( 
        <>
            <h1>{name}</h1>
            <div className="img-container">
                <img src={photoUrl}/>
            </div>
            <h2><u>інгридієнти: </u></h2>
            { 
                Object.keys(ingredients).map(key => (
                    <h3><em>{ingredients[key]}</em></h3>
                ))
            }
            <h2><u>рецепт:</u></h2>
            <h4>{recipe}</h4>
        </>
    )
}