import IContent from "./content";
import Topic from "./topic.model";

export default class Publisher {
  readonly name: string;
  private readonly topics: string[] = [];
  constructor(name: string) {
    this.name = name;
  }

  publish(topicName: string, contentString: string) {
    this.topics.push(topicName);
    const content: IContent = {
      content: contentString,
      publisherName: this.name
    };
    Topic.publish(topicName, content);
  }
}
