import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    if (!data) {
        // Render a loading state if data is not yet available
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                Github followers: {data.followers}
                <div className="flex mt-3">
                    <div className="mr-3">
                        <img src={data.avatar_url} alt="GitHub profile" width={300} />
                    </div>
                    <div className="">
                        <div>User Name: {data.name}</div>
                        <div>Public Repository: {data.public_repos}</div>
                        <div>Following: {data.following}</div>
                    </div>
                </div>
                
            </div>
            
        </>
    );
}

export default Github;

export const gitloader = async () => {
    const res = await fetch('https://api.github.com/users/SastaStudent');
    if (!res.ok) {
        throw new Error("Failed to fetch GitHub data");
    }
    return res.json();
};
