import * as cdk from "aws-cdk-lib";
import { Dashboard, GraphWidget, Metric } from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface LambdaDashboardsStackProps extends cdk.StackProps {
  dashboardName: string;
}
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
    metricName: "ConcurrentExecutions",
    statistic: "sum",
  });

  protected readonly provisionedConcurrentExecutions = new Metric({
    namespace: "AWS/LAMBDA",
    metricName: "ProvisionedConcurrentExecutions",
    statistic: "sum",
  });

  protected readonly provisionedConcurrencyUtilization = new Metric({
    namespace: "AWS/Lambda",
    metricName: "ProvisionedConcurrencyUtilization",
    statistic: "sum",
  });

  constructor(scope: Construct, id: string, props: LambdaDashboardsStackProps) {
    super(scope, id, props);

    this.lambdaDashboard = new Dashboard(this, "Cdk-Widget-Dashboard", {
      dashboardName: "Cdk-Widget-Dashboard",
    });
  }

  // add one row to dashboard for each lambda function
  public addLambda(functionName: string, displayName: string) {
    const dimensions = {
      FunctionName: functionName,
    };

    this.lambdaDashboard.addWidgets(
      new GraphWidget({
        title: displayName + " Invocations",
        left: [
          this.invocations.with({
            dimensionsMap: dimensions,
          }),
        ],
      }),

      new GraphWidget({
        title: displayName + " Duration",
        left: [
          this.duration.with({
            dimensionsMap: dimensions,
          }),

          this.duration.with({
            dimensionsMap: dimensions,
            statistic: "avg",
          }),

          this.duration.with({
            dimensionsMap: dimensions,
            statistic: "max",
          }),
        ],
      }),

      new GraphWidget({
        title: displayName + " Errors",
        left: [
          this.errors.with({
            dimensionsMap: dimensions,
          }),

          this.throttles.with({
            dimensionsMap: dimensions,
          }),

          this.provisionedConcurrencySpillovers.with({
            dimensionsMap: dimensions,
          }),
        ],
      }),

      new GraphWidget({
        title: displayName + " ConcurrentExecutions",
        right: [
          this.concurrentExecutions.with({
            dimensionsMap: dimensions,
          }),

          this.provisionedConcurrentExecutions.with({
            dimensionsMap: dimensions,
          }),

          this.provisionedConcurrencyUtilization.with({
            dimensionsMap: dimensions,
          }),
        ],
      })
    );
  }
}
