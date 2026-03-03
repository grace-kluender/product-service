FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source code
COPY src ./src

# Expose service port
EXPOSE 3001

# Start application
CMD ["node", "src/index.js"]