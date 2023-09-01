# Use the official MySQL image
FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=${DB_PASSWORD}
ENV MYSQL_DATABASE=${DB_NAME}
ENV MYSQL_USER=${DB_USER}
ENV MYSQL_PASSWORD=${DB_PASSWORD}

# Expose the port
EXPOSE 3306
