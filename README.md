# ws

1. Download and Install [NodeJs](https://nodejs.org/en/download).

### IN VS CODE

2. Create a NodeJS project in a folder `npm init -y`
3. Add the express library to the project `npm install express`
4. Reference index.js file and run it `node index.js`
5. Reference middle.js file and run it `node middle.js`

### IN POSTMAN
Ticket to Variable in Test tab  [https://10.2.4.30:8006/api2/json/access/ticket](https://10.2.4.30:8006/api2/json/access/ticket)
  ` var jsonData = JSON.parse(responseBody); postman.setEnvironmentVariable("CSRFtoken", jsonData.data.CSRFPreventionToken); postman.setEnvironmentVariable("ticket", jsonData.data.ticket);`

 `Cookie             ` | `PVEAuthCookie={{ticket}}`
 
 `CSRFPreventionToken` | `{{CSRFtoken}}           ` 
get LXC Machine list



nextId
`var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("data", jsonData.data.CSRFPreventionToken);`


