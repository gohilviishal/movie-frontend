import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "../public/Vectors.png";
import { useRouter } from "next/router";
import Auth from "../components/Auth/Auth";
import { useAuth } from "../contexts/authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function list() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(8);
  const router = useRouter();
  const { logout } = useAuth();
  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_PATH}/movie/getall?page=${currentPage}&limit=${itemsPerPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data.movies);
          setTotalPages(data.totalPages);
          setCurrentPage(data.currentPage);
        } else {
          const errorData = await response.json();
          throw new Error(`${response.status} - ${errorData.message}`);
        }
      } catch (error) {
        showToast(error.toString(), "error");
        console.error(error);
      }
    };

    fetchMovies();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLogOut = () => {
    logout();
    router.push("/");
  };
  return (
    <Auth>
      {movies.length === 0 ? (
        <div className="containerMovie">
          <div className="container d-flex justify-content-center">
            <label
              className="text-white textMontserrat"
              style={{ fontSize: "48px" }}
            >
              Your movie list is empty
            </label>
          </div>
          <div className="container d-flex justify-content-center p-4">
            <Link href="/newmovie">
              <button
                type="submit"
                className="button px-4 py-3"
                style={{ width: "100%" }}
              >
                <span className="submitText">Add a new movie</span>
              </button>
            </Link>
          </div>
          <div></div>
          <div className="position-absolute bottom-0 left-0">
            <Image
              src={vector}
              alt="Your Alt Text"
              style={{ width: "100vw" }}
            />
          </div>
        </div>
      ) : (
        <div className="containerMovie py-5" style={{ height: "auto" }}>
          <div className="container">
            <div className="d-flex justify-content-between head-block">
              <div className="movie-add d-flex align-items-center text-white">
                My movies
                <Link href="/newmovie">
                  <span className="ms-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3327 9.33267H14.666V14.6661H9.33269V17.3327H14.666V22.6661H17.3327V17.3327H22.666V14.6661H17.3327V9.33267ZM15.9994 2.66602C8.63934 2.66602 2.66602 8.63935 2.66602 15.9994C2.66602 23.3594 8.63934 29.3327 15.9994 29.3327C23.3594 29.3327 29.3327 23.3594 29.3327 15.9994C29.3327 8.63935 23.3594 2.66602 15.9994 2.66602ZM15.9994 26.6661C10.1194 26.6661 5.33268 21.8794 5.33268 15.9994C5.33268 10.1194 10.1194 5.33268 15.9994 5.33268C21.8794 5.33268 26.666 10.1194 26.666 15.9994C26.666 21.8794 21.8794 26.6661 15.9994 26.6661Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="logout text-white">
                Logout
                <button className="simpleBtn" onClick={() => handleLogOut()}>
                  <span className="icon ms-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6667 10.6667L20.7867 12.5467L22.8933 14.6667H12V17.3333H22.8933L20.7867 19.44L22.6667 21.3333L28 16L22.6667 10.6667ZM6.66667 6.66667H16V4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H16V25.3333H6.66667V6.66667Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="container pb-5">
            <div className="grid-box">
              {movies.map((movie) => (
                <Link key={movie._id} href={`/editMovie/${movie._id}`}>
                  <div className="grid-item">
                    <div className="movie-img text-center" key={movie._id}>
                      <img
                        src={`data:image/jpeg;base64,${movie.poster}`}
                        alt={`Poster for ${movie.title}`}
                        width={266}
                        height={400}
                      />
                    </div>
                    <div className="content">
                      <h2 className="title text-start">{movie.title}</h2>
                      <div className="year">{movie.publishingYear}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Pagination start */}
            <div className="pagination m-5">
              <div className="container d-flex justify-content-center">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="simpleBtn"
                >
                  <span className="submitText py-3">Prev</span>
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={
                      currentPage === index + 1
                        ? "paginationBtnActive mx-2"
                        : "paginationBtn mx-2"
                    }
                  >
                    <span className="submitText py-3 px-1">{index + 1}</span>
                  </button>
                ))}
                <button
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                  className="simpleBtn"
                  disabled={currentPage === totalPages}
                >
                  <span className="submitText py-3">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div style={{ overflowX: "hidden", width: "100%" }}>
            <div
              className="position-absolute bottom-0 left-0"
              style={{ width: "100%" }}
            >
              <Image
                src={vector}
                alt="Your Alt Text"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      )}
    </Auth>
  );
}

export default list;
