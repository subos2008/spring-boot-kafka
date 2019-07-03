### Spring Boot Kafka Demo

A demo of a kafka 'round trip' in a few parts:

1. A REST interface that accepts POST requests and forwards them to Kafka (Kafka Producer)
2. A Kafka Consumer that listens on the same topic and ... well that remains to be implemented
3. A GET REST interface to list the events seen

Currently the publishing side works: the Web interface POSTS to the REST endpoint that publishes to the kafka topic. 

The kafka consumer (group) also works but does nothing with the received messages.

The list of received events is currently hard coded and not updated as new events come in.

## Usage

You need a running kafka to connect to, this is not included. 

URLs for kafka are hard-coded, grep the codebase for `BOOTSTRAP_SERVERS_CONFIG` and update the URLs.

    docker-compose up

Then open http://localhost:3000/ in your browser
