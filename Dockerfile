FROM jekyll/jekyll:latest

# Set the working directory
WORKDIR /srv/jekyll

# Copy the current directory contents into the container at /srv/jekyll
COPY . .

# Install dependencies if Gemfile exists
RUN if [ -f Gemfile ]; then bundle install; fi

# Install webrick (required for Ruby 3+)
RUN gem install webrick

# Expose port 4000
EXPOSE 4000

# Run jekyll serve
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--incremental"]
