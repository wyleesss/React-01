export default function( { title, authorName, jenre, pagesNum, recensionsNum } ) {
    return (
        <>
            <h1>{title}</h1>
            <h2><u>автор:</u> <em>{authorName}</em></h2>
            <h2><u>жанр:</u> <em>{jenre}</em></h2>
            <h2><u>к-сть сторінок:</u> {pagesNum}</h2>
            <h2><u>к-сть рецензій:</u> {recensionsNum}</h2>
        </>
    )
}