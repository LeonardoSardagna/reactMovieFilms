import { Button } from "@nextui-org/react"
import { ArrowUp } from "lucide-react"

export function ButtonTop() {
    const handleClick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }
    return (
        <Button onClick={handleClick} isIconOnly aria-label="Like" className="fixed bottom-10 right-10 z-50 h-14 w-14 transition ease-in-out hover:scale-105 bg-custom-botao-top">
            <ArrowUp className="text-white"/>
        </Button>
    )
}