#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AmazonConnectExtension003Stack } from '../lib/cdk-stack';

const app = new cdk.App();
new AmazonConnectExtension003Stack(app, 'AmazonConnectExtension003Stack');
