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
          id="profile__img"
          src={ali.imageUrl}
          alt={"Photo of " + ali.name}
          style={{
            width: ali.imageSize,
            height: ali.imageSize,
          }}
        />
        <h1>{ali.name}</h1>
        <div id="link">
          <h3 id="twitter">Twitter Link</h3>
        </div>
      </section>
      <section id="links">
        <a href="https://training.zuri.team" id="btn__zuri">
          <h3>Zuri Team</h3>
        </a>
      </section>
      <section id="links">
        <a href="http://books.zuri.team" id="books">
          <h3>Zuri Books</h3>
        </a>
      </section>
      <section id="links">
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=leewebs"
          id="book__python"
        >
          <h3>Python Books</h3>
        </a>
      </section>
      <section id="links">
        <a href="https://background.zuri.team" id="pitch">
          <h3>Background Check For Coders</h3>
        </a>
      </section>
      <section id="links">
        <a href="https://books.zuri.team/design-rules" id="design">
          <h3>Design Books</h3>
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
