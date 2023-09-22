import React, { useState } from "react";
import TutorialDataService from "../services/tutorialService";

const AddTutorial = () => {
  const [tutorial, setTutorial] = useState({
    title: "",
    description: "",
    published: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const { title, description } = tutorial;

  const onChangeTitle = (e) => {
    setTutorial({ ...tutorial, title: e.target.value });
  };

  const onChangeDescription = (e) => {
    setTutorial({ ...tutorial, description: e.target.value });
  };

  const saveTutorial = () => {
    // console.log("saved", tutorial);
    // setSubmitted(true);
    const data = {
      title,
      description,
    };

    TutorialDataService.create(data)
      .then((response) => {
        setTutorial({
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial({
      title: "",
      description: "",
      published: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button
            onClick={newTutorial}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-input w-full rounded-sm border-gray-300"
              required
              value={title}
              onChange={onChangeTitle}
              name="title"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="form-input w-full rounded-sm border-gray-300"
              required
              value={description}
              onChange={onChangeDescription}
              name="description"
            />
          </div>

          <button
            onClick={saveTutorial}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
