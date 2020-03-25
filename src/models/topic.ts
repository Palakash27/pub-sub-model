import Subscriber from "./subscriber.model";

export default interface ITopic {
  name: string;
  subscribers: Subscriber[];
}
