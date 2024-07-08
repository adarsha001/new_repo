import React, { useState } from "react";

const Comments = ({ comments, handleAddComments }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [commentbody, setcommentbody] = useState(" ");
  function toggleInput() {
    setInputVisible(!inputVisible);
  }

  const handleApp=() => {
    let newcomment={
      id:Date.now(),
      text:commentbody,
      replies:[],
    };
    handleAddComments(comments.id, newcomment);
    setInputVisible(false);
  }

  return (
    <>
      <div className="bg-red-500">
        <div className="p-3 bg-green-300 m-4 mt-5 pt-4 " key={comments.id}>
          <div className="bg-blue-500">{comments.text}</div>
          {inputVisible && (
            <input
              type="text"
              autoFocus
              onChange={(e) => setcommentbody(e.target.value)}
            />
          )}
          {inputVisible ? (
            <div>
              {" "}
              <button onClick={handleApp} className="">
                add
              </button>
              <button onClick={() => setInputVisible(false)} className="ml-3">
                cancel
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <button onClick={toggleInput}className="">
                reply
              </button>
              <button className="ml-3">delete</button>
            </div>
          )}
        </div>
        <div className="p-1">
          {comments?.replies?.map((ele) => (
            <Comments
              key={ele.id}
              comments={ele}
              handleAddComments={handleAddComments}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
