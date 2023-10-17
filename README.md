# ws

1. Download and Install [NodeJs](https://nodejs.org/en/download).

### IN VS CODE

2. Create a NodeJS project in a folder `npm init -y`
3. Add the express library to the project `npm install express`
4. Reference index.js file and run it `node index.js`
5. Reference middle.js file and run it `node middle.js`

### IN POSTMAN
[Dummy API](https://dummyjson.com/docs/products)

[Proxmos VE API Documentation](https://pve.proxmox.com/pve-docs/api-viewer/)

Ticket to Variable in Test tab. 

POST [https://10.2.4.30:8006/api2/json/access/ticket](https://10.2.4.30:8006/api2/json/access/ticket)
* params:
 * username : {{username}}
 * password : {{NiumaPass}}

 ` var jsonData = JSON.parse(responseBody); postman.setEnvironmentVariable("CSRFtoken", jsonData.data.CSRFPreventionToken); postman.setEnvironmentVariable("ticket", jsonData.data.ticket);`

 `Cookie             ` | `PVEAuthCookie={{ticket}}`
 
 `CSRFPreventionToken` | `{{CSRFtoken}}           ` 


get LXC Machine list

GET [https://10.2.4.30:8006/api2/json/nodes/phoenix/lxc](https://10.2.4.30:8006/api2/json/nodes/phoenix/lxc)



nextId

GET [https://10.2.4.30:8006/api2/json/cluster/nextid](https://10.2.4.30:8006/api2/json/cluster/nextid)

`var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("data", jsonData.data.CSRFPreventionToken);`


