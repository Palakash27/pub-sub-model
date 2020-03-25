import Topic from "./topic.model";
import IContent from "./content";

export default class Subscriber {
  readonly name: string;
  private readonly topics: string[] = [];
  constructor(name: string) {
    this.name = name;
  }

  subscribeTopic(topicName: string) {
    this.topics.push(topicName);
    Topic.subscribe(topicName, this);
  }

  notify(topicName: string, content: IContent) {
    console.log(
      `${this.name} with ${topicName}: ${content.content}-${content.publisherName}`
    );
  }
}
