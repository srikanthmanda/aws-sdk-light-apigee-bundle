# AWS SDK Light Apigee Bundle

`aws-sdk-light` module bundled as a single file for Rhino runtime, for use in Apigee's JavaScript callout policy as an `IncludeURL` resource.

## Usage

1. Run the command: `npm install`
2. Run the command: `npm run shipit`
3. Upload the `aws-sdk-light-apigee.bundle.js` file from the `release` directory to the Apigee proxy as a `jsc` resource.
4. Include the resource in the policy invoking the Lambda **before** the `ResourceURL` property as:
```
    <IncludeURL>jsc://aws-sdk-light-apigee.bundle.js</IncludeURL>
```

## TODO

- [ ] Find `console` polyfill as Apigee's Rhino JS engine has only `print()`.

## Resources

+ Apigee JavaScript policy: https://docs.apigee.com/api-platform/reference/policies/javascript-policy
+ Rhino JavaScript runtime: https://github.com/mozilla/rhino
+ `aws-sdk-light` module: https://github.com/karopolopoulos/aws-sdk-light
+ Structuring Javascript modules in Apigee: https://www.googlecloudcommunity.com/gc/Apigee/What-are-your-best-practices-for-structuring-Javascript-modules/td-p/66833
+ Node.js `.gitignore` source: https://github.com/github/gitignore/blob/master/Node.gitignore