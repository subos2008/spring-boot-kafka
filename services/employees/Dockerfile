FROM maven:3-jdk-8

WORKDIR /app

COPY . /app/
RUN mvn install 

CMD ["mvn", "spring-boot:run"]

