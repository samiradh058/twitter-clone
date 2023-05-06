const TweetBody = ({body,content}) => {
    return (
      <>
        <p className="tweet-text">{content}</p>
        <img
          src={body}
          alt="Tweet Image"
          height={300}
          width={300}
        />
      </>
    );
  };
  
  export default TweetBody;