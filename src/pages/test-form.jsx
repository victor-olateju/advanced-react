import { useState } from "react";

export function TestForm() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(score <=5 && comment.length <= 10){
        alert("Please leave a review")
        return
    }

    setName("")
    setComment("")
    setScore(0)
  };

  return (
    <form action="" onSubmit={() => alert("Submitting")}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Score {score} </label>
          <input
            type="range"
            min={0}
            defaultValue={0}
            max={10}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Comment</label>
          <textarea
            name=""
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" disabled={!name}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}
