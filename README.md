# ws

1. Download and Install [NodeJs](https://nodejs.org/en/download).

### IN VS CODE

2. Create a NodeJS project in a folder `npm init -y`
3. Add the express library to the project `npm install express`
4. Reference index.js file and run it `node index.js`
5. Reference middle.js file and run it `node middle.js`

### IN POSTMAN
Ticket to Variable in Test tab  
  ` var jsonData = JSON.parse(responseBody); postman.setEnvironmentVariable("CSRFtoken", jsonData.data.CSRFPreventionToken); postman.setEnvironmentVariable("ticket", jsonData.data.ticket);`

| `Cookie             ` | `PVEAuthCookie={{ticket}}` |
| `CSRFPreventionToken` | `{{CSRFtoken}}           ` |


nextId
`var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("data", jsonData.data.CSRFPreventionToken);`


