import "./Header.css"
import Button from "../Button/Button"

export default function Header( { active, onChange } ) {
    return (
        <header className="header">
            <Button isActive={active == "book"} onClick={ () => onChange("book") }>Завдання 1 (Книга)</Button>
            <Button isActive={active == "musician"} onClick={ () => onChange("musician") }>Завдання 2 (Музикант)</Button>
            <Button isActive={active == "recipe"} onClick={ () => onChange("recipe") }>Завдання 3 (Рецепт)</Button>
        </header>
    )
}