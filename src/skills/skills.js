import React, { Component } from 'react';
import './skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderSkill(name, rating) {
    return (
      <tr>
        <td>{ name }</td>
        <td className="skill-table__rating">
          { this.renderStars(rating) }
        </td>
      </tr>
    )
  }

  renderSkillHeader(name, rating) {
    return (
      <tr>
        <th>{ name }</th>
        <th className="skill-table__rating">
          { this.renderStars(rating) }
        </th>
      </tr>
    )
  }

  renderStars(rating) {
    var stars = [];

    for (var i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<span className="fas fa-star"></span>);
      }
      else {
        stars.push(<span className="fas fa-star skill-table__star--unfilled"></span>);
      }
    }

    return stars;
  }

  render() {
    return (
      <section className="article">
        <div className="article__content">
          <h1>What I'm Good At</h1>
        </div>
        <div className="article__content">
          <h2>Front End Web Development</h2>
          <div className="article__columns">
            <div className="article__column--description">
              <p>I've focused my career on front-end web development, and I consider myself an expert when it comes to JavaScript, HTML, and CSS. I've had the pleasure of working with a variety of frameworks, from legacy frameworks such as AngularJS 1 to newer frameworks like React.</p>
            </div>
            <div className="article__column">
              <table class="skill-table">
                <thead>
                  { this.renderSkillHeader("JavaScript", 5) }
                </thead>
                <tbody>
                  { this.renderSkill("AngularJS 1", 5) }
                  { this.renderSkill("jQuery", 5) }
                  { this.renderSkill("ES2015/ES6", 4) }
                  { this.renderSkill("Node.js", 3) }
                  { this.renderSkill("React", 3) }
                  { this.renderSkill("Vue.js", 2) }
                </tbody>
              </table>
              <table class="skill-table">
                <thead>
                  { this.renderSkillHeader("HTML/CSS", 5) }
                </thead>
                <tbody>
                  { this.renderSkill("SASS", 5) }
                  { this.renderSkill("LESS", 5) }
                  { this.renderSkill("Responsive Design", 5) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="article__content">
          <h1>This Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
        </div>
        <div className="article__content">
          <h1>This Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
        </div>
      </section>
    );
  }
}

export default Skills;
