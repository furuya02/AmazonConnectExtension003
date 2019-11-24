import cdk = require('@aws-cdk/core');
import * as s3  from '@aws-cdk/aws-s3';

// 識別するためのタグ
const tag = "connect-ex-login-ccp";
//const settingFile = "OperationTime.txt";
// Lambdaのタイムゾーン
const timeZone = 'Asia/Tokyo';

export class AmazonConnectExtension003Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // CCPを設置するバケット名
    const bucketName = tag + "-login-ccp-bucket-" + this.account;

    //設定ファイル保存バケット
    const settingBucket = new s3.Bucket(this, tag + '-ccpBucket', {
      bucketName: bucketName,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })
  
    // 出力に設定ファイル用バケット名を表示
    new cdk.CfnOutput(this, "CcpBucket", {
      value: settingBucket.bucketName
    });
  }
}

 