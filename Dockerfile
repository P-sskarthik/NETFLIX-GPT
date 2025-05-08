# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . ./

# Build the React app
RUN npm run build

# Use a lightweight HTTP server to serve the static files
RUN npm install -g serve

# Expose the desired port
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]