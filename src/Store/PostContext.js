import { createContext, useState } from "react";

export const PostContext = createContext(null)

function Post({children}) {
    const [postDetails, setPostDeatils] = useState("Akhilaaaaaa")
    return(
        <PostContext.Provider value={{postDetails, setPostDeatils}}>
            {children}
        </PostContext.Provider>

    )
}

export default Post;