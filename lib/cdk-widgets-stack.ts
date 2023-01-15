import * as cdk from "aws-cdk-lib";
import { Dashboard, Metric } from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkWidgetsStack extends cdk.Stack {
  protected readonly lambdaDashboard: Dashboard;

  protected readonly invocations = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Invocations",
    statistic: "sum",
  });

  protected readonly duration = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Duration",
    statistic: "min",
  });

  protected readonly errors = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Errors",
    statistic: "sum",
  });

  protected readonly throttles = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Throttles",
    statistic: "sum",
  });

  protected readonly provisionedConcurrencySpillovers = new Metric({
    namespace: "AWS/LAMBDA",
    metricName: "ProvisionedConcurrencySpillOver",
    statistic: "sum",
  });

  protected readonly concurrentExecutions = new Metric({
    namespace: "AWS/LAMBDA",
    metricName: "ConcrrentExecutions",
    statistic: "sum",
  });

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.lambdaDashboard = new Dashboard(this, "Cdk-Widget-Dashboard", {
      dashboardName: "Cdk-Widget-Dashboard",
    });
  }
}
