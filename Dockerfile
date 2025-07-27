# Dockerfile for Hitanshu Dhawan Portfolio Website
# Multi-stage build for optimized production

# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build output to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration for React Router
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 3000;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Expose port 3000 (instead of default 80)
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]