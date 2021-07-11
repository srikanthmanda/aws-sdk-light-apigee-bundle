# AWS SDK Light Apigee Bundle

`aws-sdk-light` package bundled into a file for use as an `IncludeURL` resource in Apigee's JavaScript policy.

__`aws-sdk-light`__ package: https://npmjs.com/package/aws-sdk-light

## Why?

To be able to work with _your_ source code directly in any Apigee proxy JavaScript policy.
Using the `aws-sdk-light` package as an `IncludeURL` dependency, policy code does not have to be bundled with Webpack. 

Note: All the restrictions of Apigee's JavaScript policy still apply.

## Usage

You may use the `release/aws-sdk-light-apigee.bundle.js` file of this repo following steps 3 and 4 below.

Or you may generate it from the source following all of the below steps.

0. Clone this repo: `git clone https://github.com/srikanthmanda/aws-sdk-light-apigee-bundle.git`
1. Install the packages: `npm install`
2. Run the `package.json` script to bundle the code with Webpack: `npm run shipit`
3. Add (or upload) the `aws-sdk-light-apigee.bundle.js` file from the `release` directory to the Apigee proxy as a `jsc` resource.
4. Include the bundle file in the proxy's JavaScript policies calling the AWS Lambda and STS services, **before** the `ResourceURL` property as:
```
    <IncludeURL>jsc://aws-sdk-light-apigee.bundle.js</IncludeURL>
```

## TODO

- [ ] Find `console` polyfill, as the Rhino JavaScript engine Apigee uses has only `print()`.

## Resources

+ `aws-sdk-light` source: https://github.com/karopolopoulos/aws-sdk-light
+ Apigee JavaScript Policy: https://docs.apigee.com/api-platform/reference/policies/javascript-policy
+ Structuring Javascript modules in Apigee: https://www.googlecloudcommunity.com/gc/Apigee/What-are-your-best-practices-for-structuring-Javascript-modules/td-p/66833
+ Rhino JavaScript Engine: https://github.com/mozilla/rhino
