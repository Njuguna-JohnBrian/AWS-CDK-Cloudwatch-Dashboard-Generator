# AWS CDK Dashboard Project Readme

This repository contains an [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/) project for creating custom dashboards in AWS CloudWatch. These dashboards display important metrics for Lambda functions, allowing you to monitor and analyze the performance of your serverless applications.

## Project Overview

The project is structured as an AWS CDK stack that enables the creation of CloudWatch dashboards with various widgets to visualize Lambda function metrics. The main components of this project are as follows:

- **`CdkWidgetsStack`**: This class defines the CloudFormation stack responsible for creating the CloudWatch dashboards. It provides methods to add text widgets and Lambda function metric widgets to the dashboards.

- **Dashboard Widgets**: The project includes various types of widgets:
  - Text Widgets: Text widgets display custom text and can have different backgrounds.
  - Graph Widgets: Graph widgets display metrics as line charts and can show various statistics.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local development environment.

2. Install the necessary dependencies using npm or yarn:

   ```bash
   npm install
   ```

3. Configure your AWS credentials using the AWS CLI or other methods to ensure the CDK can interact with your AWS account.

4. Update the `cdk-widget.ts` file with your specific Lambda function names and display names. You can add or remove Lambda function metrics as needed.

5. Deploy the CDK stack to create the CloudWatch dashboards in your AWS account:

   ```bash
   cdk deploy
   ```

## Usage

The `cdk-widget.ts` file provides an example of how to use the `CdkWidgetsStack` class to create CloudWatch dashboards and add widgets. Here's a basic outline of how to use the class:

```typescript
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkWidgetsStack } from "../lib/cdk-widgets-stack";
import { TextWidgetBackground } from "aws-cdk-lib/aws-cloudwatch";

const app = new cdk.App();

const lambdaDashboardStack = new CdkWidgetsStack(app, "SampleLambdaDashboard", {
  dashboardName: "SampleLambdaDashboard",
});

// Add text widgets with custom text and backgrounds
lambdaDashboardStack.addTextWidget("ApiGateway Lambda Metrics", TextWidgetBackground.SOLID);

// Add Lambda function metric widgets
lambdaDashboardStack.addLambdaMetrics("APIGATEWAYLAMBDA33DE5576-hTstAu4UXHBP", "ApiGateway");
lambdaDashboardStack.addLambdaMetrics("WebhookLambdaFunction7E4A366E-DIzvPop2d57D", "LambdaFunction");
lambdaDashboardStack.addLambdaMetrics("WebhookLambdaFunction4778A09F-nEUv6A66ANcs", "LambdaFunction");
```

Customize the Lambda function names, display names, and widget configurations according to your requirements.

## Clean Up

To remove the CDK stack and the associated resources from your AWS account, run the following command:

```bash
cdk destroy
```

## Dependencies

- `aws-cdk-lib`: The AWS Cloud Development Kit library.
- `aws-cdk-lib/aws-cloudwatch`: The AWS CDK library for CloudWatch dashboard and widget creation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

If you want to contribute to this project or report issues, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Feedback

If you have any questions or feedback, please don't hesitate to reach out to the project maintainers.

Thank you for using this AWS CDK Dashboard project!