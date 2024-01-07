import flintgif from "./flintvid.gif";
import soccer from "./soccer.jpg";


interface Project {
    title:String;
    description:String;
    imgUrl:String;
}

export function Projects() {
    const projects:Project[] = [
        {
            title: "Flint",
            description: "AHJKLHTKL",
            imgUrl: flintgif,
        },
        {
            title: "Soccer Bots",
            description: "LGEIJFASL",
            imgUrl: soccer,
        }
    ]

    return (
    <>
        
        
    </>)
}
