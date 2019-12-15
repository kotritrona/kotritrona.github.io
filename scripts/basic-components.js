'use strict';
'use very strict';

function BigTitle(props) {
  return (
    <h1 className={"text big-title-text " + (props.className || '')}>
      { props.text }
    </h1>
  );
}
function SectionTitle(props) {
  return (
    <h2 className={"text section-title-text " + (props.className || '')}>
      { props.text }
    </h2>
  );
}
function SectionSubtitle(props) {
  return (
    <h3 className={"text section-subtitle-text " + (props.className || '')}>
      { props.text }
    </h3>
  );
}
function TopSubtitle(props) {
  return (
    <h2 className={"text top-subtitle-text " + (props.className || '')}>
      { props.text }
    </h2>
  );
}
function TopDescription(props) {
  return (
    <h4 className={"text top-description-text " + (props.className || '')} dangerouslySetInnerHTML={{__html: props.text}}></h4>
  );
}

// IMAGE SUBJECT TO CHANGE
// WHEN I LEARN HOW TO MAKE MMD PMX
function Tachie(props) {
  return (
    <div className={"image-container " + (props.className || '')}>
      <img src={props.src} />
    </div>
  );
}

function BlueleafLink(props) {
  return (
    <div className={"blueleaf-outer " + (props.className || '')}>
      <a href={props.href} onClick={props.onClick}>
        <div className={"blueleaf-inner"}>
          <div className="blueleaf-icon">
            <i className={props.iconClass}></i>
          </div>
          <div className="blueleaf-text">
            {props.text}
          </div>
        </div>
      </a>
    </div>
  );
}

function CornerLink(props) {
  return (
    <div className="cornerlink-overflowbox">
      <div className={"cornerlink-outer " + (props.className || '')} onClick={props.callback}>
        <i className={props.iconClass}></i>
      </div>
    </div>
  );
}

function NameCard(props) {
  let data = props.data;
  let items = [];
  if(data.items) {
    for(let i=0; i<data.items.length; i++) {
      items.push(
        <div className="namecard-item" key={i.toString()}>
          <div className="namecard-key">
            {data.items[i].key}
          </div>
          <div className="namecard-value">
            {data.items[i].value}
          </div>
        </div>
      )
    }
  }
  return (
    <div className={"namecard-container " + (props.className || '')} style={{"--namecard-count" : (data.items ? data.items.length : 0)}}>
      <div className="namecard-name">
        {data.name}
      </div>
      <div className="namecard-table-container">
        <div className="namecard-table">
          {items}
        </div>
      </div>
      <div className="namecard-table-triangle"></div>
      <div className="namecard-table-triangle-top"></div>
    </div>
  );
}

function ArticleAbstract(props) {
  let image = null;
  if(props.image) {
    image = (
      <div className={"article-thumbnail " + (props.round ? "article-thumbnail-round " : "")}>
        <img src={props.image} />
      </div>
    );
  }
  else {
    image = null;
  }

  let articleContent = props.content.toString().replace(/\r?\n/g, "<br />");

  return (
    <div data-aos="fade-up" className={"article " + (props.reverse ? "article-reverse " : "") + (props.className || '')}>
      {image}
      <div className="article-main">
        <a href={props.href} target="_blank">
          <div className="article-title">{props.title}</div>
          <div className="article-content" dangerouslySetInnerHTML={{__html: articleContent}}></div>
        </a>
      </div>
    </div>
  )
}

function HistoryArticle(props) {
  let articleContent = props.content.toString().replace(/\r?\n/g, "<br />");

  return (
    <div data-aos="fade-up" className={"hist " + (props.className || '')}>
      <div className="hist-main">
        <a href={props.href} target="_blank">
          <div className="hist-title">{props.title}</div>
          <div className="hist-content" dangerouslySetInnerHTML={{__html: articleContent}}></div>
        </a>
      </div>
      <div className="hist-triangle-container">
        <svg width="100" height="100">
          <polygon points="0,0 50,25 0,50" className="hist-triangle" />
          <line x1="0" y1="0" x2="50" y2="25" className="hist-line" />
          <line x1="50" y1="25" x2="0" y2="50" className="hist-line" />
        </svg>
      </div>
    </div>
  )
}

function ProjectArticle(props) {
  let image = null;
  if(props.image) {
    image = (
      <div className="project-thumbnail">
        <img src={props.image} />
      </div>
    );
  }
  else {
    image = null;
  }

  let articleContent = props.content.toString().replace(/\r?\n/g, "<br />");

  return (
    <div data-aos="fade-up" className={"project " + (props.className || '')}>
      {image}
      <div className="project-main">
        <a href={props.href} target="_blank">
          <div className="project-title">{props.title}</div>
          <div className="project-content" dangerouslySetInnerHTML={{__html: articleContent}}></div>
        </a>
      </div>
    </div>
  )
}

function SkillArticle(props) {

  let articleContent = props.content.toString().replace(/\r?\n/g, "<br />");

  return (
    <div data-aos="fade-up" className={"skill " + (props.className || '')}>
      <div className="skill-gauge" style={{width: props.level + "%"}} />
      <div className="skill-main">
        <a href={props.href} target={(props.href && props.href.indexOf("javascript:") == 0) ? "" : "_blank"}>
          <div className="skill-title">{props.title}</div>
          <div className="skill-content" dangerouslySetInnerHTML={{__html: articleContent}}></div>
        </a>
      </div>
    </div>
  )
}

function More(props) {
  return (
    <div className={"more " + (props.className || '')}>
      <div className="more-wrapper" onClick={props.onClick}>
        <i className={props.iconClass}></i>
      </div>
    </div>
  )
}

function SocialLink(props) {
  return (
    <div className={"social " + (props.className || '')}>
      <a href={props.href} target="_blank">
        <div className="social-outer">
            <i className={props.iconClass} />
        </div>
      </a>
      <div className="social-gauge" style={{height: props.gauge + "%"}}>
      </div>
    </div>
  );
}

// export default {BigTitle, SectionTitle, SectionSubtitle, TopSubtitle, Tachie, BlueleafLink, CornerLink, NameCard, ArticleAbstract, HistoryArticle, ProjectArticle, SkillArticle, More, SocialLink};