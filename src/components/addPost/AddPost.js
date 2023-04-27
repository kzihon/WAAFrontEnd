import React from "react";
import "./addPost.css";
const AddPost = (props) => {
  const formRef = useRef()
  const navigate = useNavigate();

  const onSubmit = (e) => {
      e.preventDefault();
      const form = formRef.current;
      
      const body = {
          name: form["name"].value,
          title: form["title"].value
      }
      axios.post('http://localhost:8080/api/v1/posts', body)
          .then(() => navigate("/posts"))
          .catch(err => console.log(err))
  }

  return (
      <div className="NewProduct">

          <form ref={formRef} onSubmit={onSubmit}>
              <h1>Add a Student</h1>

              <label>Name</label>
              <input type="text"
                  label={'name'}
                  name={'name'}
              />

              <label>GPA</label>
              <input type="text"
                  label={'title'}
                  name={'title'}
              />
              <button>Add post </button>
          </form>

      </div>
  );
  }
export default AddPost
