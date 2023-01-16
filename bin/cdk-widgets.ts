#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkWidgetsStack } from "../lib/cdk-widgets-stack";

const app = new cdk.App();
// new CdkWidgetsStack(app, "CdkWidgetsStack", {});

const lambdaDashboardStack = new CdkWidgetsStack(app, "SampleLambdaDashboard", {
  dashboardName: "SampleLambdaDashboard",
});

lambdaDashboardStack.addLambda(
  "SmkStack-SMKAPIGATEWAYLAMBDA33DE5576-hTstAu4UXHBP",
  "ApiGateway"
);

lambdaDashboardStack.addLambda(
  "SmkStack-ProcoreWebhookLambdaFunction7E4A366E-DIzvPop2d57D",
  "ProcoreLambdaFunction"
);

lambdaDashboardStack.addLambda(
  "SmkStack-IntacctWebhookLambdaFunction4778A09F-nEUv6A66ANcs",
  "IntacctLambdaFunction"
);
