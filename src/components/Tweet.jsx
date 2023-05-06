import Footer from "./Footer";
import Header from "./Header";
import TweetBody from "./TweetBody";

import "../App.css";
const Tweet = ({name,username,body,content}) => {
  return (
    <>
      <div className="tweet">
        <img
          src="https://placekitten.com/50/50"
          alt="Profile Picture"
          height={50}
          width={50}
        />
        <div className="tweet-content">
          <Header name={name} username={username}/>
          <TweetBody body={body} content={content}/>
          <Footer />
        </div>
      </div>
      <h1> Hello world</h1>
    </>
  );
};

export default Tweet;