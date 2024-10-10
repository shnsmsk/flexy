// CONFIGURATION ZONE - YOU CAN EDIT THESE LINES
const ScDocusaurusConfig = {
  repoOwnerName: 'hms-networks',
  repoName: 'sc-java-maven-starter-project',
  title: 'Solution Center Java Starter Project',
  description: 'Kick off Java development on the Ewon Flexy with the HMS Networks Solution Center Java Starter Project.',
  meta: 'Homepage for the HMS Networks MU Americas Solution Center Java Starter Project.',
  configFileName : 'ExampleConfigurationFile.json',
  applicationJarFileName : 'sc-java-maven-starter-project-X.Y.Z-full.jar',
  commonDocRepoTargetBranchOrTag: 'v1.0.0',
  keywords: 'ewon, jtk, java, maven, project, template, build, ant, modern, structure, starting, guide, features, license, requirements, troubleshooting, support',
};

// EXPORT ZONE - DON'T TOUCH BELOW THIS LINE
module.exports = {
  ...ScDocusaurusConfig,
  repoUrl: 'https://github.com/' + ScDocusaurusConfig.repoOwnerName + '/' + ScDocusaurusConfig.repoName,
  repoArchiveUrl: 'https://github.com/' + ScDocusaurusConfig.repoOwnerName + '/' + ScDocusaurusConfig.repoName + '/archive/refs/heads/main.zip',
  repoLatestReleaseUrl: 'https://github.com/' + ScDocusaurusConfig.repoOwnerName + '/' + ScDocusaurusConfig.repoName + '/releases/latest',
  repoNewIssueUrl: 'https://github.com/' + ScDocusaurusConfig.repoOwnerName + '/' + ScDocusaurusConfig.repoName + '/issues/new',
  commonDocsRepoUrl: 'https://raw.githubusercontent.com/hms-networks/sc-ewon-flexy-common-docs/' + ScDocusaurusConfig.commonDocRepoTargetBranchOrTag + '/',
};