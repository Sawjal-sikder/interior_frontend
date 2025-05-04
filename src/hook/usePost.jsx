import { useState } from "react";

const usePost = (path) => {
    const baseurl = "http://127.0.0.1:8000/"; 

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const postData = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(`${baseurl}${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const json = await res.json();
            setResponse(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, response, error, isLoading };
};

export default usePost;
