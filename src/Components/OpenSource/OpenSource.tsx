import './OpenSource.css';

interface Details {
    title: string;
    desc: string;
    link: string;
}

const data: Details[] = [
    {
        title: "PyScreenReader",
        desc: "Parse on-screen information using the simplicity of Python on any platform.",
        link: "https://github.com/PyScreenReader/PyScreenReader"
    },
    {
        title: "PlatformIO Rules",
        desc: "Bazel Starlark rules for building and uploading Arduino programs using the PlatformIO build system.",
        link: "https://github.com/mum4k/platformio_rules"
    }
]

function MakeOpenSource({ title, desc, link }: Details) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='opensource-project'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </a>
    )
}


export function OpenSource() {
    const listofDetails = data.map((d) => <div key={d.title}>
        <MakeOpenSource
            title={d.title}
            desc={d.desc}
            link={d.link}
        />
    </div>);
    return (
        <div className="opensource">{listofDetails}</div>
    )
}