import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorialService";
import { useParams, useNavigate } from "react-router-dom";

const Tutorial = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentTutorial, setCurrentTutorial] = useState({
    id: null,
    title: "",
    description: "",
    published: false,
  });

  const [message, setMessage] = useState("");

  const getTutorial = (id) => {
    TutorialDataService.get(id)
      .then((response) => {
        setCurrentTutorial(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(id);
  }, [id]);

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setCurrentTutorial((prevState) => ({
      ...prevState,
      title: title,
    }));
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setCurrentTutorial((prevState) => ({
      ...prevState,
      description: description,
    }));
  };

  const updatePublished = (status) => {
    const data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };

    TutorialDataService.update(currentTutorial.id, data)
      .then((response) => {
        setCurrentTutorial((prevState) => ({
          ...prevState,
          published: status,
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then((response) => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.delete(currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className=" w-full">
      {currentTutorial ? (
        <div className="flex flex-col justify-between gap-2">
          <h4 className="font-bold text-2xl">Tutorial</h4>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={currentTutorial.title}
                onChange={onChangeTitle}
                className="p-2 rounded-sm w-full"
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
                className="p-2 rounded-sm w-full"
                value={currentTutorial.description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="mb-4 flex">
              <label className="block text-gray-700 font-bold">Status:</label>
              <div className="ml-2">
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </div>
          </form>

          <div className="flex justify-between gap-1 w-1/2">
            {currentTutorial.published ? (
              <button
                className="p-1 rounded-sm w-full bg-orange-500 text-white hover:bg-orange-700"
                onClick={() => updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="p-1 rounded-sm w-full bg-blue-500 text-white hover:bg-blue-700"
                onClick={() => updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="p-1 rounded-sm w-full bg-red-500 text-white hover:bg-red-700"
              onClick={deleteTutorial}
            >
              Delete
            </button>

            <button
              className="p-1 rounded-sm w-full bg-yellow-500 text-white hover:bg-yellow-700"
              onClick={updateTutorial}
            >
              Update
            </button>
            </div>
            <p className="font-bold text-2xl">{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
