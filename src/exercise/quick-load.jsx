import { useState } from "react"


export default function QuickLoad(){
    const [loaded, setLoaded] = useState()

    setLoaded("Loaded Now")

    console.log("Loaded ", loaded)

    return <div>
        {loaded}
    </div>
}