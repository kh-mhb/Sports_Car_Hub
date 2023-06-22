import React from 'react';

const Blog = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-200 p-5">
            <div className="p-4 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p>Access tokens and refresh tokens are used for authentication and authorization in web applications.

                    An access token is a string that represents the authorization granted to a client to access a resource. It is usually short-lived and expires after a certain period of time. Access tokens are used to authenticate the client when making requests to the server.

                    A refresh token is a string that is used to obtain a new access token after the previous one has expired. It is usually long-lived and can be used to obtain new access tokens multiple times. Refresh tokens are used to maintain the user's session and avoid having to prompt the user to log in again.

                    Access tokens should be stored on the client-side in a secure manner, such as in an HTTP-only cookie or in local storage. Refresh tokens should be stored in a more secure manner, such as in an HTTP-only cookie with the "Secure" and "SameSite" attributes set, or in an encrypted client-side storage.</p>
                {/* Rest of the content */}
            </div>
            <div className="p-4 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                <p>
                    SQL stands for Structured Query Language and is a relational database management system (RDBMS) that uses tables to store and organize data. SQL databases are based on a predefined schema, which means that the structure of the data is fixed and any changes to the schema require altering the entire database.

                    NoSQL stands for "not only SQL" and refers to a non-relational database management system that can store and retrieve data without using a fixed schema. NoSQL databases are more flexible and scalable than SQL databases, making them ideal for handling large amounts of unstructured or semi-structured data.

                    Comparing SQL and NoSQL databases involves considering factors such as data structure, scalability, performance, and ease of use. Each type of database has its own strengths and weaknesses, and the choice between them depends on the specific needs of the project or application.
                </p>
                {/* Rest of the content */}
            </div>
            <div className="p-4 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4">What is Express.js? What is Nest.js?</h2>
                <p>
                    Express.js is a popular and lightweight web framework for Node.js that provides a set of features for building web applications and APIs. It is known for its simplicity and flexibility, and has a large and active community of developers.

                    Nest.js is a more recent web framework for Node.js that is built on top of Express.js and provides a more structured and opinionated approach to building web applications. It uses TypeScript as its main language and provides features such as dependency injection, module architecture, and powerful CLI tools. Nest.js is designed to be scalable, maintainable, and testable, and has gained popularity in recent years.
                </p>
                {/* Rest of the content */}
            </div>
            <div className="p-4 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
                <p>
                    MongoDB's aggregation framework provides a way to query and analyze data in a more advanced and flexible manner than basic CRUD operations. It allows you to perform complex data processing tasks such as filtering, grouping, sorting, and transforming data.

                    The aggregation pipeline is a series of stages that are executed in sequence to process data. Each stage takes the output of the previous stage as input and performs some operation on it. The pipeline consists of various stages such as $match, $group, $sort, $project, $limit, and many others.
                </p>
                {/* Rest of the content */}
            </div>
        </div>
    );
};

export default Blog;