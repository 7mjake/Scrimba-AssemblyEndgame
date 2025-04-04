import classNames from 'classnames'


export default function LanguageList(props) {
    
    const languages = props.languages

    const chipColors = [
        { bg: "#EA6B14", text: "white" },    // HTML
        { bg: "#339DFF", text: "white" },    // CSS
        { bg: "#FFF33B", text: "black" },    // Javascript
        { bg: "#23D8F8", text: "black" },    // React
        { bg: "#32ADE6", text: "white" },    // Typescript
        { bg: "#538D3F", text: "white" },    // Node.js
        { bg: "#FFD44C", text: "black" },    // Python
        { bg: "#DA2C2C", text: "white" },    // Ruby
        { bg: "#1F49A2", text: "white" }     // Assembly
      ];
      

    
    return (
        <div className={classNames("language-container")}>
            {languages.map(lang => (
                <div style={{position: "relative"}} key={lang.id}>
                    <div  
                    className={classNames("language-chip")}
                    style={{backgroundColor: chipColors[lang.id].bg, color: chipColors[lang.id].text, opacity: lang.isDead ? 0.1 : 1.0}}>
                        {lang.title}
                    </div>
                    {lang.isDead && <div className={"language-dead"}>💀</div>}
                </div>
                ))}
        </div>
    )
}