import React from 'react';
import Nav from '../components/Nav.jsx';

export default function Tips() {
  return (
    <>
      <Nav />
      <section className="panel">
        <h2>Resume / Portfolio Tips</h2>

        <h3 className="h3-underlined">Installation</h3>
        <ol>
          <li>Fork the repository</li>
          <li>
            Rename your repo to <code>your-github-username.github.io</code>
          </li>
          <li>Turn on GitHub Pages</li>
          <li>
            On your local computer, open the terminal and navigate to the folder where you want to
            store your portfolio. Make a note of it.
          </li>
          <li>
            Clone your repo: <br />
            <code>
              git clone https://github.com/github-username/github-username.github.io portfolio
            </code>
          </li>
          <li>
            Install the dependencies: <br />
            <code>
              cd portfolio
              <br />
              npm install
            </code>
          </li>
          <li>
            Run the development server: <br />
            <code>npm run dev</code>
          </li>
        </ol>
        <p>
          Note that because this is a React App, you will have to navigate to your portfolio on the
          command line and run <code>npm run dev</code> in order to see your changes in the browser.
        </p>

        <h3 className="h3-underlined">Using Tailwind CSS & React</h3>
        <p className="body-text">
          Tailwind is a mobile-first CSS framework that allows you to build complex designs by
          combining simple, predefined classes together (just like combo classes in Webflow). It's a
          great way to get started with CSS and to build responsive designs.
        </p>
        <ul>
          <li>
            <a
              className="link-highlight"
              href="https://tailwindcss.com/docs/installation/using-vite"
              target="_blank"
            >
              Tailwind Documentation
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://pagedone.io/docs/tailwind-cheat-sheet"
              target="_blank"
            >
              Tailwind Cheatsheet
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://yw-tech-react-course.notion.site/46cff03a6e9d49e8a21cec8afb6496fa?pvs=25"
              target="_blank"
            >
              React course from last winter
            </a>
          </li>
        </ul>

        <h3 className="h3-underlined">Portfolio Materials</h3>
        <p className="body-text">
          You've already done a ton of work on the portfolios. Please review the work you've already
          done and incorporate the text, notes, and images you've already written:
        </p>
        <ul>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/document/d/16VYRdQNUN-sj2xRtOgsBOM7L-l5-qtN_frbHS4Sm-Gc/edit?tab=t.0#heading=h.n6p4t07y3g2w"
              target="_blank"
            >
              Everyone's Bios
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://drive.google.com/drive/u/1/folders/1hnWrpHz3Jgo7aemEpWTppmd2h_a5-LBf"
              target="_blank"
            >
              Case Study (Google Slides)
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/spreadsheets/d/1lz_a0_cAMXsJCYw1dX8i5GjUDoGM1rt4oNR27M8jRGo/edit?gid=0#gid=0"
              target="_blank"
            >
              Examples of other case studies
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/presentation/d/1KGZ5IQGQ1-RL5s-ooUUNMmjTB4Yt1f3z1m4YlsiXfH0/edit?slide=id.p#slide=id.p"
              target="_blank"
            >
              Visual design 101: How to develop your own look and feel while following best design
              practices.
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
