import ITopic from "./topic";
import Subscriber from "./subscriber.model";
import IContent from "./content";

export default class Topic {
  static topics: ITopic[] = [];
  static getTopic(topicName: string) {
    let topic = this.topics.find(topic => topic.name === topicName);
    if (!topic) {
      topic = {
        name: topicName,
        subscribers: []
      };
    }
    return topic;
  }
  static subscribe(topicName: string, subscriber: Subscriber) {
    let topic = this.getTopic(topicName);
    this.topics.push(topic);
    topic.subscribers.push(subscriber);
  }

  static publish(topicName: string, content: IContent) {
    let topic = this.getTopic(topicName);
    topic.subscribers.forEach(subscriber =>
      subscriber.notify(topic.name, content)
    );
  }
}
