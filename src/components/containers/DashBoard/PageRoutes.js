import { Route, Routes, Navigate } from "react-router";

import AddPost from "../../addPost/AddPost";



export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="add-post" element={<AddPost />} />
           
            {/* Put your page routes here...  */}
        </Routes>
    );
}


