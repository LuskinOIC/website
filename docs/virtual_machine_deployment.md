# Virtual Machine Deployment and Management

The website is deployed to a Digital Ocean (DO) Droplet. DO Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Only administrators have Secure Shell Protocol (SSH) access to the LuskinOIC's droplet.

If you are an administrator and have been given the IP address, username and ssh key generated add your credentials to the .env.local file.

```Bash
IP_ADDRESS=[SSH_IP_ADDRESS]
SSH_KEY_PATH=[SSH_KEY_PATH]
SSH_USERNAME=[SSH_USERNAME]
```

Once the environment variables are set you can run the npm command to connect to the server.

```
npm run ssh
```

# PM2

PM2 is a daemon process manager that is used keep the application running and bootup during instances where the server is restarted. PM2 offers a simple and intuitive CLI, installable via NPM.

```Shell
npm install pm2@latest -g
```

To check on the status of the process running the website server you can run the status command. This will output information about id, name, mode, status, cpu, memory.

```Shell
pm2 status
```
