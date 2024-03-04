# Virtual Machine Deployment and Management

The website is deployed to a Digital Ocean Droplet. Only administrators have Secure Shell Protocol (SSH) access to the server.

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
