<h1 align="center">
  <img alt="Express" title="Express" src="https://expressjs.com/images/express-facebook-share.png" width="200px" />
</h1>

<h2 style="color:red" align="center"> Express Tutorial </h3>
<h3 align="center">
  A Rest API that register patients and detect Corona symphtoms
</h3>


<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ballot_box_with_check-goals">Goals</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#checkered_flag-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#incoming_envelope-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>


## :rocket: About the project
An API Rest made with Express to register patients and detect Corona symptoms. The file system API provided by Node was used to persist patients data, since the goal of the tutorial was to focus on Express Fundamentals and not to set up a database.


## :ballot_box_with_check: Goals
Understand how to create a server with Express, setting the routes, separating the entity operations with controllers and creating middlewares to do configurations or logics between two points.


## :checkered_flag: Installation 
First of all, make sure that you have Node.js installed on your machine.
Choose a package manager (NPM or Yarn)

<br>

Now, to install the dependencies

```
yarn install
```

To start the application 
```
  yarn dev 
  
```

## :incoming_envelope: Routes

## Status Codes

This API returns the following status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 401 | `UNAUTHORIZED` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

## :memo: Licence

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---

Made with ♥ by Laura :wave: [See my linkedin!](https://www.linkedin.com/in/laurabeatris/)
