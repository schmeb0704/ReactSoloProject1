import Buttons from "./Buttons.js";

export default function About() {
  return (
    <div className="about-cont">
      <div class="details">
        <p className="name">Jerry Smith</p>
        <p className="job-description">Front End Developer</p>
        <p className="website">jerrysmith.com</p>
      </div>
      <Buttons />
      <main className="about-me">
        <section className="about">
          <h1>About Me</h1>
          <p className="about-para">
            I am a front end developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </section>

        <section className="interests">
          <h1>Interests</h1>
          <p>
            Food Expert. Music scholar. Reader. Internet fanatic. Gym rat.
            Travel geek. Trivia King.
          </p>
        </section>
      </main>
    </div>
  );
}
