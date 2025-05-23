import React from 'react';
import Nav from '../components/Nav.jsx';
import Panel from '../components/Panel';
const Bio = () => {
  return (
    <>
      <Nav />
      <Panel>
        <div className="col-span-7">
          <h2 className="text-6xl font-abril mb-6 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-900 mb-6">
            I'm a <span className="font-bold">web developer</span> who loves to build things that
            are useful, thoughtful, and a little bit joyful. What drew me to this work was the
            creativity — the way code can bring an idea to life — and the sense of constant learning
            that comes with it. With a background in data and research, I bring a detail-oriented
            mindset and experience working closely with clients to understand real needs and solve
            real problems.
          </p>
          <p className="text-lg text-gray-900">
            I care deeply about listening, collaborating, and creating an environment where everyone
            feels heard, because good ideas often start with a simple question. I'm especially
            motivated by projects that serve a purpose, and I'm looking for opportunities where I
            can keep growing as a developer while contributing to meaningful, hands-on work that
            makes life a little easier for others.
          </p>
        </div>
      </Panel>
    </>
  );
};

export default Bio;
