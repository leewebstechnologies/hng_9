import "./user.css";
// import GitHubIcon from '@mui/icons-material/GitHub';

const User = () => {
  const ali = {
    name: "Aliu Ajibade",
    imageUrl: "./images/me.jpg",
    imageSize: 90,
  };
  return (
    <>
      <section id="profile__img">
        <img
          className="avatar"
          src={ali.imageUrl}
          alt={"Photo of " + ali.name}
          style={{
            width: ali.imageSize,
            height: ali.imageSize,
          }}
        />
        <h1>{ali.name}</h1>
        <div id="link">
          <h2 id="twitter">Ali</h2>
        </div>
      </section>
      <section id="links">
        <a href="https://training.zuri.team" id="btn__zuri">
          <h2>Zuri Team</h2>
        </a>
      </section>
      <section id="links">
        <a href="http://books.zuri.team" id="books">
          <h2>Zuri Books</h2>
        </a>
      </section>
      <section id="links">
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=leewebs"
          id="book__python"
        >
          <h2>Python Books</h2>
        </a>
      </section>
      <section id="links">
        <a href="https://background.zuri.team" id="pitch">
          <h2>Background Check For Coders</h2>
        </a>
      </section>
      <section id="links">
        <a href="https://books.zuri.team/design-rules" id="design">
          <h2>Design Books</h2>
        </a>
      </section>
      <section id="footer">
        <div id="page-footer">
          <div id="social-icons">
            <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
              <img src="./images/slack_logo.png" alt="slack icon" id="slack" />
            </a>
            <a href="https://github.com/leewebstechnologies">
              <img src="./images/github_logo.png" id="github" alt="github" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
