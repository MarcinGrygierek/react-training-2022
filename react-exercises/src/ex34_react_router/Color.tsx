import { useParams } from "react-router"

const Color = () => {
    const {r, g, b} = useParams<{r: string, g: string, b: string}>();
    return <div style={{
        backgroundColor: `rgba(${r}, ${g}, ${b})`,
        height: '500px'
    }}>
        <h1>Color</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora recusandae vero aspernatur vitae commodi, odit, officia dolorem voluptas rerum eveniet quos nulla molestiae, voluptatum necessitatibus hic unde soluta facilis.
    </div>
}

export {Color}