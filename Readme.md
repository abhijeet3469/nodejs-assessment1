Node.js
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node modules
http, https, fs, path, os these are some node core modules

-> http helps us with lauching a server, also with other tasks like sending requests because a node app could also send a request to another server,

-> https helps us with launching a SSL server where all code encrypted

-> path module helps us with constructing paths to file on a file system that work on any operating system because windows and mac and linux use different path formats.

-> OS package helps us with operating system, relevant information and so on

process of creating package and configure start
create a package.json file

npm init (to configure file) or npm init --y

create start: "node index.js" in scripts