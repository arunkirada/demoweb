# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application files
COPY . .

# Expose the correct application port (5000)
EXPOSE 5000

# Define the command to run the app
CMD ["node", "index.js"]
