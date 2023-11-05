import { Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subscriptions from "aws-cdk-lib/aws-sns-subscriptions";

export class EmailStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const emailTopic = new sns.Topic(this, "Email-Topic");
    emailTopic.addSubscription(
      new subscriptions.EmailSubscription("email@email.com")
    );
  }
}
