import { App } from 'aws-cdk-lib';
import { UiDeploymentStack } from './stacks/UiDeploymentStack';

const app = new App();

new UiDeploymentStack(app, "ClerkAuthUiDeploymentStack", {});
