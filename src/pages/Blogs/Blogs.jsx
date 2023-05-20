import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2 my-10'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <hr />
                    <p><span className='text-green-600'>ANS: </span>
                        Access token and refresh token both is used to authorization. An access token is a secret token that used for when client wants to get some resource from server. The server authenticate the client by access token if client is valid then server send the resource to client But Access has short life span. On the other hand refresh token is a long lived token that used for when the access token expires the client can get a new access token by this refresh token. We can store access token and refresh token in LocalStorage or as a HTTPS cookie. In those method HTTPS cookie is more secure than localstorage.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <hr />
                    <p><span className='text-green-600'>ANS: </span>
                        SQL(Structured Query Language) database is a structured data base where data stored in in tabular format. There are relation between every table data by using keys. On the other hand NoSQL(Not Only SQL) database has more flexibility. In NoSQL database data are stored in as a collection and that collection has many documents in those documents there data stored in field value pair.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <hr />
                    <p><span className='text-green-600'>ANS: </span>
                        Express JS and Nest JS both is Node Js framework. Express JS is minimal flexible web application framework for web application and api. It is lightweight and offer many flexibility. It allows to adding libraries as per need. On the other hand Nest is a progressive efficient and scalable framework for building server side application. It is built with typescript and modern JavaScript concepts. It has various feature we don't need to install any libraries.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <hr />
                    <p><span className='text-green-600'>ANS: </span>
                        MongoDB aggregation is a function that gives opportunity to perform complex data analysis and transformation. It is way of managing large number of document in a collection. The aggregate function takes an array of stages as input. Each stages represent a specific operation in aggregation pipeline then executed sequentially. It to transform our data in many way like filter, group and many more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;