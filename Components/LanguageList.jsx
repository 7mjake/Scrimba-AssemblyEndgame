import classNames from 'classnames'


export default function LanguageList() {
    
    const languages = [
        { title: "HTML", isDead: false, id: 0},
        { title: "CSS", isDead: false, id: 1},
        { title: "JavaScript", isDead: false, id: 2},
        { title: "React", isDead: false, id: 3},
        { title: "TypeScript", isDead: false, id: 4},
        { title: "Node.js", isDead: false, id: 5},
        { title: "Python", isDead: false, id: 6},
        { title: "Ruby", isDead: false, id: 7},
        { title: "Assembly", isDead: false, id: 8}
    ];


    
    return (
        <div className={classNames("language-container")}>
            {languages.map(lang => (
                <div 
                key={lang.id} 
                className={classNames("language-chip", `language-chip-${lang.title}`)}>
                    {lang.title}
                </div>
                ))}
        </div>
    )
}