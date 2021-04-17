Testing a nodejs application, deploying it to Google cloud platform Engine.

Steps:
- Clone this repo
- make sure of execute before "npm init -y" to install dependencies
- on cmd: "node ." to run the server locally
- app.yaml is needed for google cloud to start the deployment
- Create an account in google cloud platform to host this app, then "gcloud app deploy"
- Any other missing step can be checked in the source of this test: https://youtu.be/ENrzD9HAZK4

---

Adding Dockerfile, to create image:

1. Create dockerfile

2. Run : docker build -t f4bi4nff/node_app_test .
        docker build -t <image_name> <path_for_dockerfile>

3. To run image (container):
        docker run -p 5000:3000 bbaabf2cea68
        docker run -p <local_port>:<container_port> <build_id or tag>





