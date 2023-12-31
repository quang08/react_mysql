import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorialService";
import { Link } from "react-router-dom";

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const handleRefreshAfterSearch = () => {
    refreshList();
    setSearchTitle("");
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearchTitle = () => {
    const encodedTitle = encodeURIComponent(searchTitle);
    TutorialDataService.findByTitle(encodedTitle)
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <input
          type="text"
          className="w-full py-2 px-4 border rounded-lg"
          placeholder="Search by title"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <div className="flex justify-between w-[15%]">
          <button
            className="bg-blue-500 text-white py-2 px-4  rounded-lg hover:bg-blue-700 mt-3"
            type="button"
            onClick={handleSearchTitle}
          >
            Search
          </button>
          {searchTitle && (
            <button
              className="bg-yellow-500 text-white py-2 px-4  rounded-lg hover:bg-yellow-700 mt-3"
              type="button"
              onClick={handleRefreshAfterSearch}
            >
              Refresh
            </button>
          )}
        </div>
      </div>
      <div className="flex w-full border-t-4 border-gray-300">
        <div className="w-1/2 pr-4 mt-3 bg-gray-100 rounded-sm p-2">
          <h4 className="text-2xl mb-2 font-bold">Tutorials List</h4>
          <ul className="list-disc list-inside">
            {tutorials.map((tutorial, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-2 ${
                  index === currentIndex ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => setActiveTutorial(tutorial, index)}
              >
                {tutorial.title}
              </li>
            ))}
          </ul>
          <button
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-700"
            onClick={removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="w-1/2 pl-4 mt-3">
          {currentTutorial ? (
            <div className="flex flex-col h-full gap-2 bg-gray-100 rounded-sm p-2 justify-between">
              <h4 className="text-2xl font-bold">Tutorial</h4>
              <div className="flex flex-col gap-2">
                <div>
                  <strong>Title:</strong> {currentTutorial.title}
                </div>
                <div>
                  <strong>Description:</strong> {currentTutorial.description}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  {currentTutorial.published ? "Published" : "Pending"}
                </div>
              </div>
              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="bg-yellow-500 text-white py-2 px-4 mt-4 w-fit rounded-lg hover:bg-yellow-700"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialsList;
