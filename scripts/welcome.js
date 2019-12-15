'use strict';
'use very strict';

/* ---- Welcome ---- */

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    if(!this.props.languageHandler) {
      this.props.languageHandler = _=>_;
    }
  }

  welcomeData() {
    return StringTable[this.props.lang].welcomeData;
  }

  nameCardData() {
    return StringTable[this.props.lang].nameCardData;
  }

  go(n) {
    return evt => {
      window.scrollTo({
        top: document.querySelector("li.slide-" + n).offsetTop,
        behavior: "smooth"
      });
      evt.stopPropagation();
      evt.preventDefault();
    };
  }

  render() {
    let textData = this.welcomeData();
    return (
      <div className="section-container first-section">
        <TopSubtitle text={textData.subtitle} />
        <TopDescription text={textData.description.replace(/\r?\n/g, "<br />")} />
        <BlueleafLink href="#Thoughts" onClick={this.go(2)} className="welcome-link welcome-link-0" text={textData.thoughts} iconClass="fas fa-pen" />
        <BlueleafLink href="#Adventures" onClick={this.go(3)} className="welcome-link welcome-link-1" text={textData.adventures} iconClass="fas fa-rocket" />
        <BlueleafLink href="#History" onClick={this.go(4)} className="welcome-link welcome-link-2" text={textData.history} iconClass="fas fa-newspaper" />
        <BlueleafLink href="#Projects" onClick={this.go(5)} className="welcome-link welcome-link-3" text={textData.projects} iconClass="fas fa-gifts" />
        <BlueleafLink href="#Skills" onClick={this.go(6)} className="welcome-link welcome-link-4" text={textData.skills} iconClass="fas fa-magic" />
        <BlueleafLink href="#Contact" onClick={this.go(7)} className="welcome-link welcome-link-5" text={textData.contact} iconClass="fas fa-comment" />
        <Tachie src={textData.tachieURL} className="welcome-tachie" />
        <NameCard className="welcome-namecard" data={this.nameCardData()} />
        <CornerLink callback={this.props.languageHandler} className="welcome-change-language" iconClass="fas fa-language" />
      </div>
    );
  }
}

/* ---- Thoughts ---- */

class Thoughts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.max = 3;
  }

  getArticles() {
    return StringTable[this.props.lang].thoughtsArticles;
  }

  renderArticles() {
    let out = [];
    this.getArticles().forEach((article, i) => {
      out.push(
        <ArticleAbstract round={1} href={article.href} reverse={i%2==1} image={article.image} key={i.toString()} title={article.title} content={article.content} />
      );
    });
    if(!!!this.state.more) {
      return out.slice(0, this.max);
    }
    return out;
  }

  toggleMore() {
    this.savedHeight = document.querySelector(".slide-2").offsetHeight;
    document.querySelector(".slide-2").style.height = "auto";
    this.setState({
      more: !this.state.more
    });
  }

  componentDidUpdate() {
    // I'm sure this is not the right thing to do.
    // but it works, so whatever!

    let ___height____ = document.querySelector(".slide-2").offsetHeight;
    document.querySelector(".slide-2").style.height = this.savedHeight + "px";
    requestAnimationFrame(frame => {
      document.querySelector(".slide-2").style.height = ___height____ + "px";
    });
  }

  renderMoreButton() {
    let iconClass = this.state.more ? "fas fa-angle-double-up" : "fas fa-angle-double-down";

    if(this.getArticles().length > this.max) { // more than 3
      return <More className="thoughts-more" iconClass={iconClass} onClick={this.toggleMore.bind(this)}/>;
    }
    return null;
  }

  metaData() {
    return StringTable[this.props.lang].thoughtsMetadata;
  }

  render() {
    let texts = this.metaData();
    return (
      <div className="section-container">
        <a name="Thoughts" />
        <div data-aos="fade-up">
          <SectionTitle className="text-left" text={texts.title} />
          <hr className="section-title-hr item-left" />
          <SectionSubtitle className="text-left" text={texts.subtitle} />
        </div>
        <div className="thoughts-article-container">
          {this.renderArticles()}
        </div>
        {this.renderMoreButton()}
      </div>
    );
  }
}

/* ---- Adventures ---- */

class Adventures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.max = 3;
  }

  getArticles() {
    return StringTable[this.props.lang].adventuresArticles;
  }

  renderArticles() {
    let out = [];
    this.getArticles().forEach((article, i) => {
      out.push(
        <ArticleAbstract href={article.href} reverse={i%2==0} image={article.image} key={i.toString()} title={article.title} content={article.content} />
      );
    });
    if(!!!this.state.more) {
      return out.slice(0, this.max);
    }
    return out;
  }

  toggleMore() {
    this.savedHeight = document.querySelector(".slide-3").offsetHeight;
    document.querySelector(".slide-3").style.height = "auto";
    this.setState({
      more: !this.state.more
    });
  }

  componentDidUpdate() {
    let ___height____ = document.querySelector(".slide-3").offsetHeight;
    document.querySelector(".slide-3").style.height = this.savedHeight + "px";
    requestAnimationFrame(frame => {
      document.querySelector(".slide-3").style.height = ___height____ + "px";
    });
  }

  renderMoreButton() {
    let iconClass = this.state.more ? "fas fa-angle-double-up" : "fas fa-angle-double-down";

    if(this.getArticles().length > this.max) { // more than 3
      return <More className="adventures-more" iconClass={iconClass} onClick={this.toggleMore.bind(this)}/>;
    }
    return null;
  }

  metaData() {
    return StringTable[this.props.lang].adventuresMetadata;
  }

  render() {
    let texts = this.metaData();
    return (
      <div className="section-container">
        <a name="Adventures" />
        <div data-aos="fade-up">
          <SectionTitle className="text-right" text={texts.title} />
          <hr className="section-title-hr item-right" />
          <SectionSubtitle className="text-right" text={texts.subtitle} />
        </div>
        <div className="adventures-article-container">
          {this.renderArticles()}
        </div>
        {this.renderMoreButton()}
      </div>
    );
  }
}

/* ---- History ---- */

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.max = 3;
  }

  getArticles() {
    return StringTable[this.props.lang].historyArticles;
  }

  renderArticles() {
    let out = [], art = this.getArticles();
    if(!!!this.state.more) {
      art = art.filter(item => item.important);
    }
    art.forEach((article, i) => {
      out.push(
        <HistoryArticle href={article.href} image={article.image} key={i.toString()} title={article.title} content={article.content} />
      );
    });
    if(!!!this.state.more) {
      return out.slice(0, this.max);
    }
    return out;
  }

  toggleMore() {
    this.savedHeight = document.querySelector(".slide-4").offsetHeight;
    document.querySelector(".slide-4").style.height = "auto";

    this.setState({
      more: !this.state.more
    });
  }

  componentDidUpdate() {
    let ___height____ = document.querySelector(".slide-4").offsetHeight;
    document.querySelector(".slide-4").style.height = this.savedHeight + "px";
    try {
      document.querySelector(".history-article-container").classList.remove("history-opacity-transition");
      document.querySelector(".history-article-container").style.opacity = 0;
    }
    catch(e){}

    requestAnimationFrame(frame => {
      document.querySelector(".history-article-container").classList.add("history-opacity-transition");
      document.querySelector(".history-article-container").style.opacity = 1;
      document.querySelector(".slide-4").style.height = ___height____ + "px";
    });
  }

  renderMoreButton() {
    let iconClass = this.state.more ? "fas fa-angle-double-up" : "fas fa-angle-double-down";
    let art = this.getArticles();

    if(art.length > this.max || art.some(k => !k.important)) { // more than 3
      return <More className="history-more" iconClass={iconClass} onClick={this.toggleMore.bind(this)}/>;
    }
    return null;
  }

  metaData() {
    return StringTable[this.props.lang].historyMetadata;
  }

  render() {
    let texts = this.metaData();
    return (
      <div className="section-container">
        <a name="History" />
        <div data-aos="fade-up">
          <SectionTitle className="text-left" text={texts.title} />
          <hr className="section-title-hr item-left" />
          <SectionSubtitle className="text-left" text={texts.subtitle} />
        </div>
        <div className="history-ah-container">
          <div className="history-article-container">
            {this.renderArticles()}
          </div>
          <div className="hist-hr-container" data-aos="fade-up">
            <div className="hist-hr-1" />
          </div>
        </div>
        {this.renderMoreButton()}
      </div>
    );
  }
}

/* ---- Projects ---- */

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.max = 3;
  }

  getArticles() {
    return StringTable[this.props.lang].projectArticles;
  }

  renderArticles() {
    let out = [];
    this.getArticles().forEach((article, i) => {
      out.push(
        <ProjectArticle href={article.href} reverse={i%2==0} image={article.image} key={i.toString()} title={article.title} content={article.content} />
      );
    });
    if(!!!this.state.more) {
      return out.slice(0, this.max);
    }
    return out;
  }

  toggleMore() {
    this.savedHeight = document.querySelector(".slide-5").offsetHeight;
    document.querySelector(".slide-5").style.height = "auto";
    this.setState({
      more: !this.state.more
    });
  }

  componentDidUpdate() {
    let ___height____ = document.querySelector(".slide-5").offsetHeight;
    document.querySelector(".slide-5").style.height = this.savedHeight + "px";
    requestAnimationFrame(frame => {
      document.querySelector(".slide-5").style.height = ___height____ + "px";
    });
  }

  renderMoreButton() {
    let iconClass = this.state.more ? "fas fa-angle-double-up" : "fas fa-angle-double-down";

    if(this.getArticles().length > this.max) { // more than 3
      return <More className="project-more" iconClass={iconClass} onClick={this.toggleMore.bind(this)}/>;
    }
    return null;
  }

  metaData() {
    return StringTable[this.props.lang].projectMetadata;
  }

  render() {
    let texts = this.metaData();
    return (
      <div className="section-container">
        <a name="Projects" />
        <SectionTitle className="text-right" text={texts.title} />
        <hr className="section-title-hr item-right" />
        <SectionSubtitle className="text-right" text={texts.subtitle} />
        <div className="projects-outer-container">
          <div className="projects-container">
            {this.renderArticles()}
          </div>
        </div>
        {this.renderMoreButton()}
      </div>
    );
  }
}

/* ---- Skills ---- */

class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
    this.max = 6;
  }

  getArticles() {
    return StringTable[this.props.lang].skillsArticles;
  }

  renderArticles() {
    let out = [];
    this.getArticles().forEach((article, i) => {
      out.push(
        <SkillArticle href={article.href} level={article.level} key={i.toString()} title={article.title} content={article.content} />
      );
    });
    if(!!!this.state.more) {
      return out.slice(0, this.max);
    }
    return out;
  }

  toggleMore() {
    this.savedHeight = document.querySelector(".slide-6").offsetHeight;
    document.querySelector(".slide-6").style.height = "auto";
    this.setState({
      more: !this.state.more
    });
  }

  componentDidUpdate() {
    let ___height____ = document.querySelector(".slide-6").offsetHeight;
    document.querySelector(".slide-6").style.height = this.savedHeight + "px";
    requestAnimationFrame(frame => {
      document.querySelector(".slide-6").style.height = ___height____ + "px";
    });
  }

  renderMoreButton() {
    let iconClass = this.state.more ? "fas fa-angle-double-up" : "fas fa-angle-double-down";

    if(this.getArticles().length > this.max) { // more than 3
      return <More className="skills-more" iconClass={iconClass} onClick={this.toggleMore.bind(this)}/>;
    }
    return null;
  }

  metaData() {
    return StringTable[this.props.lang].skillsMetadata;
  }

  render() {
    let texts = this.metaData();
    return (
      <div className="section-container">
        <a name="Skills" />
        <SectionTitle className="text-left" text={texts.title} />
        <hr className="section-title-hr item-left" />
        <SectionSubtitle className="text-left" text={texts.subtitle} />
        <div className="skill-outer-container">
          <div className="skill-container">
            {this.renderArticles()}
          </div>
        </div>
        {this.renderMoreButton()}
      </div>
    );
  }
}

/* ---- Contact ---- */

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  getFooterMessage() {
    return StringTable[this.props.lang].footer;
  }

  getDarkerMessage() {
    return StringTable[this.props.lang].footerDark;
  }

  getSocialLinks() {
    return StringTable[this.props.lang].socialLinks;
  }

  renderSocialLinks() {
    return this.getSocialLinks().map((s, i) => (
      <SocialLink key={"sl" + i.toString()} iconClass={s.iconClass} href={s.href} text={s.text} gauge={s.gauge.toString()} />
    ));
  }

  render() {
    return (
      <div className="section-container">
        <a name="Contact" />
        <div className="social-links">
          {this.renderSocialLinks()}
        </div>
        <div className="footer">
          {this.getFooterMessage()}
          <br />
          <span className="footer-dark">
            {this.getDarkerMessage()}
          </span>
        </div>
      </div>
    );
  }
}

// export default {Welcome, Thoughts, Adventures, History, Projects, Skills, Contact};
