import { useContext } from "react";
import { BlogContext } from "../context/BlogContextProvider";

export default function useBlogs(){
    return useContext(BlogContext)
}