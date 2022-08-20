# How to Contribute

This is the repository where we house all the documentations needed for our applications. But we are also more than happy to receive support from those who are very intersted to assist us. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

Please make sure that you have read the [code of conduct](https://github.com/sws2apps/sws2apps-docs/blob/main/CODE_OF_CONDUCT.md) before continuing.

## Semantic Versioning

The release of this documentation follows semantic versioning. We release patch versions for bugfixes and minor changes to the documentation, minor versions for any dependencies update and adding new feature documentation, and major versions for any major version of our applications. Every significant change is documented in the [changelog](https://github.com/sws2apps/sws2apps-docs/blob/main/CHANGELOG.md) file.

## Branch Organization

We use the _main_ branch only to commit all code changes.

## Bugs

### Known Issues and Report

We are using [GitHub Issues](https://github.com/sws2apps/sws2apps-docs/issues) to keep track of issues, and changes needed for the documentation. Before filing a new task, try to make sure it doesn’t already exist.

### Security Bugs

Please do not report security bugs in the public issues; go through the process outlined on the [Security Policy](https://github.com/sws2apps/sws2apps-docs/blob/main/SECURITY.md).

## Proposing a Change

If you intend to add new features or suggest major changes to the website functionality, check first that your idea is not yet in our tracking issues list. If not, we recommend creating a new [discussion first](https://github.com/sws2apps/sws2apps-docs/discussions/categories/ideas). This lets us reach an agreement on your proposal before you put significant effort into it. After it has been approved, please create [new issue](https://github.com/sws2apps/sws2apps-docs/issues), and choose the correct template.

If you’re only proposing a minor change to the documentation, it’s fine to submit a pull request right away.

## Contribution Prerequisites

- You have the latest version of [Node](https://nodejs.org) and [Git](https://git-scm.com) installed
- You will be working on one item at a time.
- If you do not have it yet, fork the repository. Clone it if you will work locally.
- If you have already forked and clone the repository, make sure that it is in sync with the upstream repository ([Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)).
- Run `npm i` to install the needed dependencies

## Sending a Pull Request (PR)

We are monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We’ll do our best to provide updates and feedback throughout the process.

**Before submitting a PR**, please make sure the following is done:

- Run `npm start`, and test if the changes you are proposing are working correctly.
- Run `npm build`, to check if the application build correctly.

**When commiting your changes**, we recommend the following command to be run:

- Check again if your forked repository or your local copy is up to date with upstream. ([Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)).
- Resolve conflicts if any.
- Commit and push your changes to your forked repository.

**When your proposed changes are in the forked repository on GitHub**:

- Create your PR.
- Make sure the title follows the [conventional-changelog](https://github.com/semantic-release/semantic-release#commit-message-format) format, depending on what item or issue you have been working on. Failure to set this accordingly will cause your pull request to be discarded.

You will receive a notification and be informed when your PR is published on development, staging, or in production.
