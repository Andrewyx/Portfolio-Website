import './OpenSource.css';

interface Details {
    title: string;
    desc: string;
    link: string;
    tags: string[];
}

const data: Details[] = [
    {
        title: "fast-lapjv",
        desc: "A fast C++ implementation of the LAPJV (Jonker-Volgenant) algorithm for solving the linear assignment problem, with Python bindings.",
        link: "https://github.com/Andrewyx/fast-lapjv",
        tags: ["C++", "Algorithms"],
    },
    {
        title: "GitHub PR Autocomplete",
        desc: "A small Obsidian plugin that automatically embeds and autocompletes GitHub pull request links in your notes.",
        link: "https://github.com/Andrewyx/Github-PR-Autocomplete",
        tags: ["TypeScript", "Obsidian"],
    },
    {
        title: "PyScreenReader",
        desc: "Parse on-screen information using the simplicity of Python on any platform.",
        link: "https://github.com/PyScreenReader/PyScreenReader",
        tags: ["Python", "Accessibility"],
    },
    {
        title: "PlatformIO Rules",
        desc: "Bazel Starlark rules for building and uploading Arduino programs using the PlatformIO build system.",
        link: "https://github.com/mum4k/platformio_rules",
        tags: ["Bazel", "Starlark"],
    },
]

function MakeOpenSource({ title, desc, link, tags }: Details) {
    return (
        <article className="opensource-project">
            <span className="opensource-eyebrow">Open Source</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="opensource-tags">
                {tags.map((t) => (
                    <span key={t} className="opensource-tag">{t}</span>
                ))}
            </div>
            <div className="opensource-actions">
                <a className="opensource-btn" href={link} target="_blank" rel="noopener noreferrer">
                    Code <span aria-hidden="true">↗</span>
                </a>
            </div>
        </article>
    )
}


export function OpenSource() {
    return (
        <div className="opensource">
            {data.map((d) => (
                <MakeOpenSource key={d.title} title={d.title} desc={d.desc} link={d.link} tags={d.tags} />
            ))}
        </div>
    )
}
