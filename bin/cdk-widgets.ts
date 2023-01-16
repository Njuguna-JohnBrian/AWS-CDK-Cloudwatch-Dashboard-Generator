#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import { CdkWidgetsStack } from "../lib/cdk-widgets-stack";
import { TextWidgetBackground } from "aws-cdk-lib/aws-cloudwatch";
import { EmailStack } from "../lib/transaction";

const app = new cdk.App();
// new CdkWidgetsStack(app, "CdkWidgetsStack", {});

const emails = new EmailStack(app, "Email-Stack");

const lambdaDashboardStack = new CdkWidgetsStack(app, "SampleLambdaDashboard", {
  dashboardName: "SampleLambdaDashboard",
});

lambdaDashboardStack.addTextWidget(
  "ApiGateway Lambda Metrics",
  TextWidgetBackground.SOLID
);

lambdaDashboardStack.addLambdaMetrics(
  "SmkStack-SMKAPIGATEWAYLAMBDA33DE5576-hTstAu4UXHBP",
  "ApiGateway"
);

lambdaDashboardStack.addTextWidget(
  "Procore Lambda Metrics",
  TextWidgetBackground.SOLID
);

lambdaDashboardStack.addLambdaMetrics(
  "SmkStack-ProcoreWebhookLambdaFunction7E4A366E-DIzvPop2d57D",
  "ProcoreLambdaFunction"
);

lambdaDashboardStack.addTextWidget(
  "Intacct Lambda Metrics",
  TextWidgetBackground.SOLID
);

lambdaDashboardStack.addLambdaMetrics(
  "SmkStack-IntacctWebhookLambdaFunction4778A09F-nEUv6A66ANcs",
  "IntacctLambdaFunction"
);
