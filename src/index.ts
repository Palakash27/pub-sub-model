import Publisher from "./models/publisher.model";
import Subscriber from "./models/subscriber.model";
const pub1 = new Publisher("vikas");
const pub2 = new Publisher("aakash");
pub1.publish("dogs", "I Love Dogs!");

const sub1 = new Subscriber("sub1");
sub1.subscribeTopic("dogs");

const sub2 = new Subscriber("sub2");
sub2.subscribeTopic("cats");

pub1.publish("dogs", "I Love Dogs!");
pub2.publish("cats", "I Love cats!");
