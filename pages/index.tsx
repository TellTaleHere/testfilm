/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { _ } from "chainedcss";
import { OContainer } from "chunkyui/components/Container";

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3333/films")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    console.log(data);

    return (
        <OContainer.base>
            <h1 {..._.textCenter()}>Filmai</h1>
            <p>Repertuaras</p>
            {data &&
                data?.map((item: any) => (
                    <>
                        <div
                            key={item.id}
                            {..._.flex().border(1).mb2().p2().roundedMd()}
                        >
                            <div {..._.style`width: 50%`}>
                                <h2>{item.title}</h2>
                            </div>
                            <div {..._.style`text-align: right; width: 50%`}>
                                <p>{item.ReleaseDate}</p>
                            </div>
                            <img
                                src={item.image_poster}
                                alt=""
                                {..._.style("width: 100px")}
                            />
                        </div>
                    </>
                ))}
        </OContainer.base>
    );
};

export default Home;
