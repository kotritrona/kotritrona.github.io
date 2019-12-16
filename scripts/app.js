'use strict';
'use very strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.detectLanguage()
    };
  }

  setWindowTitle() {
    let title = StringTable[this.state.lang].documentTitle;
    if(title) {
      document.title = title;
    }
  }

  languageChange() {
    let supportedLanguages = Object.keys(StringTable);
    let nextLanguage = (1 + supportedLanguages.indexOf(this.state.lang)) % supportedLanguages.length;
    console.log("activated", nextLanguage);
    if(supportedLanguages[nextLanguage] != this.state.lang) {
      this.setState({
        "lang" : supportedLanguages[nextLanguage]
      });
      this.setWindowTitle();
    }
  }

  detectLanguage() {
    const defaultLang = "en";
    let acceptedLangs = Array.from(navigator.languages);
    if(!acceptedLangs) {
      return defaultLang;
    }
    else {
      let supportedLanguages = Object.keys(StringTable);
      let al = acceptedLangs.map(l => l.toLowerCase());
      for(let lang of al) {
        if(supportedLanguages.some(k => k == lang)) {
          return lang;
        }
      }
      return defaultLang;
    }
  }

  render() {
    this.setWindowTitle();
    return (
      <div className="main-page" lang={this.state.lang}>
        <ul className="slideshow">
          <li className="slide slide-1"><Welcome lang={this.state.lang} languageHandler={this.languageChange.bind(this)} /></li>
          <li className="slide slide-2"><Thoughts lang={this.state.lang} /></li>
          <li className="slide slide-3"><Adventures lang={this.state.lang} /></li>
          <li className="slide slide-4"><History lang={this.state.lang} /></li>
          <li className="slide slide-5"><Projects lang={this.state.lang} /></li>
          <li className="slide slide-6"><Skills lang={this.state.lang} /></li>
          <li className="slide slide-7"><Contact lang={this.state.lang} /></li>
        </ul>
      </div>
    );
  }
}

let cachedScrollY = 0;
let firstScreenBorder = 1000;
const slide5AheadAmount = window.innerHeight;

let preloaded = false;
function preload() {
  if(preloaded) {
    return;
  }
  const neededToLoad = [].concat(StringTable.en.thoughtsArticles.map(a => a.image))
                         .concat(StringTable.en.adventuresArticles.map(a => a.image))
                         .concat(StringTable.en.projectArticles.map(a => a.image));
  neededToLoad.forEach(image => {
    let elem = new Image();
    elem.src = image;
  });
  preloaded = true;
}

function init() {
  firstScreenBorder = document.querySelector("li.slide-2").offsetTop;
}

function animframe() {
    if(window.scrollY != cachedScrollY) {
        cachedScrollY = window.scrollY;
        document.querySelector("li.slide-1").style.backgroundPosition = "0 " + Math.floor(-1/2 * cachedScrollY) + "px";

        if(window.scrollY > firstScreenBorder) {
          document.querySelector(".welcome-change-language").style.opacity = 0;

          if(window.scrollY + window.innerHeight > document.querySelector("li.slide-7").offsetTop) {
            let offset = window.scrollY + window.innerHeight - document.querySelector("li.slide-7").offsetTop;
            document.querySelector("li.slide-7").style.backgroundPosition = "0 " + Math.floor(- 1/2 * offset) + "px";
            document.querySelector("li.slide-7").style.setProperty("--rotate-var", "hue-rotate(" + Math.floor(60 + 1/2 * offset) + "deg)");
          }
          else if(window.scrollY > document.querySelector("li.slide-5").offsetTop - slide5AheadAmount) {
            let offset = window.scrollY - document.querySelector("li.slide-5").offsetTop + slide5AheadAmount;
            document.querySelector("li.slide-5").style.backgroundPosition = "0 " + Math.floor(slide5AheadAmount - 2 * offset) + "px";
          }
          else {
            preload();
          }

        }
        else {
          document.querySelector(".welcome-change-language").style.opacity = 1;
        }
    }
    requestAnimationFrame(animframe);
}

const domContainer = document.querySelector('#container');
ReactDOM.render(<App/>, domContainer);

init();
requestAnimationFrame(animframe);

// scrollTo({top: document.querySelector("li.slide-6").offsetTop, behavior: "smooth"});

// Start the Acceleration of SUGURI engine
AOS.init({
  disable: 'mobile', // Disable mobile phones to improve battle candidate concentration
  once: true         // Activates on Cheat Engine
});

// Make it like as if we were actually using React
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
      bundleType: 0,
      version: "114.51.4", // future version
      rendererPackageName: 'Kotri Minazuki'
    });
  }
  catch(e){}
}